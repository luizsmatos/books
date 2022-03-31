import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { css } from '@emotion/react';
import BeatLoader from 'react-spinners/BeatLoader';

import api from 'services/api';
import { useAuth } from 'hooks/useAuth';
import useWindowDimensions from 'hooks/useWindowDimensions';
import Book, { IBook } from 'components/Book';

import { FiLogOut } from 'react-icons/fi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import logo from 'assets/images/logo-black.png';

import {
  Container,
  BookContainer,
  HeaderContainer,
  Pagination,
  Loading,
} from './styles';

const override = css`
  display: block;
  border-color: #f7e2eb;
`;

interface IBooksResponse extends AxiosResponse {
  data: {
    data: IBook[];
    page: number;
    totalPages: number;
    totalItems: number;
  };
}

const Books: React.FC = () => {
  const { signOut, profile } = useAuth();
  const { width } = useWindowDimensions();
  console.log(width);
  const { user } = profile;
  const [books, setBooks] = useState<IBook[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response: IBooksResponse = await api.get(
          `/books?page=${page}&amount=${12}`
        );

        const { data } = response;

        setBooks(data.data);
        setTotalPages(Math.ceil(data.totalPages));
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [page]);

  return (
    <Container>
      <HeaderContainer>
        <div className="content-logo">
          <img src={logo} alt="ioasys logo" />
          <h3>Books</h3>
        </div>

        <div className="content-user">
          {width > 500 && (
            <p>
              Bem vindo, <span>{user?.name}!</span>
            </p>
          )}

          <button type="button" onClick={() => signOut()} className="btn">
            <FiLogOut size={16} color="#333333" />
          </button>
        </div>
      </HeaderContainer>

      <BookContainer>
        {!loading ? (
          books.map((book) => <Book key={book.id} book={book} />)
        ) : (
          <Loading>
            <BeatLoader
              color="#f7e2eb"
              loading={loading}
              css={override}
              size={50}
            />
          </Loading>
        )}
      </BookContainer>

      <Pagination>
        <p>
          Página <span>{page}</span> de <span>{totalPages}</span>
        </p>
        <button
          type="button"
          className="btn"
          onClick={() => setPage(page === 1 ? 1 : page - 1)}
        >
          <IoIosArrowBack size={16} color="#333333" />
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setPage(page === 100 ? 100 : page + 1)}
        >
          <IoIosArrowForward size={16} color="#333333" />
        </button>
      </Pagination>
    </Container>
  );
};

export default Books;

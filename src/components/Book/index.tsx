import React from 'react';
import BookContainer from './styles';

export interface IBook {
  id: string;
  title: string;
  description: string;
  authors: string[];
  pageCount: number;
  category: string;
  imageUrl: string;
  publisher: string;
  published: number;
}

const Book: React.FC<{ book: IBook }> = ({ book }) => {
  const {
    id,
    title,
    description,
    authors,
    pageCount,
    category,
    imageUrl,
    published,
    publisher,
  } = book;

  return (
    <BookContainer>
      <img src={imageUrl} alt={title} />
      <div className="content-infos">
        <header>
          <h4>{title}</h4>
          {authors.map((author) => (
            <p key={author} className="authors">
              {author}
            </p>
          ))}
        </header>
        <div>
          <p>{pageCount} páginas</p>
          <p>Editora {publisher}</p>
          <p>Publicado em {published}</p>
        </div>
      </div>
    </BookContainer>
  );
};

export default Book;

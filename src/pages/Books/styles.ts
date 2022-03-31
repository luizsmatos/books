import styled from 'styled-components';

import background from 'assets/images/background-books.png';

export const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;

  padding: 1.5rem;

  .btn {
    background: transparent;
    border: 1px solid rgba(51, 51, 51, 0.2);
    border-radius: 50%;
    height: 32px;
    width: 32px;

    align-items: center;
    display: flex;
    justify-content: center;

    margin-right: 0.5rem;

    transition: background-color 0.2s;

    &:hover {
      background-color: rgba(51, 51, 51, 0.1);
    }
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem 0rem;

  .content-logo {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .content-user {
    align-items: center;
    display: flex;
    justify-content: center;

    p {
      color: var(--gray-20);
      font-size: 0.8rem;
      font-weight: 400;
      text-align: right;
      margin-right: 1rem;

      span {
        color: var(--gray-20);
        font-size: 0.8rem;
        font-weight: 500;
        text-align: right;
      }
    }
  }

  h3 {
    color: var(--black);
    font-weight: 300;
    font-size: 1.75rem;

    margin-left: 1rem;
  }
`;

export const BookContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 2.65rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 1rem;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 61.55vh;
`;

export const Pagination = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;

  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem 0rem;

  p {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.2rem;
    margin-right: 1rem;

    span {
      font-size: 0.75rem;
      font-weight: 500;
      line-height: 1.2rem;
    }
  }
`;

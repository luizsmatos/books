import styled from 'styled-components';

const BookContainer = styled.div`
  background-color: var(--white);
  border-radius: 0.25rem;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);

  height: 180px;
  display: flex;
  padding: 1rem;

  .content-img {
    img {
      max-width: 81px;
    }
  }

  .content-infos {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    padding: 0 0.5rem;

    header {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;

      h4 {
        font-size: 0.9rem;
        font-weight: 500;
        line-height: 1rem;
        color: var(--gray-20);
      }

      .authors {
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1rem;
        color: var(--violet-red);
      }
    }

    div {
      p {
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1.2rem;
        color: var(--gray-90);
      }
    }
  }
`;

export default BookContainer;

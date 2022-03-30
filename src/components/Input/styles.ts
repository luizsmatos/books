import styled, { css } from 'styled-components';
import px2vw from 'utils/px2vw';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

const Container = styled.div<ContainerProps>`
  background: rgba(0, 0, 0, 0.32);
  border-radius: 0.5rem;
  backdrop-filter: blur(2px);
  display: flex;

  height: 60px;
  padding: 0.7rem 1.2rem;

  @media (min-width: 480px) {
    width: ${px2vw(430, 480)};
  }

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(368, 1024)};
  }

  @media (min-width: 1440px) {
    width: ${px2vw(400)};
  }

  & + div {
    margin-top: 1rem;
  }

  label {
    width: 100%;

    p {
      color: var(--white);
      font-size: 0.8rem;
      font-weight: 400;
      line-height: 1rem;

      opacity: 0.5;
    }

    input {
      color: var(--white);
      background: transparent;
      border: 0;

      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;
      width: 100%;

      &::placeholder {
        color: var(--white);
        opacity: 0.5;
      }

      ${(props) =>
        props.isFocused &&
        css`
          color: var(--white);
        `}

      ${(props) =>
        props.isFilled &&
        css`
          color: var(--white);
        `}
    }
  }
`;

export default Container;

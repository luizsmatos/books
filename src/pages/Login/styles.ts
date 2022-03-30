import styled from 'styled-components';

import { Form as Unform } from '@unform/web';
import px2vw from 'utils/px2vw';

import background from 'assets/images/background-login.png';

export const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: flex-start;
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;

  @media (max-width: 480px) {
    width: ${px2vw(300, 320)};
    top: ${px2vw(200, 320)};
    left: ${px2vw(10, 320)};
    margin: 0 auto;
  }

  @media (min-width: 480px) {
    width: ${px2vw(430, 480)};
    top: ${px2vw(200, 480)};
    left: ${px2vw(10, 480)};
    margin-left: ${px2vw(25, 480)};
  }

  @media (min-width: 720px) {
    width: ${px2vw(320, 720)};
    top: ${px2vw(250, 720)};
    left: ${px2vw(10, 720)};
    margin-left: ${px2vw(25, 720)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(400)};
    top: ${px2vw(200, 1024)};
    left: ${px2vw(10, 1024)};
    margin-left: ${px2vw(115)};
  }

  header {
    align-items: center;
    display: flex;
    justify-content: flex-start;

    margin-bottom: 3rem;
    width: 100%;

    h3 {
      color: var(--white);
      font-weight: 300;
      font-size: 1.75rem;

      margin-left: 1rem;
    }
  }

  button {
    align-items: center;

    background: var(--white);
    border: 0;
    border-radius: 2.8rem;
    color: var(--violet-red);
    height: 36px;

    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 500;

    margin-left: 0.5rem;
    min-width: 85px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Tooltip = styled.div`
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);
  border-radius: 0.25rem;
  display: ${(props) => (props.hidden ? 'block' : 'none')};

  max-width: 245px;
  padding: 1rem 1rem;
  position: relative;
  text-align: center;

  span {
    color: var(--white);
    font-size: 1rem;
    font-weight: 700;
    line-height: 1rem;

    margin-left: 0.5px;
  }
`;

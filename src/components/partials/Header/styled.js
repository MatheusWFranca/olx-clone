import styled from 'styled-components'

export const HeaderArea = styled.header`
  height: 6rem;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);

  .container {
    max-width: 1000px;
    margin: auto;
    display: flex;
    align-items: center;
  }

  .logo {
    flex: 1;
    display: flex;
    align-items: center;
    height: 6rem;
    padding: 5px;

    span {
      font-size: 2.7rem;
      font-weight: bold;
      color: #e80;
    }
  }

  nav {
    padding: 1rem 0;

    ul {
      display: flex;
      align-items: center;
    }

    li {
      margin-right: 1.6rem;
    }

    a {
      padding: 1rem 0.5rem;
      color: #1c1c1c;
      font-size: 1.4rem;
      transition: all 0.2s;

      &:hover {
        color: #e80;
      }

      &.button {
        display: block;
        color: #fff;
        background: #e80;
        padding: 1rem 2rem;
        border-radius: 5px;
        transition: all 0.3s;
        box-shadow: 0 4px 8px rgb(30 60 90 / 20%);
      }

      &.button:hover {
        transform: scale(1.1);
      }
    }
  }
`

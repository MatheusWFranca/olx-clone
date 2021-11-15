import styled from 'styled-components'

export const HeaderArea = styled.header`
  height: 6rem;
  background-color: #1c1c1c;
  border-bottom: 1px solid #ccc;

  .container {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    background: #fff;
    align-items: center;
  }

  .logo {
    flex: 1;
    display: flex;
    align-items: center;
    height: 6rem;

    span {
      font-size: 2.7rem;
      font-weight: bold;
      color: #e2b;
    }
  }
`

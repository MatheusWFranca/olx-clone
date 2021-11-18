import styled from 'styled-components'

export const PageArea = styled.div`
  .area {
    display: flex;
    align-items: center;
    padding: 2rem;
    max-width: 50rem;

    .area--title {
      width: 20rem;
      text-align: right;
      padding-right: 2rem;
      font-size: 1.4rem;
    }

    .area--input {
      display: flex;
      flex: 1;

      input {
        width: 100%;
        font-size: 1.4rem;
        transition: all ease 0.4s;
      }

      input[type='checkbox'] {
        box-shadow: none;
        width: 1.6rem;
      }
    }

    button {
      width: 100%;
      font-size: 1.4rem;
      padding: 1rem 3rem;
    }
  }
`

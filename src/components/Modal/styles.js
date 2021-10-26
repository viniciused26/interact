import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: #1a1a2e;
  border-bottom: 0.5px solid #fff;
  display: flex;
`
export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalWrapper = styled.div`
  width: 850px;
  height: fit-content;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: ${props => props.background};
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;

  img{
    width: 50px;
    height: 50px;
  }

  button{
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  height: 20%;
  justify-content: flex-end;

  span{
    padding-right: 190px;
    align-items: center;
    font-size: 30px;
    color: #fff;
    font-weight: bold;
    text-align: center;
  }

  button{
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

  img{
    width: 50px;
    height: 50px;
  }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`
export const Middle = styled.div`
  width: 100%;
  height: ${props => props.height};
  display: flex;
  align-items: center;
  justify-content: center;
  
  img{
    width: 50px;
    height: 50px;
  }

  button{
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  span {
    width: 100%;
    height: 80%;
    color: #fff;
    font-weight: bold;
    font-size: 25px;
    font-weight: bold;
    overflow-y: auto;
    button{ 
      display: none;
    }
    label{
      display: flex;
      align-items: center;
      justify-content: space-around;
    
    }

    h3{
      margin-left: 55px;
    }
  }


`
export const Bottom = styled.div`
  display: flex;
  height: 40%;
  align-items: center;

  img{
    width: 50px;
    height: 50px;
  }

  button{
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`


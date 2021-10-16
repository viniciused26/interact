import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: #1a1a2e;
  border-bottom: 0.5px solid #fff;
  display: flex;
`
export const LeftSide = styled.div`
  width: 50%;
  height: 80px;
  
  display: flex;
  align-items: center;
  padding-left: 25px;

`
export const Middle = styled.div`
width: 50%;
height: 80px;
display: flex;
justify-content:center;

span {
  padding-top: 25px;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
}
`

export const RightSide = styled.div`
  width: 50%;
  height: 80px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 25px;

  img{
    width: 50px;
    height: 50px;
  }

  imgHitory{
    width:50px;
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


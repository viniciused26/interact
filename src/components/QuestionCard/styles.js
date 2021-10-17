import styled from 'styled-components'

export const Container = styled.div`
`

export const BottomSide = styled.div`
  width: ${props => props.width};
  height: 70px;
  background: #0f3460;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;

  margin-left: 100px;
  display: flex;

  span {
    color: white;
    font-weight: bold;
    font-size: 20px;
  }
`
export const TopSide = styled.div`

  width: ${props => props.width};

  height: 30px;
  background: #379392;
  margin-top: 30px;

  margin-left: 100px;
  display: flex;

  span {
    display:flex;
    align-items: center;
    padding-left: 25px;
    color: white;
    font-weight: bold;
    font-size: 20px;
  }

`

export const LeftSide = styled.div`
  width: 80%;
  height: 80px;

  display: flex;
  align-items: center;
  padding-left: 25px;

  span {
    color: white;
    font-weight: bold;
    font-size: 20px;
  }
`
export const RightSide = styled.div`
  width: 20%;
  height: 80px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 25px;

  button {
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

  img {
    width: 50px;
    height: 50px;
  }

  span {
    padding-top: 25px;
    color: white;
    font-weight: bold;
    font-size: 15px;
  }
`

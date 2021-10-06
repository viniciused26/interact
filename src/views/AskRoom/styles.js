import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #1a1a2e;

`
export const LeftSide = styled.div`
  width: 50%;
  float: left;

  h1 {
    text-align: center;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
  }
`
export const RightSide = styled.div`
  width: 50%;
  float: left;
  
`

export const Bottom = styled.div`
  width: 50%;
  position: fixed;
  right: 55px;
  bottom: 35px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  input {
    margin-bottom: 25px;
    font-size: 16px;
    width: 85%;
    height: 50px;
    border-radius: 8px;
    padding: 0 16px;
    background: #fff;
    border: 2px solid #16213e;
    
  }

  input::placeholder {
    color: #16213E;
  }

  SmallButton{
    margin-right: 25px;
  }

`
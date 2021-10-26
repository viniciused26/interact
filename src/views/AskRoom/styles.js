import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1a1a2e;
  overflow-x: hidden;
`
export const HostName = styled.div`
  text-align: center;
  font-size: 30px;
  color: white;
  margin-top: 35px;
  margin-left: 100px;
  width: 350px;
  height: 50px;
  background: #e94560;
  border-radius: 20px;

  span{
    display: flex;
    align-items: center;
    font-weight: bold;
    padding-top: 8px;
    padding-left: 25px;
  }

`

export const LeftSide = styled.div`
  width: 50%;
  height: 60vh;
  float: left;
  overflow-y: scroll;
  margin-top: 30px;

  h1 {
    text-align: center;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
  }
`
export const RightSide = styled.div`
  width: 50%;
  height: 60vh;
  float: left;
  overflow-y: scroll;
`

export const Bottom = styled.div`
  width: 100%;
  justify-content: center;
  position: absolute;

  position: static;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  input {
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 16px;
    width: 50%;
    height: 50px;
    border-radius: 8px;
    padding: 0 16px;
    background: #fff;
    border: 2px solid #16213e;
  }

  input::placeholder {
    color: #16213e;
  }

  SmallButton {
    margin-right: 25px;
  }
`

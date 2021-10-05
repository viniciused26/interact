import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

export const LeftSide = styled.div`
  width: 50%;
  height: 100vh;
  background: #1a1a2e;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  span {
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }
`

export const RightSide = styled.div`
  width: 50%;
  height: 100vh;
  background: #fff;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  span {
    text-align: center;
    color: #16213e;
    font-size: 20px;
    font-weight: bold;
  }
`

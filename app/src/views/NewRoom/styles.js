import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #1a1a2e;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Center = styled.div`
  widht: 320px;
  height: 500px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  input {
    font-size: 16px;
    margin-bottom: 46px;
    width: 260px;
    height: 50px;
    border-radius: 8px;
    padding: 0 16px;
    background: #fff;
    border: 1px solid #a8a8b3;
  }
  span {
    margin-bottom: 27px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }
`

import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;
background: #1A1A2E;

display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

input {
    margin-bottom: 25px;
    color: #1A1A2E;
    font-size: 16px;
    width: 260px;
    height: 50px;
    border-radius: 8px;
    padding: 0 16px;
    background: #fff;
    border: 2px solid #1A1A2E;
}

input::placeholder {
    color: #16213E;
}

span {
    margin-bottom: 25px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: bold;

}

  img {
    position: absolute;
    display: flex;
    height: 90px;
    top: 50px;
    left: 40px;
  }

`

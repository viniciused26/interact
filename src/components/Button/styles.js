import styled from 'styled-components'

export const Container = styled.div`
  .button {
    width:  ${props => props.width? props.width : '350px'};
    height: ${props => props.height? props.height : '100px'};
    background: ${props => props.color};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin:  ${props => props.margin? props.margin : '40px'};

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    
    span {
      color: #fff;
      font-weight: bold;
      font-size: 25px;
      font-weight: bold;
    }
  }
`

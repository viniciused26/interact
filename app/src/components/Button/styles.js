import styled from 'styled-components';

export const Container = styled.div`
    width: 350px;
    height: 100px;
    background: ${props => props.color};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;

    span {
        color: #FFF;
        font-weight: bold;
        font-size: 25px;
    }

`
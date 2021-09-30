import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;

`

export const LeftSide = styled.div`
    width: 50%;
    height: 935px;
    background: #1A1A2E;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    span {
        text-align: center;
        color: #FFF;
        font-size: 20px;
    }
`

export const RightSide = styled.div`
    width: 50%;
    height: 935px;
    background: #FFF;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    span {
        text-align: center;
        color: #16213E;
        font-size: 20px;
    }

`
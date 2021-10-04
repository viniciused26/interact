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
`


import styled from 'styled-components'

export const Container = styled.div`
  width: 40%;
  height: 100px;
  background: #0F3460;
  border-top: 30px solid #379392;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
`
export const LeftSide = styled.div`
  width: 80%;
  height: 80px;
  
  display: flex;
  align-items: center;
  padding-left: 25px;

`
export const RightSide = styled.div`
  width: 20%;
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


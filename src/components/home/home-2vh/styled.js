import styled from '@emotion/styled';
import secondBg from '../../../assets/img/2vh-bg.png';



export const SecondBackground = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: url(${secondBg}) no-repeat;
  background-size: cover;
  font-family: sans-serif;
`


export const Container = styled.div`
  box-sizing: border-box;
  padding: 1.2vh 1.8vw 1.8vh 1.8vw;
  width: 56vw;
  height: 85%;
  opacity: 88%;
  margin: 12vh 8vh 5vh 0;
  float: right;
  display: flex;
  flex-direction: column;
  background: #1D3557;
  border-radius: 20px;
  h1 {
    font-size: 1.8vw;
    margin: 0 auto;
  }
  hr {
    width: 7vw;
    margin: 0 0 0 20px;
    border: 2px solid #FFF579;
    background: #FFF579;
    border-radius: 5px;
    margin: 0 auto;
  }
`

export const WrapperInfo = styled.div`
 display: flex;
`

export const GiftPosition = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 100vh;
`




export const GiftWrapper = styled.div`
  width: 100%;
  border-radius: 40px;
  :hover {
      cursor: pointer;
  }
  .shipWrapper {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 80vh;
    top: 10%;
    left: 10%;
  }
  .ship {
    width: 10vw;
    image {
      width: 5vw;
    }
  }

`

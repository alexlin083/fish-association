import styled from '@emotion/styled';
import fourBg from '../../../assets/img/4vh-bg.png';

//title part css
export const FourBackground = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: url(${fourBg}) no-repeat;
  background-size: cover;
  font-family: sans-serif;
`


export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Card = styled.div`
  position: absolute;
  width: 55vw;
  height: 85vh;
  background-color: rgba(72,145,170,.75);
  border-radius: 20px;
  margin-top: 12vh;
  padding: 2vh 0;
  h1 {
    color: white;
    font-size: 1.8vw;
    text-align: center;
    margin: 0;
  }
  hr {
    margin: 0 auto;
    width: 8.5vw;
    border: 2px solid white;
    background: white;
    border-radius: 5px;
  }
 
  
`

export const ItemWrapper = styled.div`
  width: 100%;
  height: 45%;
`


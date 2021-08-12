import styled from '@emotion/styled';
import thirdBg from '../../../assets/img/3vh-merge.png';
import { keyframes } from '@emotion/react'

//title part css
export const ThirdBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${thirdBg}) no-repeat;
  background-size: cover;
  font-family: sans-serif;
`



export const Title = styled.div`
  width: 50%;
  height:87%;
  background: #9B9ECF;
  opacity: 50%;
  position: absolute;
  border-radius: 20px;
  margin: 10vh 0 0 10vw;
  padding: 20px 10px 20px 10px;
  h1 {
    color: white;
    font-size: 1.8vw;
    text-align: center;
    margin: 0;
  }
  hr {
    width: 10.5vw;
    border: 2px solid #FFF579;
    background: #FFF579;
    border-radius: 5px;
    margin: 0 auto;
  }
`

export const ActivityWrapper = styled.div`
  width: 50%;
  top: 18%;
  left: 10%;
  display: flex;
  flex-direction: column;
  position: absolute;
  button {
    transition: all 0.2s;
  }
  button:hover {
    background: #2B5772;
  }
`
const swing = keyframes`
  from {
    transform: rotate(-3deg)
  }

  to {
    transform: rotate(5deg)
  }

`

export const Fishing = styled.figure`
  position: absolute;
  width: 26vw;
  margin: 0;
  left: 65vw;
  top: 78vh;
  transform-origin: bottom right;
  animation: ${swing} 4s ease-out infinite alternate-reverse;
  img {
      width: 100%;
  }
`


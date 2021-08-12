import styled from '@emotion/styled';

//title part css
export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  font-family: sans-serif;
`

export const TitleWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 30%;
  left: 22%;
`

export const FigureLogo = styled.figure`
  width: 6vw;
  overflow: hidden;
  margin: 0 20px 0 0;
  img {
      width: 100%;
      object-fit: fill;
  }

`

export const Title = styled.div`
  width: 20vw;
  hr {
      margin: 0;
      width: 18vw;
      border: 5px solid #00A2E0;
      background: #00A2E0;
      border-radius: 5px;
  }
  h1 {
      margin: 0;
      font-size: 3.7vw;
      font-weight: bold;
  }
  p {
    font-size: 1.7vw;
    font-weight: bold;
  }
`
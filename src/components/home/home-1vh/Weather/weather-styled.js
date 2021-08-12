import styled from '@emotion/styled';

export const Container = styled.div`
   position: absolute;
   width: 25vw;
   bottom: 0;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   font-family: sans-serif;
`;
//#474747 100%   #1D3557 82%
export const WeatherCard = styled.div`
  margin: 2vw;
  position: relative;
  background-color: #1D3557;
  opacity: 82%;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 25px;
  display: flex;
  flex-direction: column
`;

export const Location = styled.div`
  font-size: 1.8vw;
  font-weight: bold;
  color: white;
  margin: 0;
  hr {
      width: 5vw;
      margin: 0;
      border: 2px solid #FFF579;
      background: #FFF579;
      border-radius: 5px;
      margin-bottom: 8px;
  }
`;

export const Description = styled.div`
  font-size: 1vw;
  color: #DED2C6;
  margin-bottom: 2.8vh;
`;

export const CurrentWeather = styled.div`
  display: flex;
  justify-content: between;
  svg {
    max-width: 140px;
    margin-left: 1.2vw;
    margin-bottom: 1.2vh;
  }
`;

export const Temperature = styled.div`
  color: white;
  font-size: 5.5vw;
  display: flex;
  align-items: center;
`;

export const Celsius = styled.div`
  color: white;
  font-size: 2.5vw;
`;


export const AirFlow = styled.div`
  color: #DED2C6;
  display: flex;
  font-size: 1vw;
  align-items: center;
  margin-bottom: 0.8vh;
  svg {
      width: 15%;
      margin-right: 0.5vw;
  }
`;

export const IconWrapper = styled.div`
  font-size: 1vw;
  display: flex;
  align-items: center;
  justify-content: between;
`;

export const Rain = styled.div`
  color: #DED2C6;
  display: flex;
  align-items: center;
  svg {
    width: 50%;
    margin-right: 0.5vw;
}
`;

export const Refresh = styled.div`
  color: #DED2C6;
  font-size: 0.8vw;
  align-self: flex-end;
  margin-left: 1vw;
  display: flex;
  align-items: flex-end;
  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
  svg {
    animation: rotate infinite ${props => props.isLoading ? '1.5s' : '0s'} linear;
    margin-left: 0.5vw;
    width: 1.8vw;
    height: 1.8vh;
    cursor: pointer;
  }
`;
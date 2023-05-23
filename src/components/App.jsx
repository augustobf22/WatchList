import styled from 'styled-components'
import SearchBar from './SearchBar'
import MoviesHome from './MoviesHome'

const colors = ["#E3C91D","#EA5145", "#2F2A67"];

export default function App() {
  return (
    <ContainerHome>
      <Header>
        <ion-icon name="menu-sharp"></ion-icon>
        <p>WATCHLIST</p>
        <div></div>
      </Header>
      <SearchBar colorsArr={colors}/>
      <MoviesHome colorsArr={colors}/>
    </ContainerHome>
  )
}

const ContainerHome = styled.div`
  width: 100%;
  height: 1080px;
  background-color: ${colors[1]};

  position: relative;
`;

const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${colors[2]};

  position:fixed;
  top: 0px;
  left: 0px;
  z-index:1;

  display:flex;
  justify-content: space-between;
  align-items: center;

  p{
    font-family: 'Raleway', sans-serif;
    font-size: 55px;
    font-weight: 700;
    color: ${colors[0]};
    transform: translateX(-15px);
  }

  ion-icon{
    font-size: 35px;
    margin-left: 15px;
    color: ${colors[0]};

    &:hover{
      cursor: pointer;
    }
  }
`;
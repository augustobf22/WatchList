import styled from 'styled-components'

export default function MovieCard(props){
    const colors = props.colorsArr;

    return(
        <ContainerCard colors={colors}>
            <img src={props.moviePoster} />
            <p>{props.movieTitle}</p>
        </ContainerCard>
    )
}

const ContainerCard = styled.div`
  width: 20%;
  aspect-ratio: 9/16;
  transition: transform 50ms ease;
  border-radius: 5px;

  display:flex;
  flex-direction: column;
  
  img{
    width: 100%;
    height: 90%;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.35);
  }

  p{
    height: 10%;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: ${props => props.colors[0]};
    
    border-radius: 5px;
    border: 1px solid ${props => props.colors[0]};
    background-color: ${props => props.colors[2]};

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    overflow: hidden;
  }

  &:hover{
    transform: scale(1.2, 1.2);
    cursor: pointer;
    overflow: visible;
    background-color: none;

    img{
        //object-fit: contain;
    }

    p{
        width: auto;
        height: auto;
        
        transform: scale(1.2, 1.2);
        margin-top: 10px;
        //border: 1px solid;
    }
  }
`;
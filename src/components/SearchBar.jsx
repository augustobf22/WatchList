import styled from 'styled-components'

export default function SearchBar(props) {
    const colors = props.colorsArr;

    return(
        <>
            <SearchInput placeholder='Insira o nome do filme que deseja pesquisar...' colors={colors}></SearchInput>
        </>
    )
}

const SearchInput = styled.input`
    background-color: ${props => props.colors[0]};
    width: 90%;
    height: 50px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border: 1px solid ${props => props.colors[2]};
    border-radius: 5px;

    position: absolute;
    top: 22%;
    left: 50%;
    transform: translate(-50%, 0);
    transition: transform 100ms ease;

    font-family: 'Raleway', sans-serif;
    color: ${props => props.colors[2]};
    font-size: 20px;
    padding-left: 10px;

    &:focus{
        transform: translate(-50%, 0) scale(1.05, 1.05);
    }

    /* animation-duration: 1s;
    animation-name: slidein;

    @keyframes slidein {
        from {
            top: 50%;
        }

        to {
            top: 30%;
        }
    }  */

`;

//initial size: w 60% h 30px, initial position: top 50% left 50%
//then size: w: 80% h 50px, then position: top 30% left 15%
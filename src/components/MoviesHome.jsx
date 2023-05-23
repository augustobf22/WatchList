import styled from 'styled-components'
import masque from '../assets/masque.jpg'
import midsommar from '../assets/midsommar.jpg'
import suspiria from '../assets/suspiria.jpg'
import tcm from '../assets/tcm.jpg'
import vvitch from '../assets/the_vvitch.jpg'
import MovieCard from './MovieCard'

const movies = [
    {title: 'The Masque of the Red Death', poster: masque},
    {title: 'Midsommar', poster: midsommar},
    {title: 'Suspiria', poster: suspiria},
    {title: 'Texas Chainsaw Massacre', poster: tcm},
    {title: 'The VVitch', poster: vvitch}
]

export default function MoviesHome(props) {
    const colors = props.colorsArr;

    return(
        <>
            <ContainerMovies>
                {movies.map((m, index) => (
                    <MovieCard key={index} movieTitle={m.title} moviePoster={m.poster} colorsArr={colors}/>
                )
                )}
            </ContainerMovies>
        </>
    )
}

const ContainerMovies = styled.div`
    width: 75%;
    height: auto;

    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    gap:2px;

    /* animation-duration: 1s;
    animation-name: opening;

    @keyframes opening {
        from {
            width: 30%;
        }

        to {
            width: 75%;
        }
    } */
`;
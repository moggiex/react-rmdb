import React, { Fragment } from 'react';

// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';

// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {

    const { state, loading, error, setSearchTerm } = useHomeFetch();

    console.log('here:');
    console.log(state);

    // // See values
    // if (state.results[0]) {
    //     console.log(state.results[0]);
    // }

    return (
        <Fragment>

            {state.results[0]
                ?
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
                : null}

            <SearchBar setSearchTerm={setSearchTerm} />

            <Grid header='Popular Movies'>
                {state.results.map(movie => (

                    <Thumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ?
                                IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage

                        }
                        movieId={movie.id} />
                ))}
            </Grid>

            <Spinner />

        </Fragment>
    )
}

export default Home;
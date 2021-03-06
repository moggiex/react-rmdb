import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet'

// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL, SITE_NAME } from '../config';

// Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';



// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {

    const {
        state,
        loading,
        error,
        setSearchTerm,
        searchTerm,
        setisLoadingMore
    } = useHomeFetch();

    // console.log('here:');
    // console.log(state);

    // if an error has happened
    if (error) console.log(error)
    if (error) return (
        <div>Something went wrong</div>
    );

    return (
        <Fragment>

            <Helmet>
                <title>{SITE_NAME}</title>
            </Helmet>

            <SearchBar setSearchTerm={setSearchTerm} />

            {!searchTerm && state.results[0]
                ?
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
                : null}

            <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
                {state.results.map(movie => (

                    <Thumb
                        key={movie.id + Math.random()}
                        clickable
                        image={
                            movie.poster_path
                                ?
                                IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage

                        }
                        movieId={movie.id}
                        movieTitle={movie.title} />
                ))}
            </Grid>

            {
                // will show the spinner if loading
                loading && <Spinner />
            }

            {
                // Will only show when pages are left or not loading
                state.page < state.total_pages
                && !loading
                && (
                    <Button text='Load More' callback={() => setisLoadingMore(true)} />
                )
            }

        </Fragment>
    )
}

export default Home;
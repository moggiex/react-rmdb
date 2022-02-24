import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// config
import { IMAGE_BASE_URL, POSTER_SIZE, URL_PREFIX_MOVIE, SITE_NAME, SITE_TITLE_SEPARATOR, SITE_DEFAULT_META_DESCRIPTION } from '../config';

// Components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';

// Hook
import { useMoviefetch } from '../hooks/useMovieFetch';

// Image
import NoImage from '../images/no_image.jpg';

// Helpers
import { isDev } from '../helpers';

const Movie = () => {

    const { movieId } = useParams();
    // console.log(movieId);

    const { state: movie, loading, error } = useMoviefetch(movieId);

    // console.log(movie);

    if (loading) return <Spinner />;
    if (error) return <div>Something went pear shaped</div>;
    // <div>{JSON.stringify(movie)}</div>

    if (isDev) console.log(movie)

    return (
        <>
            <Helmet>
                <title>{SITE_NAME} {SITE_TITLE_SEPARATOR} {movie.original_title}{
                    movie.release_date ? SITE_TITLE_SEPARATOR + movie.release_date : ''
                }</title>
                <meta name='description' content={
                    movie.overview ? movie.overview.substring(0, 255) : SITE_DEFAULT_META_DESCRIPTION
                } />
            </Helmet>

            <BreadCrumb movieTitle={movie.original_title} path={URL_PREFIX_MOVIE} />

            <MovieInfo movie={movie} />
            <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
            <Grid header='Actors'>
                {movie.actoresactors.map(actor => (
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path
                                ?
                                `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                :
                                NoImage
                        }
                        personId={actor.id}
                    />
                ))}
            </Grid>
        </>
    )

}

export default Movie;

/*
actoresactors: (47) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
adult: false
backdrop_path: "/4OTYefcAlaShn6TGVK33UxLW9R7.jpg"
belongs_to_collection: null
budget: 100000000
directors: [{…}]
genres: (4) [{…}, {…}, {…}, {…}]
homepage: "https://www.20thcenturystudios.com/movies/the-kings-man"
id: 476669
imdb_id: "tt6856242"
original_language: "en"
original_title: "The King's Man"
overview: "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them."
popularity: 5069.377
poster_path: "/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg"
production_companies: (3) [{…}, {…}, {…}]
production_countries: (2) [{…}, {…}]
release_date: "2021-12-22"
revenue: 124005195
runtime: 131
spoken_languages: [{…}]
status: "Released"
tagline: "Witness the bloody origin."
title: "The King's Man"
video: false
vote_average: 7.1
vote_count: 1229

actoresactors: Array(19)
0:
adult: false
cast_id: 8
character: "Mirabel Madrigal (voice)"
credit_id: "5fee8b5e176a94003fe4998a"
gender: 1
id: 968367
known_for_department: "Acting"
name: "Stephanie Beatriz"
order: 0
original_name: "Stephanie Beatriz"
popularity: 24.478
profile_path: "/pGo7zMGsMXOMSMZc68Xi3LvzeP0.jpg"
[[Prototype]]: Object

*/
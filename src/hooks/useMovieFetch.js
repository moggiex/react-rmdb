import { useState, useEffect, useRef } from 'react';
// API
import API from '../API';

export const useMoviefetch = movieId => {

    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                // get directors only
                // @todo, could look at the rest of the crew
                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                );

                setState({
                    ...movie,
                    actoresactors: credits.cast,
                    directors
                });

                setLoading(false);

            } catch (err) {
                setError(true);
            }
        }

        fetchMovie();

    }, [movieId])

    return { state, loading, error };

};
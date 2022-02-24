import { useState, useEffect, useRef } from 'react';

// Helpers
import { isPersistedState } from '../helpers'
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

        const sessionState = isPersistedState(movieId);

        if (sessionState) {
            setState(sessionState);
            setLoading(false);
            return;
        }

        fetchMovie();

    }, [movieId])

    // wroite to session storage
    useEffect(() => {

        sessionStorage.setItem(movieId, JSON.stringify(state));

    }, [movieId, state])

    return { state, loading, error };

};
import { useState, useEffect, useRef } from 'react';
// API
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

const cache = [];

export const useHomeFetch = () => {
    // States
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setisLoadingMore] = useState(false);

    // console.log(searchTerm);

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            // console.log(page)

            /**
             * @todo caching eneds to be looked at here as its not quite working right
             * else if (searchTerm && page === 1 && cache['home'][searchTerm]) {
             */
            if (!searchTerm && page === 1 && cache['home']) {

                console.log('cached version HOME');
                setState(prev => ({
                    ...cache['home'],
                    results:
                        page > 1 ? [...prev.results, ...cache['home'].results] : [...cache['home'].results]
                }));
                setLoading(false);
            } else if (searchTerm && page === 1 && cache['home'][searchTerm]) {

                console.log('cached version SEARCH page 1');
                setState(prev => ({
                    ...cache['home'][searchTerm],
                    results:
                        page > 1 ? [...prev.results, ...cache['home'][searchTerm].results] : [...cache['home'][searchTerm].results]
                }));
                setLoading(false);

            } else {

                const movies = await API.fetchMovies(searchTerm, page);
                if (!searchTerm && page === 1) {

                    cache['home'] = movies;
                    console.log('saved cache: HOME')
                } else if (!cache['home'][searchTerm]) {

                    cache['home'][searchTerm] = movies;
                    console.log('saved cache: searchTerm: ' + searchTerm)
                }
                // cache['home'] = movies;
                // console.log(movies);

                setState(prev => ({
                    ...movies,
                    results:
                        page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
                }));
            }

            setLoading(false);

        } catch (err) {
            setError(true);
        }
    };

    // Run once on app start and when home mounts
    // Initial render & search
    useEffect(() => {

        setState(initialState);

        fetchMovies(1, searchTerm);

    }, [searchTerm]);

    // load more
    useEffect(() => {

        // return if not loading
        if (!isLoadingMore) return;

        fetchMovies(state.page + 1, searchTerm);

        // must set to false otherwise it just continues to the end!
        setisLoadingMore(false);

    }, [isLoadingMore, searchTerm, state.page]);

    return {
        state,
        loading,
        error,
        setSearchTerm,
        searchTerm,
        setisLoadingMore
    };
}
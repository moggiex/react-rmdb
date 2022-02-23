import { useState, useEffect, useRef } from 'react';
// API
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

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

            const movies = await API.fetchMovies(searchTerm, page);

            // cache['home'] = movies;
            // console.log(movies);

            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));


            setLoading(false);

        } catch (err) {
            console.log(err);
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
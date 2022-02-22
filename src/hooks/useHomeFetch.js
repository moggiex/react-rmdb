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

    console.log(searchTerm);

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);
            const movies = await API.fetchMovies(searchTerm, page);
            // console.log(movies);

            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));

            setLoading(false);

        } catch (err) {
            setError(true);
        }
    };

    // Run once on app start and when home mounts
    // Initial render
    useEffect(() => {
        fetchMovies(1);
    }, []);

    return {
        state,
        loading,
        error,
        setSearchTerm
    };
}
import { useState, useEffect, useRef } from 'react';
// API
import API from '../API';

export const usePersonFetch = personId => {

    // console.log('personID:', personId)

    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        const fetchPerson = async () => {
            try {
                setLoading(true);
                setError(false);

                const person = await API.fetchPerson(personId);

                // more options to get here https://developers.themoviedb.org/3/people/get-person-details


                console.log('person response', person)

                setState({
                    ...person
                });

                setLoading(false);

            } catch (err) {
                setError(true);
                console.error(err)
            }
        }

        fetchPerson();

    }, [personId])

    return { state, loading, error };

};
import React from 'react';
import { useParams } from 'react-router-dom';
// config
import { IMAGE_BASE_URL, POSTER_SIZE, URL_PREFIX_PERSON } from '../../config';

// Components
import Grid from '../Grid';
import Spinner from '../Spinner';
import BreadCrumb from '../BreadCrumb';
// import MovieInfo from './MovieInfo';
// import MovieInfoBar from './MovieInfoBar';
// import Actor from './Actor';

// Hook
import { usePersonFetch } from '../../hooks/usePersonFetch';

// Image
import NoImage from '../../images/no_image.jpg';

const Person = () => {

    // console.log(useParams())

    let { personId } = useParams();

    //clean up the personId
    if (personId.includes('-')) {
        personId = personId.split('-')[0];
    }

    console.log('personId = ' + personId)

    const { state: person, loading, error } = usePersonFetch(personId);

    // console.log(Object.keys(person));

    if (loading) return <Spinner />;
    if (error) return <div>Something went pear shaped</div>;
    // <div>{JSON.stringify(movie)}</div>
    // console.log((JSON.parse(JSON.stringify(person))).map());

    return (
        <>
            {/* <BreadCrumb movieTitle={movie.original_title} /> */}
            {/* <BreadCrumb path={URL_PREFIX_PERSON} movieTitle={person.name} /> */}
            <BreadCrumb movieTitle={person.name} path={URL_PREFIX_PERSON} />
            {/* {JSON.stringify(person)}; */}
            <ul>{
                Object.keys(person).map(function (key) {
                    return <li key={key}>{key}: {person[key]}</li>;
                })}</ul>

        </>
    )

}

export default Person;

/*
adult: false
also_known_as: Array(0)
length: 0
[[Prototype]]: Array(0)
biography: "Harris Dickinson is  an English actor, writer and director."
birthday: "1996-06-24"
deathday: null
gender: 2
homepage: null
id: 1716493
imdb_id: "nm6170168"
known_for_department: "Acting"
name: "Harris Dickinson"
place_of_birth: "London, England, UK"
popularity: 27.785
profile_path: "/WPILJphLo9iKqFK62V635P0nVZ.jpg"
*/
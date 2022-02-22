import React from 'react';
import { Link } from 'react-router-dom';
import { toSeoUrl } from '../../helpers';

// styles
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable, movieTitle }) => (

    <div>
        {clickable ? (
            <Link to={`/movie/${movieId}` + (movieTitle && movieTitle.length > 0 ? '-' + toSeoUrl(movieTitle) : '')} >
                <Image src={image} alt={movieTitle} />
            </Link>
        )
            : (
                < Image src={image} alt={movieTitle} />
            )}
    </div >
);

export default Thumb;

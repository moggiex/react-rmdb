import React from 'react';
import { Link } from 'react-router-dom';
import { toSeoUrl } from '../../helpers';
import { PropTypes } from 'prop-types';

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

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool,
    movieTitle: PropTypes.string,
}

export default Thumb;

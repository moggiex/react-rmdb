import React from 'react';
import { Link } from 'react-router-dom';

// Helpers
import { toSeoUrl } from '../../helpers';

// styles
import { Wrapper, Image } from './Actor.styles';

// Image
import NoImage from '../../images/no_image.jpg';

const Actor = ({ name, character, imageUrl, personId }) => (

    <Wrapper>
        <Link to={`/person/${personId}-` + toSeoUrl(name)} >
            <Image src={imageUrl} alt='actor-thumb' />
            <h3>{name}</h3>
            <p>{character}</p>
        </Link>
    </Wrapper >
);

export default Actor;
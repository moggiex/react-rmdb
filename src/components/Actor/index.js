import React from 'react';

// styles
import { Wrapper, Image } from './Actor.styles';

// Image
import NoImage from '../../images/no_image.jpg';

const Actor = ({ name, character, imageUrl }) => (

    <Wrapper>
        <Image src={imageUrl} alt='actore-thumb' />
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
);

export default Actor;
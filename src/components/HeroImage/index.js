import React from 'react';
import { PropTypes } from 'prop-types';

// styles
import { Wrapper, Content, Text } from './HeroImage.styles';

// props.image etc... are destructured
const HeroImage = ({ image, title, text }) => (

    <Wrapper Wrapper image={image} >
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper >
);

HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string,
}

export default HeroImage;
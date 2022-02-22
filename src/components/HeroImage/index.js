import React from 'react';

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

export default HeroImage;
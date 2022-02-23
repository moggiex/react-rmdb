import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

// styles
import { Wrapper, Content } from './BreadCrumb.styles';

const BreadCrumb = ({ movieTitle, path }) => (

    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            {
                path ? ' | ' : ' '
            }
            {
                path ? <span>{path.charAt(0).toUpperCase() + path.slice(1)}</span> : ''
            }

            | <span>{movieTitle}</span>
        </Content>
    </Wrapper >
);

BreadCrumb.propTypes = {
    movieTitle: PropTypes.string,
    path: PropTypes.string
}

export default BreadCrumb;
import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect, useRef } from 'react';

// Image
import searchIcon from '../../images/search-icon.svg';

// styles
import { Wrapper, Content } from './SearchBar.styles';

// props.image etc... are destructured
const SearchBar = ({ setSearchTerm }) => {

    const [state, setState] = useState('');
    const inital = useRef(true);

    useEffect(() => {

        if (inital.current) {
            inital.current = false;
            return;
        }


        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);

        // stops timers being stackedon each of them
        return () => clearTimeout(timer);

    }, [setSearchTerm, state])

    return (
        <Wrapper >
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input
                    type='text'
                    placeholder='Search Movie'
                    onChange={e => setState(e.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper >
    )
};

export default SearchBar;
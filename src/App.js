import React from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { URL_PREFIX_MOVIE } from './config';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import Person from './components/Person';
import NotFound from './components/NotFound';
import Login from './components/Login';

// Context
import UserProvider from './context';

// Styles 
import { GlobalStyle } from './GlobalStyle';

const url = URL_PREFIX_MOVIE + '/:movieId';
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const App = () => (

  <Router >

    <UserProvider />

    <Header />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='movie' element={<Movie />} />
      <Route path='/movie/:movieId-:movieTitle' element={<Movie />} />
      {/* <Route path={`${URL_PREFIX_MOVIE}/:movieId`} element={<Movie />} /> */}
      <Route path='person/:personId-:personName' element={<Person />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>

    <GlobalStyle />

  </Router>

);

export default App;

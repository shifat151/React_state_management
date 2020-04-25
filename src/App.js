import React from 'react';
import MovieList from './movieList';
import Nav from './Nav';
import {MovieProvider} from './MovieContext';
import AddMovie from './AddMovie';

import './App.css';

function App() {
  return (
    <MovieProvider>
    <div className="App">
      <Nav />
      <hr/>
      <AddMovie/ >
      <br/>
      <MovieList />
    </div>
    </MovieProvider>

  );
}

export default App;

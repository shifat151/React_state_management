import React, { useContext } from 'react';
import { MovieContext } from './MovieContext'
import './Nav.css'

const Nav = () => {

    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div className="nav">
            <ul>
                <li><h3>Movies</h3></li>
                <li><p>List of movies: { movies.length }</p></li>
            </ul>

        </div>
    );
};


export default Nav;

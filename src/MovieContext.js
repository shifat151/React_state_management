import React, { useState, createContext} from 'react';

export const MovieContext=createContext();


export const MovieProvider = (props) =>{
    const [movies, setMovies] = useState([
        {
            name:'Harry Potter',
            price: '$10',
            id:12313

        },
        {
            name:'Avengers',
            price: '$30',
            id:123423

        },
        {
            name:'Shutter Island',
            price: '$50',
            id:12342432423

        }
    ]);
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>

    );
}
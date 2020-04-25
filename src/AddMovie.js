import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext';

const AddMovie = () =>{
    const [name, setName]=useState('');
    const [price, setPrice]=useState('');
    const [movies, setMovies]=useContext(MovieContext)

    const updateName= (e) =>{
        setName(e.target.value);
    };
    const updatePrice= (e) =>{
        setPrice(e.target.value);
    };
    const addMovie= (e)=>{
        e.preventDefault()
        setMovies(prevMovies=>[...prevMovies, {name:name, price:price}]);
    }
    return(
        <form onSubmit={addMovie}>
            <label for="fname">Movies:</label><br></br>
            <input type="text" name="name" value={name} onChange={updateName}/>
            <br/>
            <label for="lname">Price:</label><br></br>
            <input type="text" name="price" value={price} onChange={updatePrice}/>
            <br/>
            <button>Add Movies</button>

        </form>
    );
}

export default AddMovie
import React from 'react';

const Movie= ({ name, price }) =>{
    
    return(
        <div>
            <h3>{ name }</h3>
            <i class="fas fa-h2"> {price}</i>
        </div>
        

    );
};


export default Movie;

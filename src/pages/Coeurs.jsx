import React, { useEffect } from 'react';
import Header from "../components/Header";
import Card from "../components/Card";
import { useFav } from '../FavContext.jsx';

const Coeurs = () => {
     const { favMovies } = useFav();


    return (
        <>
            <Header />
            <div>
                <h2 className='myHearts'>Mes coups de coeurs</h2>
            </div>

<div className="mapping">
             {favMovies
      .map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
      </div>
        </>
    );
};

export default Coeurs;
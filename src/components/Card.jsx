import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faHeartCircleMinus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useFav } from '../FavContext';

    const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV-Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
  
  const Card = ({movie}) => {
    const  { favMovies, setFavMovie} = useFav();

    
    

    return (
        <div className="card">
            <img src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} alt={"Affiche of " + movie.title} />
          <h3>{movie.title}</h3>
          <em>Sorti le {new Date(movie.release_date).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric"
          })}</em>
          <h4>{(movie.vote_average).toFixed(1)} <FontAwesomeIcon icon={faStar} /></h4>
          <ul id='genre'> {genres.filter((genre) => movie.genre_ids.includes(genre.id))
            .map((genre) => (
                <li key={genre.id}> {genre.name} </li>
            ))}</ul>
          <h5>Synopsis</h5>
          <p>{movie.overview}</p>
          <button onClick={() => {
  if (favMovies.find(f => f.id === movie.id)) {
    setFavMovie(favMovies.filter(f => f.id !== movie.id));
  } else {
    setFavMovie(prev => [...prev, movie]);
  }}} id='heart'> {favMovies.find((f) => f.id == movie.id) ? <FontAwesomeIcon icon={faHeartCircleMinus} /> : <FontAwesomeIcon icon={faHeart} /> }</button>
        </div>
    );
};

export default Card;
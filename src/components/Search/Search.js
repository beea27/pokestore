import React from 'react';
import './style.css';
import axios from 'axios';

function handleSearch(){
  const url = 'https://pokeapi.co/api/v2/pokemon?offset=${}&limit=20';
  axios.get(url).then(response => {
    const pokemon = response.data.results;
    const pokemonName = [];
    pokemon.map((repository) => {
      pokemonName.push(repository.name);
    });
    localStorage.setItem('pokemonName', JSON.stringify(pokemonName));

    console.log(pokemon);
    console.log(pokemonName);
  });
}

function Search(){
  return(
    <div className="wrap">
      <div className="search">
          <input type="text" className="searchTerm" placeholder="Search pokemon"/>
          <button type="submit" className="searchButton" onClick={handleSearch()}><span className="material-icons">search</span></button>
      </div>
    </div>
  )
}

export default Search;
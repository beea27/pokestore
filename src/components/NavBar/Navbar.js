import React from 'react';
import './style.css';
import '../../App.css';

function Navbar(){
 return(
  <nav className="navbar Navbar">
    <img src="img/pokemon.png" alt=""/>
    <form className="form-inline">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <div className="btn">
        <button type="button">Search</button>
      </div>
      <img src="https://img.icons8.com/plasticine/100/000000/pokeball.png"/>    
    </form>
  </nav>
 )
}

export default Navbar;
// function handleSearch(){
//   axios.get('https://api.reinaldowft.com/pokestore?page=1&limit=150').then(response => {
//     const pokemon = response.data.results;
//     const pokemonName = [];
//     pokemon.map((repository) => {
//       pokemonName.push(repository.name);
//     });
//     localStorage.setItem('pokemonName', JSON.stringify(pokemonName));

//     console.log(pokemon);
//     console.log(pokemonName);
//   });
// }
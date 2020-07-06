import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function Navbar(){
 return(
  <>
    <nav className="navbar Navbar">
      <img src="../../img/pokemon.png" alt=""/>
      <img className="imageBuy" src="https://img.icons8.com/plasticine/100/000000/pokeball.png"/>    
    </nav>
  </>
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
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import pokemon from "./../../img/pokemon.png"

function Navbar(){
 return(
    <nav className="navbar Navbar">
    <img className="imagePokestore"src={pokemon} alt="Pokemon"/>      <img className="imageBuy" src="https://img.icons8.com/plasticine/100/000000/pokeball.png" alt="PokemonStore"/>  
    </nav>
 )
}

export default Navbar;
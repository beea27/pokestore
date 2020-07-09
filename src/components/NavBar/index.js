import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import pokemon from "./../../img/pokemon.png"

function Navbar(){
   const showMenu = () => {
      const show = document.querySelector(".menu-lateral")
      show.classList.add("active")
   }

 return(
    <nav className="navbar">
      <img className="imagePokestore"src={pokemon} alt="Pokemon" /> 
      <img 
      className="imageBuy" 
      onClick={showMenu}
      src="https://img.icons8.com/plasticine/100/000000/pokeball.png" 
      alt="PokemonStore"/>  
    </nav>
 )
}

export default Navbar;
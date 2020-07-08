import React from 'react';

function CardItem({pokemon}) {
  return (
    <ul>
      {pokemon.map((poke) => (
        <li>  
          {poke.forms[0].name}
        </li>
      ))}
    </ul>
  )
}

export default CardItem;
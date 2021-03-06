import React, { useContext } from 'react';
import './style.css';
import { Cart } from "../../context"

import typeColors from '../../helpers/typeColors';


function Card({ pokemon, price }) {


    pokemon.price = price
    const { addToCart } = useContext(Cart)

    return (
        <div className="Card">
            <div className="Card__img">
                <img className="Img" src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card__name">
                {pokemon.name}
            </div>
            <div className="Card__types">
                {
                    pokemon.types.map(type => {
                        return (
                          <div className="Card__type" key={type.type.name} style={{ backgroundColor: typeColors[type.type.name] }}>
                          {type.type.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="Card__info">
                <div className="Card__data Card__data--weight">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="title">Height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="Card__data Card__data--ability">
                    <p className="title">Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
            <div className="buy">
              <div className="Card__data price">
                <p className="title">${price}.00</p>
              </div>
              <div className="btn" onClick={() => addToCart(pokemon)}>
                <button>Add</button>
              </div>
            </div>
        </div>
    );
}

export default Card;
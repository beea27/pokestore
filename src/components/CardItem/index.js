import React from 'react';
import './style.css';
import '../../App.css';
import trash from './../../img/trash.png';
import plus from './../../img/plus.png';
import minus from './../../img/minus.png';
import Alert from "./../Alert/index.js";


function CardItem({pokemon}) {
  return (
    <>
      <ul>
        {pokemon.map((poke) => (
          <li>
            <div className="cardItem">
              <div className="imgInformations">
                <img className="ImgCard" src={poke.sprites.front_default} alt="" />
                <div className="information">
                  <div>
                    <span className="poke">{poke.forms[0].name}</span>
                  </div>
                  <div>
                    <span className="price">${poke.price}</span>
                  </div>
                </div>
                <button className="button"><img src={trash} alt=""/></button>
              </div>
              <div className="amount">
                <button className="button"><img src={minus} alt=""/></button>
                  <p><b>1</b></p>
                <button className="button"><img src={plus} alt=""/></button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="btn">
        <button type="button" data-toggle="modal" data-target={<Alert/>}>
          Finish
        </button>
      </div>
    </>
  )
}

export default CardItem;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { Cart } from "./context"
import "bootstrap/dist/css/bootstrap.min.css";

import CardItem from "./components/CardItem"

import Card from "./components/Card";
import Navbar from "./components/NavBar";

import { getAllPokemon, getPokemon } from "./services/pokemon";

import "./App.css";

import close from "./img/close.png";

function App(props) {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);


  const { pokeCart } = useContext(Cart)
  
  
  const [search, setSearch] = useState("");

  const url = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {

    console.log(pokeCart)
    async function fetchData() {
      let response = await getAllPokemon(url);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      let pokemon = await loadingPokemon(response.results);

      setLoading(false);
    }
    fetchData();
  }, [pokeCart]);

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };


  const closeMenu = () => {

    const close = document.querySelector(".menu-lateral")
    close.classList.remove("active")
  }

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );

    setPokemonData(_pokemonData);
  };

  const handleChangeInput = async (valueSearch) => {

    if(valueSearch === '') {
       const pokemon = await axios.get(url)
      
        const  { results }  = pokemon.data

        let _pokemonData = await Promise.all(
          results.map(async (pokemon) => {
            let pokemonRecord = await getPokemon(pokemon.url);
            return pokemonRecord;
          })
        );
      setPokemonData(_pokemonData);
    }

    setSearch(valueSearch)
  }


  const handleSearch = async () => {
    const pokemon = await axios.get(`${url}/${search}`);

    setPokemonData([pokemon.data]);
  };

  return (
    <div className="page">
      {loading ? (
        <div className="spinner-border loading" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          <Navbar />

          <aside className="menu-lateral">
              <button className="btnClose" onClick={closeMenu}>
                <img className="close"src={close} alt="" />
              </button>

              <div>
                <CardItem pokemon={pokeCart}/>
              </div>
          </aside>

          <div className="wrap">
            <div className="search">
              <input
                type="text"
                className="searchTerm"
                placeholder="Search pokemon"
                onChange={(e) => handleChangeInput(e.target.value)}
              />
              <button
                type="submit"
                className="searchButton"
                onClick={handleSearch}
              >
                <span className="material-icons">search</span>
              </button>
            </div>
          </div>

          
          <div className="grid-container">
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon} price={ (i + 1) * 10}/>;
            })}
          </div>
          
          <div className="btn">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>
            
         
          <footer>
            <div className="social-media">
              <a href="https://github.com/beea27" target="blank">
                <img src="https://img.icons8.com/nolan/64/github.png" alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/beatriz-ali-508940153/"
                target="blank"
              >
                <img
                  src="https://img.icons8.com/nolan/64/linkedin-circled.png"
                  alt=""
                />
              </a>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;

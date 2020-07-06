import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllPokemon, getPokemon } from './services/pokemon';
import Card from './components/Card';
import Navbar from './components/NavBar';
import './App.css';
import Search from '../src/components/Search';

function App(props) {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const url = 'https://pokeapi.co/api/v2/pokemon';
  //const url2 = 'https://pokeres.bastionbot.org/images/pokemon/${id}';

  useEffect(() => {
    async function fetchData(){
      let response = await getAllPokemon(url);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      let pokemon = await loadingPokemon(response.results);
      console.log(pokemon);
      setLoading(false);
    }
    fetchData();
  }, []);

  const next = async() => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async() => {
    if(!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadingPokemon = async(data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord
    }));

    setPokemonData(_pokemonData);
  }

  return (
    <div class="page">
      { loading 
      ? 
        <div class="spinner-border loading" role="status">
          <span class="sr-only">Loading...</span>
        </div> 
      : (
        <>
          <Navbar/>
          <Search/>
          <div className="grid-container">
            {
              pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon}/>
            })}
          </div>
          <div className="btn">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>
          <footer>
            <div class="social-media">
              <a href="https://github.com/beea27" target="_blank">
                <img src="https://img.icons8.com/nolan/64/github.png"/>              
              </a>
              <a href="https://www.linkedin.com/in/beatriz-ali-508940153/" target="_blank">
                <img src="https://img.icons8.com/nolan/64/linkedin-circled.png"/>              
              </a>
            </div>
          </footer>
        </>
      )
    } 
    </div>
  );
}

export default App;

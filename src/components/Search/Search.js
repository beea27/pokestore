import React from 'react';
import './style.css';

function Search(){
  return(
    <div class="wrap">
      <div class="search">
          <input type="text" class="searchTerm" placeholder="Search pokemon"/>
          <button type="submit" class="searchButton">Search</button>
      </div>
    </div>
  )
}

export default Search;
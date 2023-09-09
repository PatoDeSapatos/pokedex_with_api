import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Searchbar from "./components/SearchBar.jsx";
import Pokedex from "./components/Pokedex";
import { getPokemon, getPokemonData, searchPokemon } from "./api";
import { FavoriteProvider } from "./contexts/favoriteContext";

function App() {
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const itensPerPage = 27;
  const favoriteKey = "fav";

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      setNotFound( false );
      const data = await getPokemon(itensPerPage, itensPerPage * page);
      const promisses = data.results.map( async (pokemon) => {
        return await getPokemonData(pokemon.url);
      } )
      const results = await Promise.all(promisses);
      setPokemon(results);
      setTotalPages(Math.ceil(data.count / itensPerPage));
      setLoading(false);
    } catch (error) {
      console.error("fetchPokemon error: ", error);
    }
  };

  const onSearchHandler = async ( pokemonName ) => {
    if ( !pokemonName ) {
      return fetchPokemon();
    }

    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon( pokemonName );

    if ( !result ) {
      setNotFound(true);
    } else {
      setPokemon( [result] );
      setNotFound( false )
      setTotalPages( 1 );
      setPage( 0 );
    }

    setLoading(false);
  }

  useEffect(() => {
    const loadedPokemon = JSON.parse( window.localStorage.getItem( favoriteKey ) );
    if ( loadedPokemon ) {
      setFavorites( loadedPokemon );
    }
  }, []);
  
  useEffect(() => {
    fetchPokemon();
  }, [ page ]);

  const updateFavoritePokemon = ( name ) => {
    const updatedFavoritePokemon = [...favorites];
    const favoriteIndex = favorites.indexOf(name);

    if ( favoriteIndex >= 0 ) {
      updatedFavoritePokemon.splice( favoriteIndex, 1 );
    } else {
      updatedFavoritePokemon.push( name );
    }

    const favPokemonString = JSON.stringify(updatedFavoritePokemon);
    window.localStorage.setItem( favoriteKey, favPokemonString );

    setFavorites( updatedFavoritePokemon );
  }

  return (
    <FavoriteProvider
      value={{
        favoritePokemon: favorites,
        updateFavoritePokemon: updateFavoritePokemon
      }}
    >
      <div>
        <Navbar />
        <Searchbar onSearch={onSearchHandler} />

        { !notFound ? (
          <Pokedex pokemon={pokemon} loading={loading} page={page} totalPages={totalPages} setPage={setPage} />
        ) : (
          <div>Pesquisa não encontrada</div>
        )}
      </div>
    </FavoriteProvider>
  );
}

export default App;

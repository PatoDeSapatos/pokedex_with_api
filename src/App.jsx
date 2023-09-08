import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Searchbar from "./components/SearchBar.jsx";
import Pokedex from "./components/Pokedex";
import { getPokemon, getPokemonData } from "./api";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const data = await getPokemon();
      const promisses = data.results.map( async (pokemon) => {
        return await getPokemonData(pokemon.url);
      } )
      const results = await Promise.all(promisses);
      setPokemon(results);
      setLoading(false);
    } catch (error) {
      console.error("fetchPokemon error: ", error);
    }
  };

  useEffect(() => {
    console.log("carregou");
    fetchPokemon();
  }, []);

  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex pokemon={pokemon} loading={loading} />
    </div>
  );
}

export default App;

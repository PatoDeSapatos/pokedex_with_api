import React, {useState} from "react";
import { searchPokemon } from "../api";

const Searchbar = () => {
    const [search, setSearch] = useState("ditto");
    const [pokemon, setPokemon] = useState();

    const onChangeHandler = (e) => {
        console.log("pokemon: ", e.target.value);
        setSearch(e.target.value);
    }

    const onButtonHandler = () => {
        onSearchHandler( search );
    }

    const onSearchHandler = async ( pokemon ) => {
        const result = await searchPokemon( pokemon );
        setPokemon( result );
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input type="text" placeholder="Buscar pokemon" onChange={ onChangeHandler } />
            </div>

            <div className="searchbar-btn">
                <button onClick={onButtonHandler}>Buscar</button>
            </div>


            {pokemon ? (
                <div>
                    <div>Nome: {pokemon.name}</div>
                    <div>Peso: {pokemon.weight}</div>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            ) : null}
        </div>
    )
}

export default Searchbar;
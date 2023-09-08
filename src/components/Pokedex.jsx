import React, { useState } from "react";
import Pokemon from "./Pokemon";

const Pokedex = ( props ) => {
    const {pokemon, loading} = props;

    return (
        <div>
            <header className="pokedex">
                <h1>Pokedex</h1>
                <div>Paginação</div>
            </header>
        {loading ? (
            <div>Carregando...</div>
        ) : (
            <div className="pokedex-grid">
                {pokemon && pokemon.map((pokemon, index) => {
                    return(
                        <Pokemon key={index} pokemon={pokemon} />
                    );
                })}
            </div>
        )}
        </div>
    )
}

export default Pokedex;
import React from "react";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";

const Pokedex = ( props ) => {
    const {pokemon, loading, page, totalPages, setPage} = props;

    const onLeftClickHandler = () => {
        if ( page == 0 ) {
            setPage( totalPages - 1 );
        } else if ( page > 0 ) {
            setPage( page - 1 );
        }
    }
    const onRightClickHandler = () => {
        if ( page == totalPages - 1 ) {
            setPage( 0 );
        } else if ( page < totalPages ) {
            setPage( page + 1 );
        }
    }

    return (
        <div className="pokedex">
            <header>
                <h1>Pokedex</h1>
                <Pagination 
                    page={page+1}
                    totalPages={totalPages}
                    onLeftClick={onLeftClickHandler}
                    onRightClick={onRightClickHandler}
                />
            </header>
        {loading ? (
            <div className="message">Carregando...</div>
        ) : (
            <div className="pokedex-grid">
                {pokemon && pokemon.map((pokemon, index) => {
                    return(
                        <Pokemon key={index} pokemon={pokemon} />
                    );
                })}
            </div>
        )}

        <Pagination 
            page={page+1}
            totalPages={totalPages}
            onLeftClick={onLeftClickHandler}
            onRightClick={onRightClickHandler}
        />
        </div>
    )
}

export default Pokedex;
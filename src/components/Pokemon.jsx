import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoriteContext";

const Pokemon = ( props ) => {
    const { pokemon } = props;
    const { updateFavoritePokemon, favoritePokemon } = useContext(FavoriteContext);

    const onHeartClick = () => {
        updateFavoritePokemon( pokemon.name );
    }

    const heart = favoritePokemon.includes( pokemon.name ) ? "❤️" : "🖤";
    const backgroundUrl = `url(/src/assets/pkm_type_background/${pokemon.types[0].type.name}_background.jpg)`;

    return (
        <div className="pokemon-card" style={{background: backgroundUrl}}>
            <div className="pokemon-image-container">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>

            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, index) => {
                            return (
                                <div 
                                    key={index} 
                                    className="pokemon-type-text" 
                                    style={{
                                        background: `url(/src/assets/pkm_type_background/${type.type.name}_background.jpg)`
                                    }}
                                >
                                    {type.type.name}
                                </div>
                            )
                        })}
                    </div>

                    <button className="pokemon-heart-btn" onClick={onHeartClick}>
                        {heart}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;
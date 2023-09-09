import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoriteContext";

const Navbar = () => {
    const logoUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    const {favoritePokemon} = useContext(FavoriteContext);

    return (
        <nav>
            <div>
                <img 
                    src={logoUrl} 
                    alt="pokeapi-logo" 
                />
            </div>

            <div className="favorite-container">
                Favorites:
                <div>❤️{favoritePokemon.length}</div>
            </div>
        </nav>
    );
};

export default Navbar;

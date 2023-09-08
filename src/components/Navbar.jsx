import React from "react";

const Navbar = () => {
    const logoUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    return (
        <nav>
            <div>
                <img 
                    src={logoUrl} 
                    alt="pokeapi-logo" 
                />
            </div>
        </nav>
    );
};

export default Navbar;

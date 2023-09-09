import React, {useContext, useState} from "react";
import FavoriteContext from "../contexts/favoriteContext";

const Searchbar = ( props ) => {
    const [search, setSearch] = useState("");
    const {onSearch} = props;

    const onChangeHandler = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setSearch(searchValue);
        if (searchValue == "") {
            onSearch(undefined);
        }
    }

    const onButtonHandler = () => {
        onSearch( search );
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input type="text" placeholder="Buscar pokemon" onChange={ onChangeHandler } />
            </div>

            <div className="searchbar-btn">
                <button onClick={onButtonHandler}>Buscar</button>
            </div>

        </div>
    )
}

export default Searchbar;
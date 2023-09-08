import React, {useState} from "react";

const Searchbar = () => {
    const [search, setSearch] = useState("ditto");

    const onChangeHandler = (e) => {
        console.log("pokemon: ", e.target.value);
        setSearch(e.target.value);
    }

    const onButtonHandler = () => {
        console.log("pokemon: ", search);
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
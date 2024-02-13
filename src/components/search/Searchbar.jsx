import React from "react";
import './search.css';
import {ReactComponent as SearchIcon } from '../../assets/search-icon.svg'

const Searchbar = ({placeholder}) => {
    const onSubmit=(e)=>{
        e.preventDefault();
    }
    return(
        <form className="wrapper" onSubmit={onSubmit}>
            <input required className="search" type="text" placeholder={placeholder}></input>
            <button type="submit" className="searchButton">
            <SearchIcon />
            </button>
        </form>
    )

}
export default Searchbar;
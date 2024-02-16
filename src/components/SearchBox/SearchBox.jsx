import React from "react";
import styles from './Searchbox.module.css';
import {ReactComponent as SearchIcon } from '../../assets/search-icon.svg'

function SearchBox ({placeholder}) {
    const onSubmit=(e)=>{
        e.preventDefault();
    }
    return(
        <form className={styles.wrapper} onSubmit={onSubmit}>
            <input required className={styles.search} type="text" placeholder={placeholder}></input>
            <button type="submit" className={styles.searchButton}>
            <SearchIcon />
            </button>
        </form>
    )

}
export default SearchBox;
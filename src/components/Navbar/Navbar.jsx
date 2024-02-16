import React from "react";
import styles from './Navbar.module.css'
import FeedbackButton from '../FeedbackButton/FeedbackButton'
import SearchBox from '../SearchBox/SearchBox'
import Logo from "../Logo/Logo";



function Navbar(){
    const placeholder = "Search a album of your choice"
    return(
            <div className={styles.navbar}>
                <Logo className={styles.logo}/>
                <SearchBox placeholder={placeholder}/>
                <FeedbackButton children='Give Feedback'/>
        </div>
    )

}

export default Navbar;
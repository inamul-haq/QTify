import React from "react";
import './navbar.css'
import Button from '../button/Button'
import Search from '../search/Search'
import Logo from "../Logo/Logo";



const Header = () => {
    return(
            <div className="navbar">
                <Logo className="logo"/>
                <Search placeholder='Search a album of your choice'/>
                <Button children='Give Feedback'/>
        </div>
    )

}

export default Header;
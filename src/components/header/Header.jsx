import React from "react";
import './header.css'
import Button from '../button/Button'
import Searchbar from '../search/Searchbar'
import QLogo from "../qtifyLogo/QtifyLogo";



const Header = () => {
    return(
            <div className="navbar">
                <QLogo className="logo"/>
                <Searchbar placeholder='Search a album of your choice'/>
                <Button children='Give Feedback'/>
        </div>
    )

}

export default Header;
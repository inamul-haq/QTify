import React from "react";
import LogoImage from "../../assets/qtify-logo.svg";
import Styles from '../Logo/Logo.module.css'
function Logo(){
    return(
        <img src={LogoImage} alt="Logo" width={67} className={Styles.logo}/>
    );
}

export default Logo;
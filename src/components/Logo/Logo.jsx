import React from "react";
import LogoImage from "../../assets/qtify-logo.svg";
import Styles from '../Logo/Logo.module.css'
function Logo(){
    return(
        <div className={Styles.logoContainer}>
            <img src={LogoImage} alt="Logo" className={Styles.logo} />
        </div>
    );
}

export default Logo;
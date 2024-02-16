import React from 'react'
import  LogoImage from '../../assets/qtify-logo.svg'
import styles from './Logo.module.css'



function Logo (){
    return (
        <img src={LogoImage} alt="Logo" width={67} />
    );
    
}

export default Logo;

import React from "react";
import styles from '../HeroSection/HeroSection.module.css'
import HeroLogo from '../../assets/hero-logo.svg'

export default function HeroSection(){
    return(
        <div className={styles.heroContainer} >
                <div className={styles.heroHeading}>
                <p>100 Thousand Songs, ad-free</p>
                <p>Over thousands podcast episodes</p>
                </div>  
                <img src={HeroLogo} className={styles.heroImage} alt="Hero-Logo" />
        </div>
    )
}
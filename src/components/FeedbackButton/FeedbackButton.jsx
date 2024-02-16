import React from "react";
import styles from './FeedbackButton.module.css'

const Button = ({children}) => {
    return(
        <button className={styles.feedbackbutton}>{children}</button>
    )

}

export default Button;
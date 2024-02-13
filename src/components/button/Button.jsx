import React from "react";
import './buttonModule.css'

const Button = ({children}) => {
    return(
        <button className="feedbackbutton">{children}</button>
    )

}

export default Button;
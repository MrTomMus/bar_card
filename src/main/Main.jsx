import React from "react";  
import classes from '../main/main.module.css'
import { Link } from "react-router-dom";




let Main = (props) => {
    return (
        <div className={classes.main__background}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h1>Bar Card</h1>
                    <Link to={'/menu'}>View bar</Link>
                </div>              
            </div>
        </div>
    )
}

export default Main
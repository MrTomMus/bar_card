import React from "react";
import classes from "./Drinks.module.css"
import { Link } from "react-router-dom";

let Drinks = (props) => {
    console.log(props)
    
    let drinks = props.drinks.map((obj) => 
        <div key={obj.idDrink} className={classes.drink}>
            <img className={classes.img} src={obj.strDrinkThumb} alt="" />
            <div className={classes.title}>
                <span>{obj.strDrink}</span>
            </div>
        </div>
    )

    return (
        <>
            <div className={classes.drinks__content}>
                <Link to={'/'}><button className={classes.button}>Back</button></Link>
                <div className={classes.drinks__list}>
                    {drinks}
                </div>
            </div>
        </>
    )
}

export default Drinks
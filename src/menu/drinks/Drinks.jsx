import React from "react";
import classes from "./Drinks.module.css"
import { Link } from "react-router-dom";
import { HeartOutlined } from '@ant-design/icons';
import { Space } from "antd";
  


let Drinks = (props) => {
   
    
    
    let drinks = props.drinks.map((obj) => 
        <div key={obj.idDrink} className={classes.drink}>
            <img className={classes.img} src={obj.strDrinkThumb} alt="drink" />
                <HeartOutlined className={classes.icon}/>
            <div className={classes.title}>
                <span>{obj.strDrink}</span>
            </div>
        </div>
    )

    return (
        <>
            <div className={classes.drinks__content}>
                <Link to={'/'}><span>Back</span></Link>
                <div className={classes.drinks__list}>
                    {drinks}
                </div>
            </div>
        </>
    )
}

export default Drinks
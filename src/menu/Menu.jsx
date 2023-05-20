import React, { useEffect } from "react";
import classes from "../menu/Menu.module.css"
import Drinks from "./drinks/Drinks";


let Menu = (props) => {

    useEffect(() => {
        let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';
        fetch(url)
            .then(response => response.json())
            .then(data => props.setState({...props.state, ...data}))
    }, [])
        
    return (
            <div className={classes.container}>
                    {!props.state.drinks ? 'loading' : <Drinks drinks={props.state.drinks}/>}
            </div>
    )
}

export default Menu;
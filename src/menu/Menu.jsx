import React, { useEffect } from "react";
import classes from "../menu/Menu.module.css"
import Drinks from "./drinks/Drinks";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


let Menu = (props) => {

    const antIcon = <LoadingOutlined style={{ fontSize: 150, color: 'rgb(255, 0, 140)' }} spin />;

    useEffect(() => {
        let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';
        fetch(url)
            .then(response => response.json())
            .then(data => props.setState({...props.state, ...data}))
    }, [])
        
    return (
            <div className={classes.container}>
                    {!props.state.drinks 
                                        ? <div className={classes.spin__box}><Spin indicator={antIcon} /></div> 
                                        : <Drinks drinks={props.state.drinks}/>}
            </div>
    )
}

export default Menu;
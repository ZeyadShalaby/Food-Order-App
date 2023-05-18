import React from "react";

import classes from "./Header.module.css"

import mealsImage from "../../assets/mealsbegad.jpg";


import HeaderCartButton from "./HeaderCartButton";

function Header (props) {

    return <React.Fragment>
        <header className={classes.header}>
            <h1> Meals </h1>
            <HeaderCartButton onClick={props.onShowCart} /> 
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="this is meals image"/>
        </div>
    </React.Fragment>
};

export default Header;
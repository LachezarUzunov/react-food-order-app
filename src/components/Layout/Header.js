import React from "react";
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpeg'

import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Delicious Meals</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious meals"/>
            </div>
        </React.Fragment>
    )
}

export default Header;
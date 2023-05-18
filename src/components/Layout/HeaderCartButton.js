import React,  { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";


function HeaderCartButton (props) {
    const [btnIsHighlighted,setBtnIsHighLighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
      }, 0);

    const {items} = cartCtx;

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if(items.length === 0){
            return;
        }
        setBtnIsHighLighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighLighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }

    }, [items]); 

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span> Cart </span>
            <span className={classes.badge}> {numberOfCartItems} </span>
        </button>
    )

};

export default HeaderCartButton;
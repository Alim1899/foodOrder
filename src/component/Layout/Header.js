import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Order Meals</h1>
        <HeaderCardButton onClick={props.onShowCart}/>
      </header>
      <div>
        <img
          className={classes["main-image"]}
          alt="A table full of food!"
          src={mealsImage}
        />
      </div>
    </Fragment>
  );
};

export default Header;

import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>MovieFinder</h1>
      </header>
      <div className={classes['main-image']}>
        <h2 className={classes['image-header']}>Welcome to MovieFinder. Browse millions of movies.</h2>
      </div>
    </>
  )
}

export default Header;
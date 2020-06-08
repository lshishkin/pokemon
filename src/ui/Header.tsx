import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    link: {
      cursor: "pointer"
    },
    img: {
      maxWidth: 300
    }
  })
);

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to={"/"} className={classes.link}>
        <img
          className={classes.img}
          alt="pokemon"
          src="https://www.clipartkey.com/mpngs/m/258-2584937_pokemon-logo-png-new-pokemon-trading-card-game.png"
        />
      </Link>
    </div>
  );
};

export default Header;

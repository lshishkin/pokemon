import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAbility } from "./action";
import { IApplicationState } from "../../store/types";
import Header from "../../ui/Header";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
    card: {
      margin: 5,
      border: "2px solid lightgray",
      padding: 5,
      borderRadius: 5,
      fontSize: 20
    },
    name: {
      fontSize: 20,
      fontWeight: "bold",
      "&::first-letter": {
        textTransform: "uppercase"
      }
    }
  })
);

const Ability = () => {
  const classes = useStyles();
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetch = async () => {
      await dispatch(getAbility(id));
    };
    fetch();
  }, [dispatch, id]);
  const ability = useSelector(
    (state: IApplicationState) => state.ability.ability
  );

  return ability && (
    <div className={classes.root}>
      <Header />

      <div className={classes.card}>
        <p>
          <span className={classes.name}> Name:</span>
          {ability?.name}
        </p>
        <p ><span className={classes.name}> Description:</span>{ability?.effect_entries && ability.effect_entries[1].effect}</p>
      </div>
    </div>
  );
};

export default Ability;

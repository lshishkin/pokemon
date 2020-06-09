import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPokemon } from "./action";
import { TypePokemonInterface, AbilityPokemonInterface } from "./types";
import { IApplicationState } from "../../store/types";
import Header from '../../ui/Header'
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
    },
    card: {
      display: 'flex',
      justifyContent: 'center',
      margin: 5,
      border: '2px solid lightgray',
      padding: 5,
      borderRadius: 5,
    },
    info: {
      fontSize: 20,
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      '&::first-letter': {
        textTransform: 'uppercase'
      }
    },
    link: {
      fontSize: 20,
    }
  })
);

const getNumber = (url: string) => {
  const arr = url.split("/");
  return arr[arr.length - 2];
};

const Pokemon = () => {
  const classes = useStyles();
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetch = async () => {
      await dispatch(getPokemon(id));
    };
    fetch();
  }, [dispatch, id]);
  const pokemon = useSelector((state: IApplicationState) => state.pokemon.pokemon);
  return pokemon && <div className={classes.root}>
    <Header />
    <div className={classes.card}>
      <div className={classes.info}>
        <p className={classes.name}> {pokemon?.name}</p>
        <Divider />
        <p>Types:</p>
        <ul>
          {pokemon?.types?.map((item: TypePokemonInterface) => <li key={item.type.name}>{item.type.name}</li>)}
        </ul>
        <p>Abilities:</p>
        <ul>
          {pokemon?.abilities?.map((item: AbilityPokemonInterface) => 
          <li key={item.ability.url} onClick={() => history.push(`/ability/${getNumber(item.ability.url)}`)}>
            <Link
              component="button"
              variant="body2"
              className={classes.link}
              onClick={() => history.push(`/ability/${getNumber(item.ability.url)}`)}
            >
              {item.ability.name}
            </Link>


          </li>)}
        </ul>
      </div>
      <img
        alt="g"
        style={{ height: 300 }}
        src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
      />
    </div>

  </div>;
};

export default Pokemon;

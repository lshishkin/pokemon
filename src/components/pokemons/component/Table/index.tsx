import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { PokemonInterface } from '../../../pokemon/types'

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  search: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  item: {
    margin: 5,
    border: '2px solid lightgray',
    padding: 5,
    borderRadius: 5,
  }
});

const getNumber = (url: string) => {
  const arr = url.split("/");
  return arr[arr.length - 2];
};

interface TableInterface {
  filterdData: PokemonInterface[];
  setFilter: (value: string) => void
}

export default function Table({ filterdData, setFilter }: TableInterface) {
  const classes = useStyles();
  let history = useHistory();

  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilter(value);
  };

  return <div>

    <div className={classes.search}>

      <TextField
        variant="outlined"
        onChange={handlerOnChange}
        InputProps={{
          endAdornment: (
            <SearchIcon />
          )
        }}
      />
    </div>

    <div className={classes.container}>
      {filterdData?.map((pokemon: PokemonInterface) => (
        <div
          key={pokemon.url}
          className={classes.item}
          style={{ cursor: "pointer" }}
          onClick={() => history.push(`/pokemon/${getNumber(pokemon.url as string)}`)}
        >

          <img
            alt="g"
            style={{ height: 200 }}
            src={`https://pokeres.bastionbot.org/images/pokemon/${getNumber(
              pokemon.url as string
            )}.png`}
          />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  </div>

}

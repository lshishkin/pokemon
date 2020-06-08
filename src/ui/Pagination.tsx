import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center'
    }
  })
);

interface PokemonPaginationInterface {
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  page: number;
  count: number;
}

const PokemonPagination = ({ handleChange, page, count }: PokemonPaginationInterface) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination
        count={Math.ceil(count / 20)}
        color="primary"
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};

export default PokemonPagination;

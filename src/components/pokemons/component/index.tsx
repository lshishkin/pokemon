import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/CircularProgress";
import { getPokemons } from "../../pokemons/action";
import Table from "./Table";
import Pagination from "../../../ui/Pagination";
import Header  from "../../../ui/Header";

const useStyles = makeStyles({
  root: {
padding:20,
  },
});

const Pokemons = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.pokemons.count);
  const pokemons = useSelector((state: any) => state.pokemons.pokemons);
  const load = useSelector((state: any) => state.pokemons.load);
  const [page, setPage] = React.useState(1);
  const [filter, setFilter] = useState("");
  const filterdData = useMemo(
    () =>
    pokemons?.filter((item: any) =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, pokemons, page]
  );
  const tableData = useMemo(
    () => filterdData?.slice((page - 1) * 20, (page - 1) * 20 + 20),
    [filterdData]
  );
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  useEffect(() => {
    const fetch = async () => {
      await dispatch(getPokemons());
    };
    fetch();
  }, [dispatch]);
  return  load ? (
    <CircularProgress disableShrink />
  ) :  (
    <div className={classes.root}>
      <Header />
      <Pagination
        handleChange={handleChange}
        page={page}
        count={filterdData?.length}
      />
      <Table filterdData={tableData} setFilter={setFilter} />
      <Pagination
        handleChange={handleChange}
        page={page}
        count={filterdData?.length}
      />
    </div>)
  
};

export default Pokemons;

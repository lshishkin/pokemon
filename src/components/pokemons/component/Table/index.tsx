import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { IApplicationState } from "../../../../store/types";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  container:{
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center'
  },
  search:{
    display:'flex',
    justifyContent:'center',
    marginTop:10,
    marginBottom:10
  },
  item:{
margin:5,
border:'2px solid lightgray',
padding:5,
borderRadius:5,
  }
});

const getNumber = url => {
  const arr = url.split("/");
  return arr[arr.length - 2];
};

export default function SimpleTable({ filterdData, setFilter }) {
  const classes = useStyles();
  let history = useHistory();

  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log("value", value);
    setFilter(value);
  };

  return  <div>
    
              <div className={classes.search}>
          
                <TextField
                variant="outlined"
   onChange={handlerOnChange}
  InputProps={{
    endAdornment: (
      <InputAdornment>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    )
  }}
/>
              </div>
           
              <div className={classes.container}>
            {filterdData?.map(pokemon => (
              <div
                key={pokemon.item}
                 className={classes.item}
                style={{ cursor: "pointer" }}
                onClick={() => history.push(`/pokemon/${getNumber(pokemon.url)}`)}
              >
                
                  <img
                    alt="g"
                    style={{ height: 200 }}
                    src={`https://pokeres.bastionbot.org/images/pokemon/${getNumber(
                      pokemon.url
                    )}.png`}
                  />
                  <p>{pokemon.name}</p>
              </div>
            ))}
       </div> 
    </div>
  
}

import "../styles/header.css";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import React from "react";

import { Link } from "react-router-dom";

const Header = ({ value, setValue, placeholder, disabled }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '300px',
            background: 'white',
            marginRight: '50px',
            borderRadius: '5px',
            color: 'white'
        },
    },
}));
const classes = useStyles();
  return (
    <div className="header">
      <div id="navigation" className="menu">
        <Link to="/"><img src="/assets/video.svg" alt="não tem foto" />ChromeMovies</Link>
        <Link to="/favorites"> <img src="/assets/star-off.svg" alt="não tem foto" />MyFavorites</Link>
      </div>
      <div>
      <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Search for your film by title" variant="outlined" value={value}   onChange={(event) => setValue(event.target.value)} disabled={disabled} />
                </form>
      </div>
    </div>
  );
};

export default Header;

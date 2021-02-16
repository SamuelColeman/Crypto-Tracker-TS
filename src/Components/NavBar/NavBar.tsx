import React from 'react';
import styles from './styles';
import { makeStyles, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles(styles)

const NavBar = () => {

  const classes = useStyles()

  return (
    <div className={classes.bar}>
      <Typography className={classes.title} variant="h5">Top 100</Typography>
      <TextField className={classes.input} label="Search" />
    </div>
  )
}

export default NavBar;
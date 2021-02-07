import React from 'react';
import styles from './styles';
import { makeStyles, Typography } from '@material-ui/core';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';

const useStyles = makeStyles(styles)

const Header = () => {

  const classes = useStyles()
  
  return (
    <div className={classes.header}>
        <DonutSmallIcon className={classes.icon}/>
        <Typography className={classes.title} variant="h4">Crypto Tracker</Typography>
    </div>
  );
}

export default Header;
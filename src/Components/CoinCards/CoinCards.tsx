import React from 'react';
import styles from './styles';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(styles)

const CoinCards = () => {

  const classes = useStyles()

  return (
    <div className={classes.cards}>
    </div>
  );
}

export default CoinCards;
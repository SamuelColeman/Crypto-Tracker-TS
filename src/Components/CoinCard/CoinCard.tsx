import React from 'react';
import styles from './styles';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(styles)

const CoinCard = () => {

  const classes = useStyles()

  return (
    <div className={classes.card}>
    </div>
  );
}

export default CoinCard;
import React from 'react';
import styles from './styles';
import { makeStyles } from '@material-ui/core';
import Header from '../Header/Header';
import FeaturedCards from '../FeaturedCards/FeaturedCards';
import NavBar from '../NavBar/NavBar';
import CoinCards from '../CoinCards/CoinCards';


const useStyles = makeStyles(styles)

const App = () => {

  const classes = useStyles()

  return (
    <div className={classes.app}>
      <Header />
      <FeaturedCards />
      <NavBar />
      <CoinCards />
    </div>
  );
}

export default App;

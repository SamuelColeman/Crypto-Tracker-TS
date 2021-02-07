import React, { useEffect, useState } from 'react';
import styles from './styles';
import { makeStyles, Grid, Card, CardContent, Typography } from '@material-ui/core';
import { fetchCoinCards } from '../../apiCalls';

const useStyles = makeStyles(styles)

const FeaturedCards = () => {

  const [increaseCoinCard, setIncreaseCoinCard] = useState(Object)
  const [decreaseCoinCard, setDecreaseCoinCard] = useState({})
  const [watchedCoinCard, setWatchedCoinCard] = useState({})

  useEffect(() => {
    getCoinCards()
  })

  interface CC {
    [percent_change_24h: string]: any
  }

  const getCoinCards = async () => {
    try {
        const coinCards = await fetchCoinCards()
        await filterCoinCards(coinCards)
    } catch(error) {
          console.log(error)
    }
  }

  const filterCoinCards = async (cards: Array<CC>) => { 
    const highCard = await cards.reduce((acc, card) => {
      if (parseFloat(card.percent_change_24h) > parseFloat(acc.percent_change_24h) || acc.percent_change_24h === undefined) {
        acc = card
      }
      return acc
    }, {})
    setIncreaseCoinCard(highCard)
  }

  const classes = useStyles()

  return (
    <div className={classes.cards}>
      <Grid container>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Top Daily Increase</Typography>
              {increaseCoinCard.name}
              {increaseCoinCard.percent_change_24h}%
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default FeaturedCards;
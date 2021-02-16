import React, { useEffect, useState } from 'react';
import styles from './styles';
import { makeStyles, Grid, Card, CardContent, Typography } from '@material-ui/core';
import { fetchCoinCards } from '../../apiCalls';
import { CardsChange, CoinCard } from '../../types';

const useStyles = makeStyles(styles)

const FeaturedCards = () => {

  const [increaseCoinCard, setIncreaseCoinCard] = useState(Object)
  const [decreaseCoinCard, setDecreaseCoinCard] = useState(Object)
  const [watchedCoinCard, setWatchedCoinCard] = useState(Object)

  useEffect(() => {
    getCoinCards()
  })

  type cardsChange =  CardsChange

  type coinCard = CoinCard

  // interface CC {
  //   [percent_change_24h: string]: any
  // }

  const getCoinCards = async () => {
    try {
        const coinCards = await fetchCoinCards()
        await filterHighCard(coinCards)
        await filterLowCard(coinCards)
        await filterWatchCard(coinCards)
    } catch(error) {
          console.log(error)
    }
  }

  const filterHighCard = async (cardsChange : cardsChange) => { 
    const highCard = await cardsChange.reduce((acc : CoinCard, card) => {
      if (parseFloat(card.percent_change_24h) > parseFloat(acc.percent_change_24h) || acc.percent_change_24h === undefined) {
        acc = card
      }
      return acc
    }, {} as coinCard)
    setIncreaseCoinCard(highCard)
  }

  const filterLowCard = async (cardsChange : cardsChange) => { 
    const lowCard = await cardsChange.reduce((acc : CoinCard, card) => {
      if (parseFloat(card.percent_change_24h) < parseFloat(acc.percent_change_24h) || acc.percent_change_24h === undefined) {
        acc = card
      }
      return acc
    }, {} as coinCard)
    setDecreaseCoinCard(lowCard)
  }

  const filterWatchCard = async (cardsChange : cardsChange) => { 
    const watchedCard = await cardsChange.reduce((acc, card) => {
      if (watchedCoinCard) {
        acc = card
      }
      return acc
    }, {})
    setWatchedCoinCard(watchedCard)
  }

  const classes = useStyles()

  return (
    <div className={classes.cards}>
      <Grid container>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Top Daily Increase</Typography>
              <Typography variant="h6">{increaseCoinCard.symbol}</Typography>
              <Typography variant="subtitle1">{increaseCoinCard.name}</Typography>
              <Typography variant="h6">{increaseCoinCard.percent_change_24h}%</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Coin Watching</Typography>
              <Typography variant="h6">{watchedCoinCard.symbol}</Typography>
              <Typography variant="subtitle1">{watchedCoinCard.name}</Typography>
              <Typography variant="h6">{watchedCoinCard.percent_change_24h}%</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Top Daily Decrease</Typography>
              <Typography variant="h6">{decreaseCoinCard.symbol}</Typography>
              <Typography variant="subtitle1">{decreaseCoinCard.name}</Typography>
              <Typography variant="h6">{decreaseCoinCard.percent_change_24h}%</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default FeaturedCards;
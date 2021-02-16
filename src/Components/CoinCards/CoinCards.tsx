import React, { useState, useEffect } from 'react';
import styles from './styles';
import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { fetchCoinCards } from '../../apiCalls';
import { CoinCard } from '../../types';

const useStyles = makeStyles(styles)

type coinCard = CoinCard

const CoinCards = () => {
  const [coinCards, setCoinCards] = useState([])

  const getCoinCards = async () => {
    try {
        const coinCards = await fetchCoinCards()
        await setCoinCards(coinCards)
    } catch(error) {
          console.log(error)
    }
  }

  useEffect(() => {
    getCoinCards()
  })

  const classes = useStyles()

  return (
    <div className={classes.cards}>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Symbol</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>24 Hour Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coinCards.map((coinCard : coinCard) => (
              <TableRow key={coinCard.name}>
                <TableCell>{coinCard.rank}</TableCell>
                <TableCell>{coinCard.name}</TableCell>
                <TableCell>{coinCard.symbol}</TableCell>
                <TableCell>{coinCard.price_usd}</TableCell>
                <TableCell>{coinCard.percent_change_24h}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CoinCards;
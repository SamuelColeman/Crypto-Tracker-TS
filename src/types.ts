export type CoinCard = { 
    name: string, 
    rank: string, 
    price_usd: string, 
    percent_change_24h: string, 
    symbol: string
}

export type CardsChange = {
    card: CoinCard[]
}

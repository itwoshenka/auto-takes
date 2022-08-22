require('dotenv').config;
const ccxt = require('ccxt');
console.log (ccxt.exchanges);
const axios = require('axios');

const exchangeId = 'binance'
    , exchangeClass = ccxt[exchangeId]
    , exchange = new exchangeClass ({
        'apiKey': config.apiKey,
        'secret': config.secret,
    });

    const exchange_data = new ccxt.binance ({
        'rateLimit': 10000, 
        'headers': {
            'YOUR_CUSTOM_HTTP_HEADER': 'YOUR_CUSTOM_VALUE',
        },
        'options': {
            'adjustForTimeDifference': true, 
        }
    })  

    exchange.options['adjustForTimeDifference'] = false
    exchange.setSandboxMode (true)
const tick = async() => {
    const { asset, base, spread, allocation } = config;
    const market = `${asset}/${base}`;

    const orders = await BinanceClient.fetchOpenOrders(market);
    orders.forEach(async order => {
        await BinanceClient.cancelOrder(order.id);
    });
    const results = await Promise.all([
        axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usdt'),
        axios.get('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usdt')
    ]);
    const marketPrice = results[0].data.bitcoin.usd / results[1].data.tether.usd;
};  
    const sellPrice1 = marketPrice * (1 + 1.01);
    const sellPrice2 = marketPrice * (1 + 1.02);
    const buyPrice1 = marketPrice * (1 + 1.01);
    const buyPrice2 =marketPrice * (1+ 1.02);
    const longTakeProfit1 = sellPrice1;
    const longTakeProfit2 = sellPrice2;
    const shortTakeProfit1 = buyPrice1;
    const shortTakeProfit2 = buyPrice2;
const run = () => {
    const config = {
        asset: 'BTC',
        base: 'USDT',
        allocation: 0.1,
        spread: 0.2,
        tickInterval: 2000
    };
    const BinanceClient = new ccxt.binance({
        apiKey: process.env.API_ENV,
        secret: process.env.API_SECRET
    });
    tick(config, BinanceClient);
    setInterval(tick, config.tickInterval, config, BinanceClient);
};
const binance = new ccxt.binance ({ enableRateLimit: true })

while (true) {
    const result = await Promise.all ([
        binance.fetchOrderBook ('BTC/USDT'),
        binance.fetchOrderBook ('ETH/USDT'),
    ])
}
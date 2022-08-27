require('dotenv').config();
const ccxt = require('ccxt');
require(ccxt);
require(axios);
require(dotenv);
console.log (ccxt.exchanges);
const axios = require('axios');
const dotenv = require('dotenv');
//const apiKey = document.querySelector(apiKey);
let exchange = new ccxt.binance (); // default id
let kraken1 = new ccxt.binance ({ id: 'binance' });
let kraken2 = new ccxt.kraken ({ id: 'binance' });
let id = 'binancefutures';
let binancefutures = new ccxt[id] ();
'use strict';
const ccxt = require ('ccxt');
apiKey = l5Y8DAmDepGuLriOe2AMk56vNu4Hj6NN1uq9uxbx3RxqRtQRCmq1eDBruvG44uMb;
secret = NKVYXrBJWO1fbfWuDBoQpJ6nL09rTiXfApLt8sanqltah2JpgklYe8RmJTehksjU;
(async function () {
    let binance = ccxt.binance;
    const exchangeId = 'binance'
        , exchangeClass = ccxt[exchangeId]
        , exchange = new exchangeClass ({
            'apiKey': 'WQHSxwpmCfPeFPS6rMyao1cIsr8D2VQzVuuZtu05wFtjn8ysTWrb3hlMXnsl9DLx',
            'secret': '6rVSWvMkXeu9gZcSJp65fKkNerQwg1MZZkJNlQrBc2Yu6R2DBJNm8UiJsY2Dv0Cp',
        })
    ccxt.binance.createLimitSellOrder ('BTC/USD', 1, 10, { 'type': 'trailing-stop' })
}) ();

//     let apiKeys = [];
// function addapiKey(text) {
//     const apiKey = {
//         text,
//         done: false,
//         id: `${Math.random()}`
//     };

//     apiKeys.push(apiKey);
// }
// function deleteApiKey(id) {
//     apiKeys.forEach(apiKey => {
//         if (apiKey.id === id) {
//             apiKey.done = true;
//         }
//     })
// }

// function render() {
//     console.log(apiKeys);
// }

// addapiKey(blahblahaohbsldhlvsal);

// render();

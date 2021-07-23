#!/usr/bin/env node
const https = require("https");
const chalk = require('chalk');

const url = "https://api.genelpara.com/embed/para-birimleri.json";

https.get(url, function(response){
  response.on("data", function(data){
    const genelPara = JSON.parse(data);
    const usd = genelPara.USD.satis;
    const eur = genelPara.EUR.satis;
    const btc = genelPara.BTC.satis;
    const eth = genelPara.ETH.satis;
    const ga  = genelPara.GA.satis;
    console.log(chalk.green("USD : ",usd, "TL"));
    console.log(chalk.green("EUR : ",eur, "TL"));
    console.log(chalk.green("BTC : ",btc, "$"));
    console.log(chalk.green("BTC : ",btc*usd, "TL"));
    console.log(chalk.green("ETH : ",eth, "$"));
    console.log(chalk.green("ETH : ",eth*usd, "TL"));
    console.log(chalk.green("GA  : ",ga, "TL"));
  })
})
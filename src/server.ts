import axios from "axios";
import Period from "./enums/Period";
import { env } from "./env";
import Candle from "./models/Candle";

const readMarketPrice = async () => {
  const { data } = await axios.get(env.PRICES_API);
  return data.bitcoin.usd;
};

const generateCandles = async () => {
  while (true) {
    const loopTimes = Period.ONE_MINUTE / Period.TEN_SECONDS;
    const candle = new Candle("BTC", new Date());

    console.log("Generating new candle...");

    for (let i = 0; i < loopTimes; i++) {
      const price = await readMarketPrice();
      candle.addValue(price);
      console.log(`Marked price #${i + 1}`);
      await new Promise((r) => setTimeout(r, Period.TEN_SECONDS));
    }

    candle.closeCandle();
    console.log("Candle Closed");
    console.log(candle.toSimpleObject());
  }
};

generateCandles();

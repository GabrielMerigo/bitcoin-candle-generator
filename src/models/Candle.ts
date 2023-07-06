import CandleColor from "../enums/CandleColor";

export default class Candle {
  low: number;
  high: number;
  open: number;
  close: number;
  color: CandleColor;
  final_date_time: Date;
  values: number[];
  currency: string;

  constructor(currency: string, initial_date_time: Date) {
    this.currency = currency;
    this.low = Infinity;
    this.high = 0;
    this.open = 0;
    this.close = 0;
    this.values = [];
    this.color = CandleColor.UNDETERMINED;
  }

  addValue(value: number) {
    this.values.push(value);

    if (this.values.length === 1) {
      this.open = value;
    }

    if (this.low > value) {
      this.low = value;
    }

    if (this.high < value) {
      this.high = value;
    }
  }

  closeCandle() {
    if (this.values.length > 0) {
      this.close = this.values[this.values.length - 1];
      this.final_date_time = new Date();

      if (this.open > this.close) {
        this.color = CandleColor.RED;
      } else if (this.close > this.open) {
        this.color = CandleColor.GREEN;
      }
    }
  }

  toSimpleObject() {
    const { values, ...obj } = this;
    return obj;
  }
}
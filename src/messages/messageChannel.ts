import { connect } from "amqplib";
import { env } from "../env";

export const createMessageChannel = async () => {
  try {
    const connection = await connect(env.PRICES_API);
  } catch (error) {
    console.log("Error while trying to connect to RebbitMQ");
    console.log(error);
  }
};

import { connect } from "amqplib";
import { env } from "../env";

export const createMessageChannel = async () => {
  try {
    const connection = await connect(env.AMQP_SERVER);
    const channel = await connection.createChannel();
    console.log(env.QUEUE_NAME);
    await channel.assertQueue(env.QUEUE_NAME);
    console.log("Connected to RabbitMQ");

    return channel;
  } catch (error) {
    console.log("Error while trying to connect to RebbitMQ");
    console.log(error);
    return null;
  }
};

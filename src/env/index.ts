import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PRICES_API: z.string(),
  QUEUE_NAME=candles
AMQP_SERVER=amqp://dev:senhadev@localhost:5672
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error("⚠️ Invalid environment variables", _env.error.format());
  throw new Error("Invalid environment variables.");
}

export const env = _env.data;

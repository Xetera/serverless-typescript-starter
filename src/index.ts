import "dotenv/config"
import { logger } from "./logger"
import { APIGatewayEvent } from "aws-lambda"

export const greet = (name: string) => `Hello ${name}`

export const main = async (event: APIGatewayEvent) => {
  logger.info("Got a request!")
  const body = JSON.stringify(
    {
      message: "Go Serverless v1.0! Your function executed successfully!",
      event,
    },
    null,
    2
  )
  return {
    statusCode: 200,
    body,
  }
}

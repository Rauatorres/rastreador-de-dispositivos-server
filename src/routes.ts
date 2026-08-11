import { FastifyInstance } from "fastify";
import testController from "./controller/test.controller.js";
import connectController from "./controller/connect.controller.js";

export default async function routes(fastify: FastifyInstance) {
  testController(fastify);
  connectController(fastify);
}

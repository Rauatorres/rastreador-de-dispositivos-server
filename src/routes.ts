import { FastifyInstance } from "fastify";
import testController from "./controller/test.controller.js";
import connectDeviceController from "./controller/connect-device.controller.js";
import removeDeviceController from "./controller/remove-device.controller.js";

export default async function routes(fastify: FastifyInstance) {
  testController(fastify);
  connectDeviceController(fastify);
  removeDeviceController(fastify);
}

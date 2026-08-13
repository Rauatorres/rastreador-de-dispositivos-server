import { FastifyInstance } from "fastify";
import testController from "./controller/test.controller.js";
import connectDeviceController from "./controller/connect-device.controller.js";
import removeDeviceController from "./controller/remove-device.controller.js";
import updateDeviceController from "./controller/update-device.controller.js";
import getConnectedDevicesController from "./controller/get-connected-devices.controller.js";
import getConnectedDeviceController from "./controller/get-connected-device.controller.js";

export default async function routes(fastify: FastifyInstance) {
  testController(fastify);
  connectDeviceController(fastify);
  removeDeviceController(fastify);
  updateDeviceController(fastify);
  getConnectedDevicesController(fastify);
  getConnectedDeviceController(fastify);
}

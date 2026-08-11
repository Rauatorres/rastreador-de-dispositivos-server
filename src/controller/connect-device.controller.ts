import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import readJSONFile from "../shared/utils/readJSONFile.js";
import DeviceConfigs from "../model/device-configs.js";
import writeToJSONFile from "../shared/utils/writeToJSONFile.js";
import ConnectionConfigsDBO from "../dbo/connection-configs-dbo.js";

export default function connectDeviceController(fastify: FastifyInstance) {
  fastify.post(
    "/connect_device",
    {},
    async (request: FastifyRequest, reply: FastifyReply) => {
      if (typeof request.body == "object") {
        const body = request.body as Object;
        if (body.hasOwnProperty("ipAddress") && body.hasOwnProperty("name")) {
          const bodyDBO = body as ConnectionConfigsDBO;
          const randomId = crypto.randomUUID();
          const deviceConfigs: DeviceConfigs = {
            deviceId: randomId,
            ipAddress: bodyDBO.ipAddress,
            name: bodyDBO.name,
          };
          const connectedDevicesPath = "src/db/connected-devices.json";
          const connectedDevices = await readJSONFile(connectedDevicesPath);
          const newConnectedDevices = [...connectedDevices, deviceConfigs];

          writeToJSONFile(connectedDevicesPath, newConnectedDevices);

          return {
            msg: "device connected succcessfully",
            deviceConfigs: deviceConfigs,
          };
        } else {
          return {
            error: "connection configurations proprety is missing",
          };
        }
      } else {
        return {
          error: "the request content must be a json object",
        };
      }
    },
  );
}

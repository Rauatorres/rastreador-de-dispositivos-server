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
      console.log(request.body);
      if (typeof request.body == "object") {
        const body = request.body as Object;
        if (body.hasOwnProperty("name")) {
          const bodyDBO = body as ConnectionConfigsDBO;
          const randomId = crypto.randomUUID();
          const deviceConfigs: DeviceConfigs = {
            connectionId: randomId,
            name: bodyDBO.name,
            locale: bodyDBO.locale,
          };
          const connectedDevicesPath = "src/db/connected-devices.json";
          const connectedDevices = await readJSONFile(connectedDevicesPath);
          const newConnectedDevices = [...connectedDevices, deviceConfigs];

          writeToJSONFile(connectedDevicesPath, newConnectedDevices);

          return {
            success: true,
            msg: "device connected succcessfully",
            connectionId: deviceConfigs.connectionId,
          };
        } else {
          return {
            success: false,
            error: "device name is missing",
          };
        }
      } else {
        return {
          success: false,
          error: "the request content must be a json object",
        };
      }
    },
  );
}

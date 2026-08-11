import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import RemoveDeviceDBO from "../dbo/remove-device-dbo.js";
import readJSONFile from "../shared/utils/readJSONFile.js";
import writeToJSONFile from "../shared/utils/writeToJSONFile.js";

export default function removeDeviceController(fastify: FastifyInstance) {
  fastify.delete(
    "/remove_device/:deviceId",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const requestParams = request.params as RemoveDeviceDBO;

      if (!requestParams.deviceId) return { error: "device id not specified" };

      const params = requestParams as RemoveDeviceDBO;
      const deviceId = params.deviceId;
      const connectedDevicesPath = "src/db/connected-devices.json";
      const connectedDevices = await readJSONFile(connectedDevicesPath);

      if (
        !connectedDevices.some((device) => device.deviceId == params.deviceId)
      ) {
        return { error: "device not found" };
      }

      const newConnectedDevicesList = connectedDevices.filter((device) => {
        return device.deviceId != deviceId;
      });

      writeToJSONFile(connectedDevicesPath, newConnectedDevicesList);

      return {
        msg: `the device ${params.deviceId} was removed successfuly `,
      };
    },
  );
}

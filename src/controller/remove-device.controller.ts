import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import RemoveDeviceDBO from "../dbo/remove-device-dbo.js";
import readJSONFile from "../shared/utils/readJSONFile.js";
import writeToJSONFile from "../shared/utils/writeToJSONFile.js";

export default function removeDeviceController(fastify: FastifyInstance) {
  fastify.delete(
    "/remove_device/:connectionId",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const requestParams = request.params as RemoveDeviceDBO;

      if (!requestParams.connectionId)
        return { success: false, error: "device id not specified" };

      const params = requestParams as RemoveDeviceDBO;
      const connectionId = params.connectionId;
      const connectedDevicesPath = "src/db/connected-devices.json";
      const connectedDevices = await readJSONFile(connectedDevicesPath);

      if (
        !connectedDevices.some(
          (device) => device.connectionId == params.connectionId,
        )
      ) {
        return { success: false, error: "device not found" };
      }

      const newConnectedDevicesList = connectedDevices.filter((device) => {
        return device.connectionId != connectionId;
      });

      writeToJSONFile(connectedDevicesPath, newConnectedDevicesList);

      return {
        success: true,
        msg: `the device ${params.connectionId} was removed successfuly `,
      };
    },
  );
}

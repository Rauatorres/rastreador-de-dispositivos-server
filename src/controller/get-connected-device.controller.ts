import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import readJSONFile from "../shared/utils/readJSONFile.js";

export default function getConnectedDeviceController(fastify: FastifyInstance) {
  fastify.get(
    "/connected_device/:connectionId",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const requestParams = request.params as { connectionId: string };
      const connectedDevicesPath = "src/db/connected-devices.json";
      const connectedDevices = await readJSONFile(connectedDevicesPath);

      const connectedDevice = connectedDevices.find(
        (device) => device.connectionId == requestParams.connectionId,
      );

      if (!connectedDevice) {
        return {
          success: false,
          error: `no connection config was found with id ${requestParams.connectionId} `,
        };
      }

      return { success: true, result: connectedDevice };
    },
  );
}

import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import readJSONFile from "../shared/utils/readJSONFile.js";

export default function getConnectedDevicesController(
  fastify: FastifyInstance,
) {
  fastify.get(
    "/connected_devices",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const connectedDevicesPath = "src/db/connected-devices.json";

      const connectedDevices = await readJSONFile(connectedDevicesPath);

      if (connectedDevices.length == 0) {
        return { success: false, error: "there are no connected devices" };
      }

      return { success: true, result: connectedDevices };
    },
  );
}

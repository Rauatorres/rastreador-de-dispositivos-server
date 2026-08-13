import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import UpdateDeviceDBO from "../dbo/update-device-dbo.js";
import readJSONFile from "../shared/utils/readJSONFile.js";
import writeToJSONFile from "../shared/utils/writeToJSONFile.js";

export default function updateDeviceController(fastify: FastifyInstance) {
  fastify.patch(
    "/update_device/:connectionId",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const requestParams = request.params as { connectionId: string };
      const requestBody = request.body as UpdateDeviceDBO;
      const connectedDevicesPath = "src/db/connected-devices.json";
      const connectedDevices = await readJSONFile(connectedDevicesPath);

      if (!requestParams.connectionId)
        return { success: false, error: "device id not especified" };

      const device = connectedDevices.find(
        (device) => device.connectionId == requestParams.connectionId,
      );

      if (!device) return { success: false, error: "device not found" };

      const updatedDevice = { ...device, ...requestBody };

      const newConnectedDevices = connectedDevices.map((device) => {
        if (device.connectionId == updatedDevice.connectionId) {
          return (device = updatedDevice);
        } else {
          return device;
        }
      });

      writeToJSONFile(connectedDevicesPath, newConnectedDevices);

      return {
        success: true,
        msg: `successfuly updated device ${updatedDevice.connectionId} `,
        result: updatedDevice,
      };
    },
  );
}

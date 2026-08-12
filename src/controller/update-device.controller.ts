import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import UpdateDeviceDBO from "../dbo/update-device-dbo.js";
import readJSONFile from "../shared/utils/readJSONFile.js";
import writeToJSONFile from "../shared/utils/writeToJSONFile.js";

export default function updateDeviceController(fastify: FastifyInstance) {
  fastify.patch(
    "/update_device/:deviceId",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const requestParams = request.params as { deviceId: string };
      const requestBody = request.body as UpdateDeviceDBO;
      const connectedDevicesPath = "src/db/connected-devices.json";
      const connectedDevices = await readJSONFile(connectedDevicesPath);

      if (!requestParams.deviceId) return { error: "device id not especified" };

      const device = connectedDevices.find(
        (device) => device.deviceId == requestParams.deviceId,
      );

      if (!device) return { error: "device not found" };

      const updatedDevice = { ...device, ...requestBody };

      const newConnectedDevices = connectedDevices.map((device) => {
        if (device.deviceId == updatedDevice.deviceId) {
          return (device = updatedDevice);
        } else {
          return device;
        }
      });

      writeToJSONFile(connectedDevicesPath, newConnectedDevices);

      return { msg: `successfuly updated device ${updatedDevice.deviceId} ` };
    },
  );
}

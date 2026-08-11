import { writeFile } from "node:fs";
import ConnectionConfigs from "../../model/device-configs.js";

export default function writeToJSONFile(
  filePath: string,
  newData: ConnectionConfigs[],
) {
  const dataString = JSON.stringify(newData);
  writeFile(filePath, dataString, (err) => {
    if (err) throw err;

    console.log(`the file ${filePath} was updated`);
  });
}

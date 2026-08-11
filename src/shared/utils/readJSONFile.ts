import { readFile } from "fs/promises";
import ConnectionConfigs from "../../model/device-configs.js";

export default async function readJSONFile(fileName: string) {
  let fileContent: string = "";
  const data = await readFile(fileName);
  fileContent = data.toString();
  if (fileContent) {
    return JSON.parse(fileContent) as ConnectionConfigs[];
  } else {
    return [] as ConnectionConfigs[];
  }
}

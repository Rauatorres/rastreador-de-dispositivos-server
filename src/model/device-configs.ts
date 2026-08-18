export default interface DeviceConfigs {
  connectionId: string;
  ipAddress: string;
  name: string;
  locale: {
    latitude: number;
    longitude: number;
  };
}

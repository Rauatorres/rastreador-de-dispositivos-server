export default interface DeviceConfigs {
  connectionId: string;
  ipAddress: string;
  name: string;
  locale: {
    lat: number;
    lng: number;
  };
}

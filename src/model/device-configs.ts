export default interface DeviceConfigs {
  connectionId: string;
  name: string;
  locale: {
    lat: number;
    lng: number;
  };
}

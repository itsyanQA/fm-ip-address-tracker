type As = {
  asn: number;
  domain: string;
  name: string;
  route: string;
  type: string;
};

type Location = {
  country: string;
  region: string;
  timezone: string;
  lat: number;
  lng: number;
  postalCode: string;
  geonameId: number;
  city: string;
};

export type ApiStatus = "fetching" | "error" | "success" | "idle";

export type IpifyResponse = {
  ip: string;
  isp: string;
  as: As;
  location: Location;
};

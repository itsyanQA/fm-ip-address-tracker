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
};

export type IpifyResponse = {
  ip: string;
  isp: string;
  as: As;
  location: Location;
};

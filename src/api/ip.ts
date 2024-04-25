const BASE_URL = "https://geo.ipify.org/api/v2/country";
const API_KEY = "at_T3lxZmiPUvFVpYT3RGGTWkCP1av7n";

export async function getIp(ipAddress: string = "") {
  let response: Response | null = null;

  try {
    response = await fetch(`${BASE_URL}?apiKey=${API_KEY}&domain=${ipAddress}`);
  } catch (error) {
    console.error("Error fetching ip");
    throw new Error(`Error fetching ip: ${error}`);
  }

  if (response) {
    return response.json();
  }
}

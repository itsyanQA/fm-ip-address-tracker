import { useQuery } from "react-query";
import { getIp } from "src/api/ip";

export function useGetIpInfo(ipAddress?: string) {
  const result = useQuery({
    queryKey: [`getIp/${ipAddress}`],
    queryFn: () => getIp(ipAddress),
    refetchOnWindowFocus: false,
  });

  return result;
}

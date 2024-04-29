import { PropsWithChildren, useEffect, useState } from "react";
import { SearchContext } from "../context/use-search-context";
import { useGetIpInfo } from "@hooks/use-get-ip-info";

export function SearchContextProvider({ children }: PropsWithChildren) {
  const [searchedAddress, setSearchedAddress] = useState<string>("");
  const [status, setStatus] = useState<"fetching" | "error" | "success">();
  const { data, isFetching, isError } = useGetIpInfo(searchedAddress);

  useEffect(() => {
    if (isFetching) {
      setStatus("fetching");
    } else if (data) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }, [isFetching, data]);

  return (
    <SearchContext.Provider value={{ searchedAddress, setSearchedAddress, data, isFetching, isError, status }}>{children}</SearchContext.Provider>
  );
}

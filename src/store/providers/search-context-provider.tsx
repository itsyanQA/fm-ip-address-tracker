import { PropsWithChildren, useState } from "react";
import { SearchContext } from "../context/use-search-context";
import { useGetIpInfo } from "@hooks/use-get-ip-info";

export function SearchContextProvider({ children }: PropsWithChildren) {
  const [searchedAddress, setSearchedAddress] = useState<string>("");
  const { data, isFetching, isError } = useGetIpInfo(searchedAddress);

  return (
    <SearchContext.Provider value={{ searchedAddress, setSearchedAddress, data, isFetching, isError }}>{children}</SearchContext.Provider>
  );
}

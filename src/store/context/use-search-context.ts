import { ApiStatus, IpifyResponse } from "@customTypes/types";
import { Dispatch, SetStateAction, createContext, useContext } from "react";

type SearchContextType = {
  searchedAddress: string;
  setSearchedAddress: Dispatch<SetStateAction<string>>;
  data: IpifyResponse;
  isFetching: boolean;
  isError: boolean;
  status: ApiStatus;
};

export const SearchContext = createContext<SearchContextType | null>(null);

export function useSearchQueryContext() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("Component must be wrapped inside SearchQueryContext");
  }

  return context;
}

import "./header.scss";
import { Input } from "@components/input";
import { Error } from "@components/error";
import { InfoItemList } from "@components/info-item-list";
import { useSearchQueryContext } from "src/store/context/use-search-context";
import { Loader } from "@components/loader";
import { ApiStatus } from "@customTypes/types";

export function Header() {
  const { status } = useSearchQueryContext();

  const content: Record<ApiStatus, JSX.Element | null> = {
    fetching: <Loader />,
    success: <InfoItemList />,
    error: <Error />,
    idle: null,
  };

  return (
    <header>
      <h1>IP Address Tracker</h1>
      <Input />
      {content[status]}
    </header>
  );
}

import { Input } from "@components/input";
import { InfoItemList } from "@components/info-item-list";
import "./header.scss";

export function Header() {
  return (
    <header>
      <h1>IP Address Tracker</h1>
      <Input />
      <InfoItemList />
    </header>
  );
}

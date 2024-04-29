import "./info-item-list.scss";
import { useSearchQueryContext } from "src/store/context/use-search-context";
import { InfoItem, InfoItemProps } from "@components/info-item";

export function InfoItemList() {
  const { data } = useSearchQueryContext();
  const items: InfoItemProps[] = [
    { label: "ip address", description: data?.ip },
    { label: "location", description: data?.location?.region },
    { label: "timezone", description: `UTC ${data?.location?.timezone}` },
    { label: "isp", description: data?.isp },
  ];

  return (
    <ul className="info">
      {items.map((item, index) => (
        <InfoItem label={item.label} description={item.description} key={index} />
      ))}
    </ul>
  );
}

import "./info-item.scss";

export type InfoItemProps = {
  label: string;
  description: string;
};

export function InfoItem({ label, description }: InfoItemProps) {
  return (
    <li className="info-item">
      <h2>{label}</h2>
      <span>{description}</span>
    </li>
  );
}

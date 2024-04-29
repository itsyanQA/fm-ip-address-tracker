import "./map-placeholder.scss";
import MapIcon from "@assets/map-icon.svg?react";

export function MapPlaceholder() {
  return (
    <div className="map-placeholder">
      <div className="map-placeholder__loader" />
      <MapIcon className="map-placeholder__icon" />
    </div>
  );
}

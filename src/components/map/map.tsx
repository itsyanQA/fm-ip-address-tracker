import { Icon, LatLngExpression, PointExpression } from "leaflet";
import { MapContainer, MapContainerProps, Marker, Popup, TileLayer } from "react-leaflet";
import { useSearchQueryContext } from "src/store/context/use-search-context";
import iconUrl from "@assets/location.svg";
import "./map.scss";
import { MapPlaceholder } from "@components/map-placeholder";

export function Map() {
  const { data } = useSearchQueryContext();

  if (!data?.location?.lat || !data?.location?.lng) {
    return <MapPlaceholder />;
  }

  const position = [data.location.lat, data.location.lng] as LatLngExpression;
  const markerIcon = new Icon({
    iconUrl,
    iconSize: 46 as unknown as PointExpression,
  });
  const mapContainerProps: Partial<MapContainerProps> = {
    center: position,
    zoom: 15,
    zoomControl: false,
    attributionControl: false,
  };

  return (
    <MapContainer {...mapContainerProps}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={position}
        icon={markerIcon}
        eventHandlers={{
          click: (event) => event.target.openPopup(),
        }}
      />
    </MapContainer>
  );
}

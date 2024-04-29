import "./home-page.scss";
import { Header } from "@components/header";
import { Map } from "@components/map";
import { SearchContextProvider } from "src/store/providers/search-context-provider";

export function HomePage() {
  return (
    <SearchContextProvider>
      <main>
        <Header />
        <Map />
      </main>
    </SearchContextProvider>
  );
}

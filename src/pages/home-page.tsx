import "./home-page.scss";
import { Header } from "@components/header";
import { SearchContextProvider } from "src/store/providers/search-context-provider";

export function HomePage() {
  return (
    <SearchContextProvider>
      <main>
        <Header />
      </main>
    </SearchContextProvider>
  );
}

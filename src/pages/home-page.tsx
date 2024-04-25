import { Header } from "@components/header";
import "./home-page.scss";
import { useGetIpInfo } from "@hooks/use-get-ip-info";
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

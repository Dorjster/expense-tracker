import "@/styles/globals.css";
import { DataProvider } from "@/context/dataContext";

import RecordProvider from "@/components/Providers/RecordProvider";
import AddCategoryProvider from "@/components/Providers/AddCategoryProvider";

export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <RecordProvider>
        <AddCategoryProvider>
          <Component {...pageProps} />;
        </AddCategoryProvider>
      </RecordProvider>
    </DataProvider>
  );
}

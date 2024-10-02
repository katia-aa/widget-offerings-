import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
// import Homepage from "./Homepage";
import BannerCustomizer from "./BannerShow";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <BannerCustomizer />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);

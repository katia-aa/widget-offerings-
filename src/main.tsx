import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"; // Import Router components
import "./index.css";
import Homepage from "./Homepage"; // Uncomment if you have a homepage component
import BannerCustomizer from "./BannerShow";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Router basename="/widget-offerings-">
          <Routes>
            <Route path="/" element={<Homepage />} />{" "}
            <Route path="/banner-customizer" element={<BannerCustomizer />} />{" "}
            {/* Define the BannerCustomizer route */}
          </Routes>
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { SearchProvider } from "./context/SearchProvider.tsx";
import { MobileNavProvider } from "./context/MobileNavProvider.tsx";
import { Provider } from 'react-redux';
import { store } from "./redux/store.ts";
import App from "./App.tsx";
import "loaders-ui/dist/main/index.min.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <Router>
      <ThemeProvider>
        <MobileNavProvider>
        <SearchProvider>
        <App />
        </SearchProvider>
        </MobileNavProvider>
      </ThemeProvider>
    </Router>
    </Provider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ModalProvider } from "./context/modal-context.jsx";
import { ThemeProvider } from "./context/theme-context.jsx";
import Theme from "./theme/Theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ThemeProvider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/restcss.scss";
import "./assets/_tab.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);

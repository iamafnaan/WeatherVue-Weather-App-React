import React from "react";
import ReactDOM from "react-dom/client";

import theme from "./theme/theme";
import App from "./App.jsx";

import { ThemeProvider } from "@mui/material/styles";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

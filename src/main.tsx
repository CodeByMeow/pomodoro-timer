import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import theme from "./themes/theme.ts";
import PomorodoProvider from "./contexts/store/PomodoroProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <PomorodoProvider>
            <ChakraProvider theme={theme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ChakraProvider>
        </PomorodoProvider>
    </React.StrictMode>,
);

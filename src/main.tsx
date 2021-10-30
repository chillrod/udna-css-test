import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { AppContainer } from "./style";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <AppContainer>
        <App />
      </AppContainer>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import { RecoilRoot } from "recoil";

import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import AppRouter from "./routes/router";

import "@presentation/styles/main.scss";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <AppRouter />
      </ChakraProvider>
    </RecoilRoot>
  );
};

export default App;

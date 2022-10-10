import React from "react";
import { RecoilRoot } from "recoil";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "style/globalstyle";

import { queryClient } from "service/queryClient";
import theme from "style/theme";
import Router from "./router";

const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <ReactQueryDevtools />
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;

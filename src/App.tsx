import React from "react";
import { RecoilRoot } from "recoil";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import GlobalStyles from "style/globalstyle";

import Router from "./router";
import { queryClient } from "service/queryClient";

const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <GlobalStyles />
        <Router />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;

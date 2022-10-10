import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { NotFound, Home } from "pages";
import { Layout } from "components";
import { PATH } from "utils/constants";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={PATH.home} element={<Home />} />
          <Route path={PATH.notFound} element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { NotFound, Article } from "pages";
import { Layout } from "components";
import { PATH } from "utils/constants";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Article />} />
          <Route path={PATH.home} element={<Article />} />
          <Route path={PATH.notFound} element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

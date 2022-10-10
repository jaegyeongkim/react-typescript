import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { NotFound, Home } from "pages";
import { PATH } from "utils/constants";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={PATH.home} element={<Home />} />
        <Route path={PATH.notFound} element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

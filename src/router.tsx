import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { NotFound, Article, ArticleCreate, ArticleUpdate } from "pages";
import { Layout } from "components";
import { PATH } from "utils/constants";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Article />} />
          <Route path={PATH.article}>
            <Route path="" element={<Article />} />
            <Route path={PATH.articleCreate} element={<ArticleCreate />} />
            <Route path={PATH.articleUpdate} element={<ArticleUpdate />} />
          </Route>
          <Route path={PATH.notFound} element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

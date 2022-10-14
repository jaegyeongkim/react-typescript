import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import styled from "styled-components";

import { Table } from "components";
import { useFetchArticle, useResetQuery } from "hooks/queries";
import { articleHeadColumnList } from "assets/static";

interface TableCellType {
  title: string;
  content: string;
}

const ArticleTable = () => {
  const { fetchArticle } = useFetchArticle();
  const query = useQuery(["articleStorage"], fetchArticle);

  useResetQuery(query);

  return (
    <CustomTable>
      <Table.Thead columnList={articleHeadColumnList} />
      <Table.Tbody>
        {Object.entries(query.data || []).map(([id, value]) => (
          <Table.Trow key={id}>
            {articleHeadColumnList.map(({ key }, index) => {
              return (
                <Table.Cell key={key}>
                  {index === 0 && <GoToDetail to={`/article/${id}`} />}
                  {value[key as keyof TableCellType]}
                </Table.Cell>
              );
            })}
          </Table.Trow>
        ))}
      </Table.Tbody>
    </CustomTable>
  );
};

export default ArticleTable;

const CustomTable = styled(Table)`
  grid-template-columns: 1fr 3fr;
`;

const GoToDetail = styled(Link)`
  position: absolute;
  left: 0px;
  width: 100%;
  height: 100%;

  :hover {
    background-color: ${({ theme }) => theme.color.point_01_opacity_10};
  }
`;

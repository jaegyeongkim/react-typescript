import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Table } from "components";
import { useFetchArticle } from "hooks/queries";
import { articleHeadColumnList } from "assets/static";
import { useQuery } from "react-query";

interface TableCellType {
  title: string;
  content: string;
}

const ArticleTable = () => {
  const { fetchArticle } = useFetchArticle();
  const query = useQuery(["articleStorage"], fetchArticle);

  return (
    <CustomTable>
      <Table.Thead columnList={articleHeadColumnList} />
      <Table.Tbody>
        {Object.entries(query.data || []).map(([id, value]) => (
          <Table.Trow key={id}>
            {articleHeadColumnList.map(({ key }, index) => (
              <Table.Cell key={key}>
                {index === 0 && <GoToUpdate to={`/article/detail?id=${id}`} />}
                {value[key as keyof TableCellType]}
              </Table.Cell>
            ))}
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

const GoToUpdate = styled(Link)`
  position: absolute;
  left: 0px;
  width: 100%;
  height: 100%;
  :hover {
    background-color: ${({ theme }) => theme.color.point_01_opacity_10};
  }
`;

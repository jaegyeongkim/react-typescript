import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Table } from "components";
import { articleHeadColumnList } from "assets/static";

interface TableCellType {
  title: string;
  content: string;
}

const dummyData = [
  {
    id: 1,
    title: "title 1",
    content: "content 1",
  },
  {
    id: 2,
    title: "title 2",
    content: "content 2",
  },
  {
    id: 3,
    title: "title 3",
    content: "content 3",
  },
];

const ArticleTable = () => {
  return (
    <CustomTable>
      <Table.Thead columnList={articleHeadColumnList} />
      <Table.Tbody>
        {dummyData.map((rowData) => (
          <Table.Trow key={rowData.id}>
            <GoToUpdate to={`/article/detail?id=${rowData.id}`} />
            {articleHeadColumnList.map(({ key }) => (
              <Table.Cell key={key}>
                {rowData[key as keyof TableCellType]}
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
  width: 100%;
  height: 100%;
  :hover {
    background-color: ${({ theme }) => theme.color.point_01_opacity_10};
  }
`;

import React, { createContext, ReactNode, useContext } from "react";
import styled, { css } from "styled-components";

interface ContentType {
  className?: string;
}

interface TableProps extends ContentType {
  children?: ReactNode;
}

interface TheadProps {
  label: string;
  key: string;
}

const TableContext = createContext<ContentType>({
  className: "",
});

const Table = ({ className, children }: TableProps) => {
  return (
    <Root>
      <TableContext.Provider value={{ className }}>
        {children}
      </TableContext.Provider>
    </Root>
  );
};

Table.Thead = function TableHead({ columnList }: { columnList: TheadProps[] }) {
  const { className } = useContext(TableContext);
  return (
    <Thead>
      <Trow className={className}>
        {Object.values(columnList).map(({ key, label }) => {
          return <Th key={key}>{label}</Th>;
        })}
      </Trow>
    </Thead>
  );
};

Table.Tbody = function TableBody({ children }: TableProps) {
  return <Tbody>{children}</Tbody>;
};

Table.Trow = function TableRow({ children }: TableProps) {
  const { className } = useContext(TableContext);
  return <Trow className={className}>{children}</Trow>;
};

Table.Cell = function TableCell({ children }: TableProps) {
  return <Td>{children}</Td>;
};

export default Table;

const Root = styled.table`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.gray_02};
  background-color: ${({ theme }) => theme.color.white};
`;

const Trow = styled.tr`
  position: relative;
  display: grid;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray_02};
  :last-child {
    border-bottom: none;
  }
`;

const Thead = styled.thead`
  & > ${Trow} {
    height: 40px;
  }
  border-bottom: 1px solid ${({ theme }) => theme.color.gray_02};
  background-color: ${({ theme }) => theme.color.gray_00};
`;

const Tbody = styled.tbody`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;

  & > ${Trow} {
    min-height: 50px;
  }
`;

const mixinCell = css`
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-right: 1px solid ${({ theme }) => theme.color.gray_02};
  :last-child {
    border-right: none;
  }
`;

const Th = styled.th`
  ${mixinCell};
`;

const Td = styled.td`
  ${mixinCell};
`;

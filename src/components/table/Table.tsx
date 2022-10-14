import React, { createContext, ReactNode, useContext } from "react";

import * as S from "./Table.styled";

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
    <S.Root>
      <TableContext.Provider value={{ className }}>
        {children}
      </TableContext.Provider>
    </S.Root>
  );
};

Table.Thead = function TableHead({ columnList }: { columnList: TheadProps[] }) {
  const { className } = useContext(TableContext);
  return (
    <S.Thead>
      <S.Trow className={className}>
        {Object.values(columnList).map(({ key, label }) => {
          return <S.Th key={key}>{label}</S.Th>;
        })}
      </S.Trow>
    </S.Thead>
  );
};

Table.Tbody = function TableBody({ children }: TableProps) {
  return <S.Tbody>{children}</S.Tbody>;
};

Table.Trow = function TableRow({ children }: TableProps) {
  const { className } = useContext(TableContext);
  return <S.Trow className={className}>{children}</S.Trow>;
};

Table.Cell = function TableCell({ children }: TableProps) {
  return <S.Td>{children}</S.Td>;
};

export default Table;

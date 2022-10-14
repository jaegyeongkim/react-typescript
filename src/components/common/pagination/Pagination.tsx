import React from "react";

import usePagination from "./hooks/usePagination";
import * as S from "./Pagination.styled";

import type { PageInfo } from "types/common";

interface PaginationProps {
  className?: string;
  pageInfo: PageInfo;
}

const Pagination = ({ className, pageInfo }: PaginationProps) => {
  const { currentPage, totalPages } = pageInfo;

  const {
    handlePrevPage,
    handleNextPage,
    handleClickNum,
    numList,
    isDisabledPrev,
    isDisabledNext,
  } = usePagination(currentPage, totalPages);

  return (
    <S.Root className={className}>
      <S.Wrapper>
        {numList.length !== 0 && (
          <>
            <S.ArrowBtn
              type="button"
              disabled={isDisabledPrev}
              onClick={handlePrevPage}
            >
              <S.ArrowLeftIcon />
            </S.ArrowBtn>
            <S.NumWrapper>
              {numList.map((num, i) => {
                return (
                  <S.NumBtn
                    key={i}
                    type="button"
                    isCurrentPage={currentPage === num}
                    onClick={handleClickNum(num)}
                  >
                    {num}
                  </S.NumBtn>
                );
              })}
            </S.NumWrapper>
            <S.ArrowBtn
              type="button"
              disabled={isDisabledNext}
              onClick={handleNextPage}
            >
              <S.ArrowRightIcon />
            </S.ArrowBtn>
          </>
        )}
      </S.Wrapper>
    </S.Root>
  );
};

export default Pagination;

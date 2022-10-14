import { useState, useEffect, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { createPageList } from "utils/helper/pagination";

const usePagination = (
  currentPage: number,
  totalPages: number,
  maxPageNum: number = 10,
) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [numList, setNumList] = useState<number[]>([]);

  const pageNumList = createPageList(currentPage, 10, totalPages);

  const isDisabledPrev = useMemo(() => {
    return currentPage - 1 < 1;
  }, [currentPage]);

  const isDisabledNext = useMemo(() => {
    return (
      Math.floor((currentPage + maxPageNum - 1) / maxPageNum) >
      Math.floor(totalPages / maxPageNum)
    );
  }, [currentPage, maxPageNum, totalPages]);

  const handlePrevPage = useCallback(() => {
    if (currentPage === 1) return;

    const prevPageNum = Math.max(
      maxPageNum * Math.floor((currentPage - maxPageNum - 1) / maxPageNum) + 1,
      1,
    );

    setSearchParams({
      ...Object.fromEntries(searchParams),
      page: String(prevPageNum),
    });
  }, [currentPage, maxPageNum, setSearchParams, searchParams]);

  const handleNextPage = useCallback(() => {
    if (currentPage === totalPages) return;

    const nextPageNum = Math.min(
      Math.floor((currentPage + maxPageNum - 1) / maxPageNum) * maxPageNum + 1,
      totalPages,
    );

    setSearchParams({
      ...Object.fromEntries(searchParams),
      page: String(nextPageNum),
    });
  }, [currentPage, maxPageNum, searchParams, totalPages]);

  const handleClickNum = useCallback(
    (idx: number) => () => {
      setSearchParams({
        ...Object.fromEntries(searchParams),
        page: String(idx),
      });
    },
    [searchParams],
  );

  useEffect(() => {
    setNumList(pageNumList);
  }, [currentPage, totalPages]);

  return {
    handlePrevPage,
    handleNextPage,
    handleClickNum,
    numList,
    isDisabledPrev,
    isDisabledNext,
  };
};

export default usePagination;

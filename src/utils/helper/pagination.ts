export const createPageList = (
  currentPage: number,
  dataPerPage: number,
  totalPages: number,
) => {
  const result = [];
  const firstIndex =
    Math.floor((currentPage - 1) / dataPerPage) * dataPerPage + 1;
  const lastIndex = Math.min(firstIndex + dataPerPage - 1, totalPages);

  for (let i = firstIndex; i <= lastIndex; i++) {
    result.push(i);
  }

  return result;
};

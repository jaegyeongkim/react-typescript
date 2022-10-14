export const initArticleStorage = new Array(26)
  .fill(0)
  .reduce((acc, cur, index) => {
    return {
      ...acc,
      [index]: {
        title: `test title ${index}`,
        content: `test content ${index}`,
      },
    };
  }, {});

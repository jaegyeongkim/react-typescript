export const pseudoLatency = (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, Math.random() * 1000 + 200);
  });
};

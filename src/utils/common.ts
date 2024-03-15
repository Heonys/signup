export const fakeDelay = <T>(promise: Promise<T>) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 500);
  }).then(() => promise);
};

export const pushToParams = (key, value) => {
  return (prev) => {
    if (prev.has(key) && !value) prev.delete(key);
    else prev.set(key, value);
    return prev;
  };
};

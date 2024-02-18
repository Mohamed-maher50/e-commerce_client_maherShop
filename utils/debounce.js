export function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    return new Promise((resolve) => {
      timeoutId = setTimeout(async function () {
        const result = await func.apply(this, args);
        resolve(result);
      }, delay);
    });
  };
}

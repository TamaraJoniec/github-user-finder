type DebouncedFunction<T extends unknown[]> = (...args: T) => void;

export const debounce = <T extends unknown[]>(func: DebouncedFunction<T>, delay: number): DebouncedFunction<T> => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: T) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

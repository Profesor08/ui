export function mergeRefs<T = unknown>(
  refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
  return (value) => {
    for (const ref of refs) {
      if (ref instanceof Function) {
        ref(value);
      } else if (ref !== undefined && ref !== null) {
        ref.current = value;
      }
    }
  };
}

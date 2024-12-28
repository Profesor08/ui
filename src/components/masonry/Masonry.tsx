import { Masonry as MasonryDOM } from "@prof-dev/masonry";
import { useLayoutEffect, useRef } from "react";

export const Masonry: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props,
) => {
  const instanceRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (instanceRef.current !== null) {
      const masonry = new MasonryDOM(instanceRef.current);

      return () => {
        masonry?.destroy();
      };
    }

    return () => {};
  }, []);

  return <div ref={instanceRef} {...props} />;
};

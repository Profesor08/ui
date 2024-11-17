import { Masonry as MasonryDOM } from "@prof-dev/masonry";
import {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from "react";

export const Masonry = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const instanceRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => instanceRef.current!);

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
});

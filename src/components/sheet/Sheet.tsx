import clsx from "clsx";
import { AnimationProps } from "motion/react";
import { Dialog } from "../dialog/Dialog";
import styles from "./Sheet.module.css";

export interface SheetProps extends Pick<AnimationProps, "transition"> {
  onClose?: () => void;
  className?: string;
  duration?: number;
}

export const Sheet: React.FC<React.PropsWithChildren<SheetProps>> & {
  Context: typeof Dialog.Context;
} = ({
  className,
  onClose,
  children,
  duration = 0.3,
  transition = { duration, ease: [0.25, 0.1, 0.25, 1] },
}) => {
  const initial = { opacity: 0, translateY: "100%" };

  const animate = { opacity: 1, translateY: 0 };

  const exit = { opacity: 0, translateY: "100%" };

  return (
    <Dialog
      className={clsx(styles.sheet, className)}
      onClose={onClose}
      initial={initial}
      animate={animate}
      exit={exit}
      duration={duration}
      transition={transition}
    >
      {children}
    </Dialog>
  );
};

Sheet.Context = Dialog.Context;

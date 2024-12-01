import clsx from "clsx";
import { AnimatePresence, AnimationProps, motion } from "motion/react";
import React, { createContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Dialog.module.scss";

export interface DialogProps extends AnimationProps {
  onClose?: () => void;
  className?: string;
  duration?: number;
}

export interface DialogContextProps {
  open: boolean;
  onClose: () => void;
}

const DialogContext = createContext<DialogContextProps>({
  open: false,
  onClose: () => {},
});

export const Dialog: React.FC<React.PropsWithChildren<DialogProps>> & {
  Context: typeof DialogContext;
} = ({
  onClose,
  className,
  children,
  duration = 0.3,
  initial = { opacity: 0, translateY: "1rem" },
  animate = { opacity: 1, translateY: 0 },
  exit = { opacity: 0, translateY: "-1rem" },
  transition = { duration, ease: [0.175, 0.885, 0.32, 1.275] },
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [open, setOpen] = useState(true);

  const context = {
    open,
    onClose: () => {
      setOpen(false);
    },
  };

  const onDismiss = (event: React.MouseEvent) => {
    const isOutside =
      event.target instanceof Node &&
      dialogRef.current?.contains(event.target) === false;

    if (isOutside === true) {
      setOpen(false);
    } else if (
      dialogRef.current !== null &&
      event.target === dialogRef.current
    ) {
      const rect = dialogRef.current.getBoundingClientRect();

      const isOutsideOfDialogRect =
        event.clientY < rect.top ||
        event.clientY > rect.bottom ||
        event.clientX < rect.left ||
        event.clientX > rect.right;

      if (isOutsideOfDialogRect === true) {
        setOpen(false);
      }
    }
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return createPortal(
    <DialogContext.Provider value={context}>
      <AnimatePresence onExitComplete={onClose}>
        {open === true && (
          <motion.dialog
            ref={dialogRef}
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
            className={clsx(styles.dialog, className)}
            onClick={onDismiss}
          >
            {children}
          </motion.dialog>
        )}
      </AnimatePresence>
    </DialogContext.Provider>,
    document.body
  );
};

Dialog.Context = DialogContext;

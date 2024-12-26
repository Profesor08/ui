import clsx from "clsx";
import { AnimatePresence, AnimationProps, motion } from "motion/react";
import React, { createContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Dialog.module.css";

export interface DialogProps extends AnimationProps {
  onClose?: () => void;
  className?: string;
  duration?: number;
  dismiss?: boolean;
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
  dismiss = true,
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
    if (dismiss === true) {
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
    }
  };

  const onDialogClose: React.ReactEventHandler<HTMLDialogElement> = (event) => {
    event.preventDefault();

    if (dismiss === true) {
      setOpen(false);
    }
  };

  const onDialogKeyDown: React.KeyboardEventHandler<HTMLDialogElement> = (
    event
  ) => {
    if (dismiss === false && event.key === "Escape") {
      event.preventDefault();
    }
  };

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return createPortal(
    <DialogContext.Provider value={context}>
      <AnimatePresence onExitComplete={onClose}>
        {open === true && (
          <motion.dialog
            ref={dialogRef}
            className={clsx(styles.dialog, className)}
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
            onClick={onDismiss}
            onCancel={onDialogClose}
            onKeyDown={onDialogKeyDown}
            role="dialog"
            aria-modal="true"
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

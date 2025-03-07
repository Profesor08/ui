import clsx from "clsx";
import {
  DragControls,
  DragHandlers,
  HTMLMotionProps,
  motion,
  useDragControls,
} from "motion/react";
import { createContext, use, useImperativeHandle, useRef } from "react";
import { Dialog, DialogRef } from "../dialog/Dialog";
import styles from "./Sheet.module.css";

export interface SheetProps extends HTMLMotionProps<"dialog"> {
  ref?: React.RefObject<HTMLDialogElement | null>;
  onClose?: () => void;
  className?: string;
  duration?: number;
}

interface SheetContextProps {
  controls: DragControls;
}

const SheetContext = createContext<SheetContextProps>({} as SheetContextProps);

export const Sheet: React.FC<React.PropsWithChildren<SheetProps>> & {
  Context: typeof Dialog.Context;
  Header: typeof Header;
} = ({
  className,
  onClose,
  children,
  duration = 0.3,
  transition = { duration, ease: [0.25, 0.1, 0.25, 1] },
  ref,
  ...props
}) => {
  const dialogRef = useRef<DialogRef>(null);

  useImperativeHandle(ref, () => {
    return dialogRef.current!;
  });

  const initial = { opacity: 0, translateY: "100%" };

  const animate = { opacity: 1, translateY: 0 };

  const exit = { opacity: 0, translateY: "100%" };

  const controls = useDragControls();

  const context: SheetContextProps = {
    controls,
  };

  const onDragEnd: DragHandlers["onDrag"] = (_, info) => {
    if (info.velocity.y > 150) {
      dialogRef.current?.context.close();
    }
  };

  return (
    <SheetContext.Provider value={context}>
      <Dialog
        ref={dialogRef}
        className={clsx(styles.sheet, className)}
        onClose={onClose}
        initial={initial}
        animate={animate}
        exit={exit}
        duration={duration}
        transition={transition}
        drag="y"
        dragControls={controls}
        dragListener={false}
        dragConstraints={{
          top: 0,
        }}
        dragElastic={0.1}
        dragSnapToOrigin={true}
        onDragEnd={onDragEnd}
        {...props}
      >
        {children}
      </Dialog>
    </SheetContext.Provider>
  );
};

const Header: React.FC<HTMLMotionProps<"div">> = ({ className, ...props }) => {
  const sheet = use(SheetContext);

  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (event) => {
    sheet.controls.start(event);
  };

  return (
    <motion.div
      className={clsx(className, styles.header)}
      {...props}
      onPointerDown={onPointerDown}
    />
  );
};

Sheet.Context = Dialog.Context;
Sheet.Header = Header;

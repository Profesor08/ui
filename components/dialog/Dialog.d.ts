import { HTMLMotionProps } from 'motion/react';
import { default as React } from '../../../node_modules/react';
export interface DialogProps extends HTMLMotionProps<"dialog"> {
    ref?: React.RefObject<HTMLDialogElement | null>;
    contextRef?: React.RefObject<DialogContextProps | null>;
    onClose?: () => void;
    className?: string;
    duration?: number;
    dismiss?: boolean;
}
export interface DialogContextProps {
    dialogRef: React.RefObject<HTMLDialogElement | null>;
    open: boolean;
    close: () => void;
}
declare const DialogContext: React.Context<DialogContextProps>;
export declare const Dialog: React.FC<React.PropsWithChildren<DialogProps>> & {
    Context: typeof DialogContext;
};
export {};

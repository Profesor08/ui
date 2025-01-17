import { HTMLMotionProps } from 'motion/react';
import { Dialog } from '../dialog/Dialog';
export interface SheetProps extends HTMLMotionProps<"dialog"> {
    ref?: React.RefObject<HTMLDialogElement | null>;
    onClose?: () => void;
    className?: string;
    duration?: number;
}
export declare const Sheet: React.FC<React.PropsWithChildren<SheetProps>> & {
    Context: typeof Dialog.Context;
    Header: typeof Header;
};
declare const Header: React.FC<HTMLMotionProps<"div">>;
export {};

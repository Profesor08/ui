import { Placement } from '@floating-ui/react';
export interface DropdownProps {
    placement?: Placement;
    padding?: number;
    width?: number | "auto" | "fit" | "fill";
}
declare const Dropdown: React.FC<React.PropsWithChildren<DropdownProps>> & {
    Context: typeof DropdownContext;
    Toggle: typeof Toggle;
    Menu: typeof Menu;
};
type DropdownContextProps = {
    open: boolean;
    onClose: () => void;
    width?: DropdownProps["width"];
};
declare const DropdownContext: import('../../../node_modules/react').Context<DropdownContextProps>;
declare const Toggle: React.FC<React.PropsWithChildren>;
declare const Menu: React.FC<React.PropsWithChildren>;
export { Dropdown };

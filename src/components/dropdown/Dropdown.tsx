import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  Placement,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import clsx from "clsx";
import { createContext, useContext, useState } from "react";
import styles from "./Dropdown.module.css";

export interface DropdownProps {
  className?: string;
  placement?: Placement;
  padding?: number;
  /**
   * number - set fixed menu width
   * auto - width is set by the content, same as if not set
   * fit - set fixed width same as toggle width
   * fill - set min width same as toggle width and allow to expand
   */
  width?: number | "auto" | "fit" | "fill";
}

const Dropdown: React.FC<React.PropsWithChildren<DropdownProps>> & {
  Context: typeof DropdownContext;
  Toggle: typeof Toggle;
  Menu: typeof Menu;
} = ({
  className,
  placement = "bottom",
  padding = 12,
  width = "fit",
  children,
}) => {
  const [open, setOpen] = useState(false);

  const floating = useFloating({
    open,
    onOpenChange: setOpen,
    strategy: "fixed",
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(padding),
      flip(),
      shift({
        padding,
      }),
    ],
  });

  const click = useClick(floating.context);

  const dismiss = useDismiss(floating.context);

  const role = useRole(floating.context, { role: "listbox" });

  const interactions = useInteractions([click, dismiss, role]);

  const context = {
    open,
    onClose: () => setOpen(false),
    width,
  };

  const innerContext = {
    floating,
    interactions,
  };

  return (
    <DropdownContext.Provider value={context}>
      <DropdownInnerContext.Provider value={innerContext}>
        <div className={clsx(styles.dropdown, className)}>{children}</div>
      </DropdownInnerContext.Provider>
    </DropdownContext.Provider>
  );
};

type DropdownContextProps = {
  open: boolean;
  onClose: () => void;
  width?: DropdownProps["width"];
};

const DropdownContext = createContext<DropdownContextProps>({
  open: false,
  onClose: () => {},
});

type DropdownInnerContextProps = {
  floating: ReturnType<typeof useFloating>;
  interactions: ReturnType<typeof useInteractions>;
};

const DropdownInnerContext = createContext<DropdownInnerContextProps>({
  floating: undefined as unknown as ReturnType<typeof useFloating>,
  interactions: undefined as unknown as ReturnType<typeof useInteractions>,
});

const Toggle: React.FC<
  React.PropsWithChildren<{
    className?: string;
  }>
> = ({ className, children }) => {
  const { floating, interactions } = useContext(DropdownInnerContext);

  return (
    <div
      ref={floating.refs.setReference}
      className={clsx(styles.toggle, className)}
      {...interactions.getReferenceProps()}
    >
      {children}
    </div>
  );
};

const Menu: React.FC<
  React.PropsWithChildren<{
    className?: string;
  }>
> = ({ className, children }) => {
  const context = useContext(DropdownContext);
  const { floating, interactions } = useContext(DropdownInnerContext);

  if (context.open === false) {
    return null;
  }

  const width =
    typeof context.width === "number" || context.width === "auto"
      ? context.width
      : context.width === "fit"
        ? floating.elements.domReference?.clientWidth
        : undefined;

  const minWidth =
    context.width === "fill"
      ? floating.elements.domReference?.clientWidth
      : undefined;

  return (
    <FloatingPortal>
      <div
        ref={floating.refs.setFloating}
        className={clsx(styles.menu, className)}
        style={{
          ...floating.floatingStyles,
          width,
          minWidth,
        }}
        {...interactions.getFloatingProps()}
      >
        {children}
      </div>
    </FloatingPortal>
  );
};

Dropdown.Context = DropdownContext;
Dropdown.Toggle = Toggle;
Dropdown.Menu = Menu;

export { Dropdown };

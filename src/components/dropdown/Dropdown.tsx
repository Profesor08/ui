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
import { createContext, useContext, useState } from "react";
import styles from "./Dropdown.module.css";

export interface DropdownProps {
  placement?: Placement;
  padding?: number;
  width?: number | "auto" | "fit" | "fill";
}

const Dropdown: React.FC<React.PropsWithChildren<DropdownProps>> & {
  Context: typeof DropdownContext;
  Toggle: typeof Toggle;
  Menu: typeof Menu;
} = ({ placement = "bottom-end", padding = 12, width, children }) => {
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
        <div className={styles.dropdown}>{children}</div>
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

const Toggle: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { floating, interactions } = useContext(DropdownInnerContext);

  return (
    <div
      ref={floating.refs.setReference}
      className={styles.toggle}
      {...interactions.getReferenceProps()}
    >
      {children}
    </div>
  );
};

const Menu: React.FC<React.PropsWithChildren> = ({ children }) => {
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
        className={styles.menu}
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

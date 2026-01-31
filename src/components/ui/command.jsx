import * as React from "react";
import * as CommandPrimitive from "cmdk";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { cn } from "@/lib/utils.js";

/* ----------------- Command Root ----------------- */
/**
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<typeof CommandPrimitive.Command>>}
 */
const Command = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Command
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className,
    )}
    {...props}
  />
));
Command.displayName = "Command";

/* ----------------- Command Dialog ----------------- */
const CommandDialog = ({ children, ...props }) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">{children}</DialogContent>
    </Dialog>
  );
};

/* ----------------- Command Input ----------------- */
/**
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<typeof CommandPrimitive.Input>>}
 */
const CommandInput = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Input
    ref={ref}
    className={cn(
      "flex h-11 w-full rounded-md bg-transparent py-3 px-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
CommandInput.displayName = "CommandInput";

/* ----------------- Command List ----------------- */
/**
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<typeof CommandPrimitive.List>>}
 */
const CommandList = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));
CommandList.displayName = "CommandList";

/* ----------------- Command Empty ----------------- */
/**
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<typeof CommandPrimitive.Empty>>}
 */
const CommandEmpty = React.forwardRef((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
));
CommandEmpty.displayName = "CommandEmpty";

/* ----------------- Command Group ----------------- */
/**
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<typeof CommandPrimitive.Group>>}
 */
const CommandGroup = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className,
    )}
    {...props}
  />
));
CommandGroup.displayName = "CommandGroup";

/* ----------------- Command Separator ----------------- */
/**
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<typeof CommandPrimitive.Separator>>}
 */
const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
));
CommandSeparator.displayName = "CommandSeparator";

/* ----------------- Command Item ----------------- */
/**
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<typeof CommandPrimitive.Item>>}
 */
const CommandItem = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
      className,
    )}
    {...props}
  />
));
CommandItem.displayName = "CommandItem";

/* ----------------- Command Shortcut ----------------- */
const CommandShortcut = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

/* ----------------- Exports ----------------- */
export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};

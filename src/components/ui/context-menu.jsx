"use client";

import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "@/lib/utils.js";

/* ---------------- Context Menu Root ---------------- */
const ContextMenu = ContextMenuPrimitive.Root;
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
const ContextMenuGroup = ContextMenuPrimitive.Group;
const ContextMenuPortal = ContextMenuPrimitive.Portal;
const ContextMenuSub = ContextMenuPrimitive.Sub;
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

/* ---------------- Context Menu SubTrigger ---------------- */
const ContextMenuSubTrigger = ({ className, inset, children, ...props }) => (
  <ContextMenuPrimitive.SubTrigger
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
);

/* ---------------- Context Menu SubContent ---------------- */
const ContextMenuSubContent = ({ className, ...props }) => (
  <ContextMenuPrimitive.SubContent
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      className
    )}
    {...props}
  />
);

/* ---------------- Context Menu Content ---------------- */
const ContextMenuContent = ({ className, ...props }) => (
  <ContextMenuPrimitive.Content
    className={cn(
      "z-50 min-w-[8rem] max-h-[--radix-context-menu-content-available-height] overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      className
    )}
    {...props}
  />
);

/* ---------------- Context Menu Item ---------------- */
const ContextMenuItem = ({ className, inset, children, ...props }) => (
  <ContextMenuPrimitive.Item
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
  </ContextMenuPrimitive.Item>
);

/* ---------------- Context Menu Checkbox Item ---------------- */
const ContextMenuCheckboxItem = ({ className, children, checked, ...props }) => (
  <ContextMenuPrimitive.CheckboxItem
    checked={checked}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <Check className="absolute left-2 h-4 w-4" />
    {children}
  </ContextMenuPrimitive.CheckboxItem>
);

/* ---------------- Context Menu Radio Item ---------------- */
const ContextMenuRadioItem = ({ className, children, ...props }) => (
  <ContextMenuPrimitive.RadioItem
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <Circle className="absolute left-2 h-4 w-4" />
    {children}
  </ContextMenuPrimitive.RadioItem>
);

/* ---------------- Context Menu Label ---------------- */
const ContextMenuLabel = ({ className, inset, ...props }) => (
  <ContextMenuPrimitive.Label
    className={cn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className)}
    {...props}
  />
);

/* ---------------- Context Menu Separator ---------------- */
const ContextMenuSeparator = ({ className, ...props }) => (
  <ContextMenuPrimitive.Separator
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
);

/* ---------------- Context Menu Shortcut ---------------- */
const ContextMenuShortcut = ({ className, ...props }) => (
  <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />
);

/* ---------------- Exports ---------------- */
export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};

"use client";

import * as React from "react";
import * as CommandPrimitive from "cmdk";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { cn } from "@/lib/utils.js";

/* ----------------- Command Root ----------------- */
const Command = React.forwardRef <
    React.ElementRef < typeof CommandPrimitive.Command >
    React.ComponentPropsWithoutRef < typeof CommandPrimitive.Command >
    (({ className, ...props }, ref) => (
        <CommandPrimitive.Command
            ref={ref}
            className={cn(
                "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
                className
            )}
            {...props}
        />
    ));
Command.displayName = "Command";

/* ----------------- Command Dialog ----------------- */
const CommandDialog = ({
    children,
    ...props
}) => {
    return (
        <Dialog {...props}>
            <DialogContent className="overflow-hidden p-0">
                {children}
            </DialogContent>
        </Dialog>
    );
};

/* ----------------- Command Input ----------------- */
const CommandInput = React.forwardRef <
    React.ElementRef < typeof CommandPrimitive.Input >
    React.ComponentPropsWithoutRef < typeof CommandPrimitive.Input >
    (({ className, ...props }, ref) => (
        <CommandPrimitive.Input
            ref={ref}
            className={cn(
                "flex h-11 w-full rounded-md bg-transparent py-3 px-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}
        />
    ));
CommandInput.displayName = "CommandInput";

/* ----------------- Command List ----------------- */
const CommandList = React.forwardRef <
    React.ElementRef < typeof CommandPrimitive.List >
    React.ComponentPropsWithoutRef < typeof CommandPrimitive.List >
    (({ className, ...props }, ref) => (
        <CommandPrimitive.List
            ref={ref}
            className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
            {...props}
        />
    ));
CommandList.displayName = "CommandList";

/* ----------------- Command Empty ----------------- */
const CommandEmpty = React.forwardRef <
    React.ElementRef < typeof CommandPrimitive.Empty >
    React.ComponentPropsWithoutRef < typeof CommandPrimitive.Empty >
    ((props, ref) => (
        <CommandPrimitive.Empty
            ref={ref}
            className="py-6 text-center text-sm"
            {...props}
        />
    ));
CommandEmpty.displayName = "CommandEmpty";

/* ----------------- Command Group ----------------- */
const CommandGroup = React.forwardRef <
    React.ElementRef < typeof CommandPrimitive.Group >
    React.ComponentPropsWithoutRef < typeof CommandPrimitive.Group >
    (({ className, ...props }, ref) => (
        <CommandPrimitive.Group
            ref={ref}
            className={cn(
                "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
                className
            )}
            {...props}
        />
    ));
CommandGroup.displayName = "CommandGroup";

/* ----------------- Command Separator ----------------- */
const CommandSeparator = React.forwardRef <
    React.ElementRef < typeof CommandPrimitive.Separator >
    React.ComponentPropsWithoutRef < typeof CommandPrimitive.Separator >
    (({ className, ...props }, ref) => (
        <CommandPrimitive.Separator
            ref={ref}
            className={cn("-mx-1 h-px bg-border", className)}
            {...props}
        />
    ));
CommandSeparator.displayName = "CommandSeparator";

/* ----------------- Command Item ----------------- */
const CommandItem = React.forwardRef <
    React.ElementRef < typeof CommandPrimitive.Item >
    React.ComponentPropsWithoutRef < typeof CommandPrimitive.Item >
    (({ className, ...props }, ref) => (
        <CommandPrimitive.Item
            ref={ref}
            className={cn(
                "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
                className
            )}
            {...props}
        />
    ));
CommandItem.displayName = "CommandItem";

/* ----------------- Command Shortcut ----------------- */
const CommandShortcut = ({
    className,
    ...props
}) => {
    return (
        <span
            className={cn(
                "ml-auto text-xs tracking-widest text-muted-foreground",
                className
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

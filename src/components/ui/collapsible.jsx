import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { cn } from "@/lib/utils.js";

/**
 * Collapsible Root
 */
const Collapsible = CollapsiblePrimitive.Root;

/**
 * Collapsible Trigger
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<typeof CollapsiblePrimitive.Trigger>>}
 */
const CollapsibleTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-between w-full rounded-md bg-muted px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
      className,
    )}
    {...props}
  />
));
CollapsibleTrigger.displayName = "CollapsibleTrigger";

/**
 * Collapsible Content
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<typeof CollapsiblePrimitive.Content>>}
 */
const CollapsibleContent = React.forwardRef(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.Content
    ref={ref}
    className={cn("overflow-hidden text-sm text-muted-foreground", className)}
    {...props}
  />
));
CollapsibleContent.displayName = "CollapsibleContent";

export { Collapsible, CollapsibleTrigger, CollapsibleContent };

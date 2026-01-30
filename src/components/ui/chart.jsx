"use client";

import * as React from "react";
import { cn } from "@/lib/utils.js";
import { THEMES, ChartContext, useChart, getPayloadConfigFromPayload } from "./chart-utils"; // helpers moved to chart-utils for fast refresh compatibility

// --- Chart Container ---
export const ChartContainer = React.forwardRef(
  ({ id, className, children, config, ...props }, ref) => {
    const uniqueId = React.useId();
    const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

    return (
      <ChartContext.Provider value={{ config }}>
        <div
          ref={ref}
          data-chart={chartId}
          className={cn(
            "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </ChartContext.Provider>
    );
  }
);
ChartContainer.displayName = "ChartContainer";

// --- Chart Style for Dynamic Colors ---
export const ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config || {}).filter(
    ([, itemConfig]) => itemConfig.theme || itemConfig.color
  );

  if (!colorConfig.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
${THEMES.light} [data-chart=${id}] {
  ${colorConfig
    .map(([key, itemConfig]) => {
      const color = itemConfig.theme?.light || itemConfig.color;
      return color ? `--color-${key}: ${color};` : "";
    })
    .join("\n")}
}
${THEMES.dark} [data-chart=${id}] {
  ${colorConfig
    .map(([key, itemConfig]) => {
      const color = itemConfig.theme?.dark || itemConfig.color;
      return color ? `--color-${key}: ${color};` : "";
    })
    .join("\n")}
}
        `,
      }}
    />
  );
};

// --- Chart Tooltip ---
export const ChartTooltip = () => null; // Placeholder, can be customized using Recharts Tooltip

export const ChartTooltipContent = React.forwardRef(
  (
    {
      active,
      payload,
      className,
      hideLabel = false,
      hideIndicator = false,
      indicator = "dot",
      labelFormatter,
      nameKey,
      color,
      label,
    },
    ref
  ) => {
    const { config } = useChart();

    if (!active || !payload?.length) return null;

    // Compute tooltip label without hooks to avoid conditional hook calls
    let tooltipLabel = null;
    if (!hideLabel && payload?.length) {
      const [item] = payload;
      const value = label || item?.value;
      tooltipLabel = labelFormatter ? labelFormatter(value, payload) : value;
    }

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!hideLabel && tooltipLabel && <div>{tooltipLabel}</div>}
        {payload.map((item, index) => {
          const itemConfig = getPayloadConfigFromPayload(config, item, `${nameKey || item.name || item.dataKey || "value"}`);
          const indicatorColor = color || item.payload?.fill || item.color;

          return (
            <div
              key={item.dataKey || index}
              className={cn(
                "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                indicator === "dot" && "items-center"
              )}
            >
              {!hideIndicator && (
                <div
                  className={cn(
                    "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                    indicator === "dot" ? "h-2.5 w-2.5" : "w-1"
                  )}
                  style={{ "--color-bg": indicatorColor, "--color-border": indicatorColor }}
                />
              )}
              <div className="flex flex-1 justify-between leading-none">
                <span>{itemConfig?.label || item.name}</span>
                <span>{item.value?.toLocaleString()}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltipContent";

// --- Chart Legend ---
export const ChartLegend = () => null; // Placeholder for Recharts Legend

export const ChartLegendContent = React.forwardRef(
  ({ className, payload, hideIcon = false, verticalAlign = "bottom", nameKey }, ref) => {
    const { config } = useChart();
    if (!payload?.length) return null;

    return (
      <div
        ref={ref}
        className={cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "", className)}
      >
        {payload.map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const backgroundColor = itemConfig?.color || item.color;

          return (
            <div
              key={item.value}
              className="flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
            >
              {!hideIcon && (
                <div className="h-2 w-2 shrink-0 rounded-[2px]" style={{ backgroundColor }} />
              )}
              {itemConfig?.label}
            </div>
          );
        })}
      </div>
    );
  }
);
ChartLegendContent.displayName = "ChartLegendContent";



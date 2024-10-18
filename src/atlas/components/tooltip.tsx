import React from "react";
import "./tooltip.css";
import { Path, PathProps } from "./path";
import { AtlasContext } from "../contexts/atlas-context";

export type TooltipProps = {
  coords?: DOMRect;
  title?: string;
  show?: boolean;
} & React.PropsWithChildren;

export type TooltipEvent = {
  coords?: DOMRect;
  title?: string;
  content?: React.ReactNode;
};

// add animations / :before and :after
export const Tooltip = ({
  coords,
  title,
  children,
  show = false,
}: TooltipProps) => {
  const styled: React.CSSProperties = show
    ? {
        top: coords?.top,
        left: coords?.left,
        display: "flex",
        flexDirection: "column",
        opacity: 1,
        visibility: "visible",
      }
    : {
        top: coords?.top,
        left: coords?.left,
        display: "flex",
        flexDirection: "column",
        opacity: 0,
        visibility: "hidden",
      };
  return (
    <div className="hint-content" style={styled}>
      <strong>{title}</strong>
      {typeof children === "string" ? <p>{children}</p> : <>{children}</>}
    </div>
  );
};

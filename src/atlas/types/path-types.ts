import * as React from "react";

export type PathAttrs = {
  d: string;
  id?: string;
  name?: string;
  class?: string;
};

export type PathProps = {
  d?: string;
  id?: string;
  name?: string;
  title?: string;
  content?: React.ReactNode;
  className?: string;
};

export type PathElement = {
  name: string;
  attributes: PathAttrs;
};

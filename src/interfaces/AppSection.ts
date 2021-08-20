import React from "react";

export interface AppSection {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  divider?: boolean;
  component: React.FC | React.LazyExoticComponent<React.FC<any>>;
  props?: React.ComponentProps<any>;
}

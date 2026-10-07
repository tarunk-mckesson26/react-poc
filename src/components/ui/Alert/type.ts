import type React from "react";
import { type VariantProps } from "class-variance-authority";
import { type alertVariants } from "./style";

export type AlertName = "root" | "title" | "description" | "action";

export interface AlertProps
  extends React.ComponentProps<"div">, VariantProps<typeof alertVariants> {
  name?: AlertName;
}

import type React from "react";
import type { Dialog as DialogPrimitive } from "radix-ui";

export type DialogName =
  | "root"
  | "trigger"
  | "portal"
  | "close"
  | "overlay"
  | "content"
  | "placeholder"
  | "header"
  | "title"
  | "description"
  | "footer";

export type DialogProps = {
  name?: DialogName;
  showCloseButton?: boolean;
  className?: string;
  children?: React.ReactNode;
} & (
  | React.ComponentProps<typeof DialogPrimitive.Root>
  | React.ComponentProps<typeof DialogPrimitive.Trigger>
  | React.ComponentProps<typeof DialogPrimitive.Portal>
  | React.ComponentProps<typeof DialogPrimitive.Close>
  | React.ComponentProps<typeof DialogPrimitive.Overlay>
  | React.ComponentProps<typeof DialogPrimitive.Content>
  | React.ComponentProps<typeof DialogPrimitive.Title>
  | React.ComponentProps<typeof DialogPrimitive.Description>
  | React.ComponentProps<"div">
);

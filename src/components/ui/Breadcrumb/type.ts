import type React from "react";
import type { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";

export type BreadcrumbProps = React.ComponentProps<"nav">;

export type BreadcrumbListProps = React.ComponentProps<"ol">;

export type BreadcrumbItemProps = React.ComponentProps<"li">;

export interface BreadcrumbLinkProps extends React.ComponentProps<"a"> {
  asChild?: boolean;
}

export type BreadcrumbPageProps = React.ComponentProps<"span">;

export type BreadcrumbSeparatorProps = React.ComponentProps<"li">;

export type BreadcrumbEllipsisProps = React.ComponentProps<"span">;

export type BreadcrumbDropdownMenuTriggerProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Trigger
>;

export type BreadcrumbDropdownMenuProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Root
>;

export type BreadcrumbDropdownMenuContentProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Content
>;

export type BreadcrumbDropdownMenuGroupProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Group
>;

export type BreadcrumbDropdownMenuItemProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Item
> & {
  inset?: boolean;
  variant?: "default" | "destructive";
};

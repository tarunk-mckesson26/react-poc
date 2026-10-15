import type React from "react";
import type { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";

type BreadcrumbPartProps = {
  root: React.ComponentProps<"nav">;
  List: React.ComponentProps<"ol">;
  Item: React.ComponentProps<"li">;
  Link: React.ComponentProps<"a"> & { asChild?: boolean };
  Page: React.ComponentProps<"span">;
  Separator: React.ComponentProps<"li">;
  Ellipsis: React.ComponentProps<"span">;
  DropdownMenu: React.ComponentProps<typeof DropdownMenuPrimitive.Root>;
  DropdownMenuTrigger: React.ComponentProps<
    typeof DropdownMenuPrimitive.Trigger
  >;
  DropdownMenuContent: React.ComponentProps<
    typeof DropdownMenuPrimitive.Content
  >;
  DropdownMenuGroup: React.ComponentProps<typeof DropdownMenuPrimitive.Group>;
  DropdownMenuItem: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
  };
};

export type BreadcrumbName = keyof BreadcrumbPartProps;

export type BreadcrumbProps = {
  [Part in BreadcrumbName]: Omit<BreadcrumbPartProps[Part], "name"> &
    (Part extends "root" ? { name?: Part } : { name: Part });
}[BreadcrumbName];

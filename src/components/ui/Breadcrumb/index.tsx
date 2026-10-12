import { Slot } from "radix-ui";
import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import { cn } from "cn";
import { clsx } from "@/lib/clsx";

import {
  breadcrumbEllipsisClassName,
  breadcrumbDropdownMenuContentClassName,
  breadcrumbDropdownMenuItemClassName,
  breadcrumbDropdownMenuTriggerClassName,
  breadcrumbItemClassName,
  breadcrumbLinkClassName,
  breadcrumbListClassName,
  breadcrumbPageClassName,
  breadcrumbSeparatorClassName,
} from "./style";

import type {
  BreadcrumbEllipsisProps,
  BreadcrumbDropdownMenuTriggerProps,
  BreadcrumbItemProps,
  BreadcrumbLinkProps,
  BreadcrumbListProps,
  BreadcrumbPageProps,
  BreadcrumbProps,
  BreadcrumbSeparatorProps,
  BreadcrumbDropdownMenuContentProps,
  BreadcrumbDropdownMenuGroupProps,
  BreadcrumbDropdownMenuItemProps,
  BreadcrumbDropdownMenuProps,
} from "./type";

function Breadcrumb({ className, ...props }: BreadcrumbProps) {
  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      className={clsx(className)}
      {...props}
    />
  );
}

function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={clsx(breadcrumbListClassName, className)}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={clsx(breadcrumbItemClassName, className)}
      {...props}
    />
  );
}

function BreadcrumbLink({ asChild, className, ...props }: BreadcrumbLinkProps) {
  const Comp = asChild ? Slot.Root : "a";

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={clsx(breadcrumbLinkClassName, className)}
      {...props}
    />
  );
}

function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={clsx(breadcrumbPageClassName, className)}
      {...props}
    />
  );
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={clsx(breadcrumbSeparatorClassName, className)}
      {...props}
    >
      {children ?? <ChevronRightIcon />}
    </li>
  );
}

function BreadcrumbEllipsis({ className, ...props }: BreadcrumbEllipsisProps) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={clsx(breadcrumbEllipsisClassName, className)}
      {...props}
    >
      <MoreHorizontalIcon />
      <span className="sr-only">More</span>
    </span>
  );
}

function BreadcrumbDropdownMenu({ ...props }: BreadcrumbDropdownMenuProps) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function BreadcrumbDropdownMenuContent({
  className,
  align = "start",
  sideOffset = 4,
  ...props
}: BreadcrumbDropdownMenuContentProps) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        align={align}
        className={cn(breadcrumbDropdownMenuContentClassName, className)}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function BreadcrumbDropdownMenuGroup({
  ...props
}: BreadcrumbDropdownMenuGroupProps) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  );
}

function BreadcrumbDropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: BreadcrumbDropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(breadcrumbDropdownMenuItemClassName, className)}
      {...props}
    />
  );
}

function BreadcrumbDropdownMenuTrigger({
  className,
  ...props
}: BreadcrumbDropdownMenuTriggerProps) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      className={cn(breadcrumbDropdownMenuTriggerClassName, className)}
      {...props}
    />
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  BreadcrumbDropdownMenu,
  BreadcrumbDropdownMenuTrigger,
  BreadcrumbDropdownMenuContent,
  BreadcrumbDropdownMenuGroup,
  BreadcrumbDropdownMenuItem,
};

export type {
  BreadcrumbProps,
  BreadcrumbListProps,
  BreadcrumbItemProps,
  BreadcrumbLinkProps,
  BreadcrumbPageProps,
  BreadcrumbSeparatorProps,
  BreadcrumbEllipsisProps,
  BreadcrumbDropdownMenuProps,
  BreadcrumbDropdownMenuTriggerProps,
  BreadcrumbDropdownMenuContentProps,
  BreadcrumbDropdownMenuGroupProps,
  BreadcrumbDropdownMenuItemProps,
};

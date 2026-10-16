import { Slot, DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";
import { cn } from "cn";
import { clsx } from "@/lib/clsx";
import {
  breadcrumbEllipsisStyles,
  breadcrumbDropdownMenuContentStyles,
  breadcrumbDropdownMenuItemStyles,
  breadcrumbDropdownMenuTriggerStyles,
  breadcrumbItemStyles,
  breadcrumbLinkStyles,
  breadcrumbListStyles,
  breadcrumbPageStyles,
  breadcrumbScreenReaderStyles,
  breadcrumbSeparatorStyles,
} from "./style";
import type { BreadcrumbName, BreadcrumbProps } from "./type";

const breadcrumbSlots = {
  root: "breadcrumb",
  List: "breadcrumb-list",
  Item: "breadcrumb-item",
  Link: "breadcrumb-link",
  Page: "breadcrumb-page",
  Separator: "breadcrumb-separator",
  Ellipsis: "breadcrumb-ellipsis",
  DropdownMenu: "dropdown-menu",
  DropdownMenuTrigger: "dropdown-menu-trigger",
  DropdownMenuContent: "dropdown-menu-content",
  DropdownMenuGroup: "dropdown-menu-group",
  DropdownMenuItem: "dropdown-menu-item",
} satisfies Record<BreadcrumbName, string>;

const Breadcrumb = (props: BreadcrumbProps) => {
  switch (props.name) {
    case "List": {
      const { name, className, ...rest } = props;
      return (
        <ol
          data-slot={breadcrumbSlots[name]}
          className={clsx(breadcrumbListStyles, className)}
          {...rest}
        />
      );
    }
    case "Item": {
      const { name, className, ...rest } = props;
      return (
        <li
          data-slot={breadcrumbSlots[name]}
          className={clsx(breadcrumbItemStyles, className)}
          {...rest}
        />
      );
    }
    case "Link": {
      const { name, asChild, className, ...rest } = props;
      const Comp = asChild ? Slot.Root : "a";
      return (
        <Comp
          data-slot={breadcrumbSlots[name]}
          className={clsx(breadcrumbLinkStyles, className)}
          {...rest}
        />
      );
    }
    case "Page": {
      const { name, className, ...rest } = props;
      return (
        <span
          data-slot={breadcrumbSlots[name]}
          role="link"
          aria-disabled="true"
          aria-current="page"
          tabIndex={0}
          className={clsx(breadcrumbPageStyles, className)}
          {...rest}
        />
      );
    }
    case "Separator": {
      const { name, children, className, ...rest } = props;
      return (
        <li
          data-slot={breadcrumbSlots[name]}
          role="presentation"
          aria-hidden="true"
          className={clsx(breadcrumbSeparatorStyles, className)}
          {...rest}
        >
          {children ?? <ChevronRightIcon />}
        </li>
      );
    }
    case "Ellipsis": {
      const { name, className, ...rest } = props;
      return (
        <span
          data-slot={breadcrumbSlots[name]}
          role="presentation"
          aria-hidden="true"
          className={clsx(breadcrumbEllipsisStyles, className)}
          {...rest}
        >
          <MoreHorizontalIcon />
          <span className={breadcrumbScreenReaderStyles}>More</span>
        </span>
      );
    }
    case "DropdownMenu": {
      const { name, ...rest } = props;
      return (
        <DropdownMenuPrimitive.Root
          data-slot={breadcrumbSlots[name]}
          {...rest}
        />
      );
    }
    case "DropdownMenuTrigger": {
      const { name, className, ...rest } = props;
      return (
        <DropdownMenuPrimitive.Trigger
          data-slot={breadcrumbSlots[name]}
          className={cn(breadcrumbDropdownMenuTriggerStyles, className)}
          {...rest}
        />
      );
    }
    case "DropdownMenuContent": {
      const {
        name,
        className,
        align = "start",
        sideOffset = 4,
        ...rest
      } = props;
      return (
        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content
            data-slot={breadcrumbSlots[name]}
            sideOffset={sideOffset}
            align={align}
            className={cn(breadcrumbDropdownMenuContentStyles, className)}
            {...rest}
          />
        </DropdownMenuPrimitive.Portal>
      );
    }
    case "DropdownMenuGroup": {
      const { name, ...rest } = props;
      return (
        <DropdownMenuPrimitive.Group
          data-slot={breadcrumbSlots[name]}
          {...rest}
        />
      );
    }
    case "DropdownMenuItem": {
      const { name, className, inset, variant = "default", ...rest } = props;
      return (
        <DropdownMenuPrimitive.Item
          data-slot={breadcrumbSlots[name]}
          data-inset={inset}
          data-variant={variant}
          className={cn(breadcrumbDropdownMenuItemStyles, className)}
          {...rest}
        />
      );
    }
    default: {
      const { name = "root", className, ...rest } = props;
      return (
        <nav
          aria-label="breadcrumb"
          data-slot={breadcrumbSlots[name]}
          className={clsx(className)}
          {...rest}
        />
      );
    }
  }
};

export { Breadcrumb };
export type { BreadcrumbName, BreadcrumbProps } from "./type";

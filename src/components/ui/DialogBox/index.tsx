import type React from "react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { XIcon } from "lucide-react";
import { clsx } from "@/lib/clsx";
import {
  dialogIconCloseStyles,
  dialogPlaceholderStyles,
  dialogStyles,
} from "./style";
import type { DialogProps } from "./type";

const Dialog = ({
  name = "root",
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogProps) => {
  const partClassName = clsx(dialogStyles[name], className);

  switch (name) {
    case "trigger":
      return (
        <DialogPrimitive.Trigger
          data-slot="dialog-trigger"
          className={partClassName}
          {...(props as React.ComponentProps<typeof DialogPrimitive.Trigger>)}
        >
          {children}
        </DialogPrimitive.Trigger>
      );
    case "portal":
      return (
        <DialogPrimitive.Portal
          data-slot="dialog-portal"
          {...(props as React.ComponentProps<typeof DialogPrimitive.Portal>)}
        >
          {children}
        </DialogPrimitive.Portal>
      );
    case "close":
      return (
        <DialogPrimitive.Close
          data-slot="dialog-close"
          className={partClassName}
          {...(props as React.ComponentProps<typeof DialogPrimitive.Close>)}
        >
          {children}
        </DialogPrimitive.Close>
      );
    case "overlay":
      return (
        <DialogPrimitive.Overlay
          data-slot="dialog-overlay"
          className={partClassName}
          {...(props as React.ComponentProps<typeof DialogPrimitive.Overlay>)}
        />
      );
    case "content":
      return (
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay
            data-slot="dialog-overlay"
            className={dialogStyles.overlay}
          />
          <DialogPrimitive.Content
            data-slot="dialog-content"
            className={partClassName}
            {...(props as React.ComponentProps<typeof DialogPrimitive.Content>)}
          >
            {children}
            {showCloseButton && (
              <DialogPrimitive.Close
                data-slot="dialog-close"
                className={dialogIconCloseStyles}
                aria-label="Close dialog"
              >
                <XIcon size={16} aria-hidden="true" />
              </DialogPrimitive.Close>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      );
    case "placeholder":
      return (
        <div className="px-6 pb-6">
          <div
            data-slot="dialog-placeholder"
            className={clsx(dialogPlaceholderStyles, className)}
            {...(props as React.HTMLAttributes<HTMLDivElement>)}
          >
            {children}
          </div>
        </div>
      );
    case "header":
      return (
        <div
          data-slot="dialog-header"
          className={partClassName}
          {...(props as React.HTMLAttributes<HTMLDivElement>)}
        >
          {children}
        </div>
      );
    case "title":
      return (
        <DialogPrimitive.Title
          data-slot="dialog-title"
          className={partClassName}
          {...(props as React.ComponentProps<typeof DialogPrimitive.Title>)}
        >
          {children}
        </DialogPrimitive.Title>
      );
    case "description":
      return (
        <DialogPrimitive.Description
          data-slot="dialog-description"
          className={partClassName}
          {...(props as React.ComponentProps<
            typeof DialogPrimitive.Description
          >)}
        >
          {children}
        </DialogPrimitive.Description>
      );
    case "footer":
      return (
        <div
          data-slot="dialog-footer"
          className={partClassName}
          {...(props as React.HTMLAttributes<HTMLDivElement>)}
        >
          {children}
        </div>
      );
    default:
      return (
        <DialogPrimitive.Root
          data-slot="dialog"
          {...(props as React.ComponentProps<typeof DialogPrimitive.Root>)}
        >
          {children}
        </DialogPrimitive.Root>
      );
  }
};

export { Dialog };
export type { DialogName, DialogProps } from "./type";

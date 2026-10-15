import { cva } from "class-variance-authority"
import type { ButtonVariant } from "./type"

/**
 * Button style variants using CVA (Class Variance Authority)
 * 
 * CVA allows us to define semantic button styles with multiple variants (visual style)
 * and sizes while keeping Tailwind classes organized and maintainable.
 * This approach ensures consistency across the app and makes it easy to add new variants.
 */

const buttonTextStyles="text-[14px] leading-5";
const buttonSvgStyles=" [&>img]:size-4 [&>svg]:size-4";
const buttonTextPressedStyle="active:text-primary-pressed aria-pressed:text-primary-pressed";
const buttonFocusStyles="focus-visible:shadow-[0_0_0_3px_rgba(0,90,140,0.2)]";

/** Forces the hover look in galleries/docs where the button can't actually be hovered. */
// To be deleted once we move to actual repo
export const buttonHoverPreviewStyles: Record<ButtonVariant, string> = {
  primary: "opacity-80 bg-primary-hover",
  secondary: "opacity-80 bg-secondary-hover",
  destructive: "opacity-80",
  tertiary: "opacity-80 bg-accent",
  ghost: "opacity-80 bg-accent",
  link: "opacity-80 underline",
}

/** Forces the focus-visible look in galleries/docs where the button can't actually hold focus. */
// To be deleted once we move to actual repo
export const buttonFocusPreviewStyles: Record<ButtonVariant, string> = {
  primary: "shadow-[0_0_0_3px_rgba(0,90,140,0.2)]",
  secondary: "shadow-[0_0_0_3px_rgba(0,90,140,0.2)]",
  destructive: "shadow-[0_0_0_3px_rgba(220,38,38,0.2)]",
  tertiary: "shadow-[0_0_0_3px_rgba(0,90,140,0.2)]",
  ghost: "",
  link: "",
}

export const buttonVariants = cva(
  "rounded-full font-medium cursor-pointer transition-all duration-200 hover:opacity-80 focus:outline-none disabled:opacity-50 disabled:pointer-events-none data-[loading=true]:opacity-50 active:opacity-100 aria-pressed:opacity-100 [&>img]:mx-auto [&>svg]:mx-auto",
  {
    variants: {
      variant: {
        primary: `bg-primary text-primary-foreground border-[1px] border-primary hover:bg-primary-hover focus-visible:shadow-[0_0_0_3px_rgba(0,90,140,0.2)] active:bg-primary-pressed aria-pressed:bg-primary-pressed ${buttonFocusStyles}`,
        secondary:
          `text-primary border-[1px] border-primary hover:bg-secondary-hover ${buttonFocusStyles} ${buttonTextPressedStyle}`,
        destructive:
          `bg-destructive text-primary-foreground border-[1px] border-destructive focus-visible:shadow-[0_0_0_3px_rgba(220,38,38,0.2)] active:bg-destructive-pressed aria-pressed:bg-destructive-pressed`,
        tertiary:
          `text-primary border-[1px] border-border hover:bg-accent active:border-border-pressed aria-pressed:border-border-pressed ${buttonFocusStyles} ${buttonTextPressedStyle}`,
        ghost:
          `text-primary hover:bg-accent ${buttonTextPressedStyle}`,
        link: `text-primary hover:underline active:underline aria-pressed:underline ${buttonTextPressedStyle}`,
      },
      size: {
        xs:
          "px-2 text-[12px] leading-4 py-[3px]",
        default: `h-9 px-3.5 ${buttonTextStyles}`,
        sm: "px-3 text-[12px] leading-4 py-[7px]",
        lg: `px-4 py-[9px] ${buttonTextStyles}`,
        icon: `p-0 size-9 ${buttonSvgStyles}`,
        "icon-xs": "p-0 size-6 [&>img]:size-3 [&>svg]:size-3",
        "icon-sm":
          `p-0 size-8 ${buttonSvgStyles}`,
        "icon-lg": `p-0 size-10 ${buttonSvgStyles}`,
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

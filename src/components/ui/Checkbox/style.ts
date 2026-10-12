import { cva } from "class-variance-authority"

export const checkboxFocusPreviewStyles =
  "border-checkbox-focus-ring! shadow-[0_0_0_4px_rgba(10,95,188,0.2)]"
export const checkboxPressedPreviewStyles =
  "checked:brightness-90 not-checked:border-slate-400"

const checkboxCheckedBoxBorderStyles =
  "has-[:checked]:border-transparent has-[:checked]:[background:linear-gradient(var(--checkbox-card-checked-bgColor,rgba(23,23,23,0.05)),var(--checkbox-card-checked-bgColor,rgba(23,23,23,0.05)))_padding-box,linear-gradient(white,white)_padding-box,linear-gradient(0deg,var(--custom-alpha-30-dark-alpha-20,rgba(255,255,255,0.7)),var(--custom-alpha-30-dark-alpha-20,rgba(255,255,255,0.7)))_border-box,linear-gradient(0deg,var(--base-primary,#0A5FBC),var(--base-primary,#0A5FBC))_border-box] has-[[aria-invalid=true]]:[background-image:none]"

export const checkboxIndicatorVariants = cva(
  "appearance-none shrink-0 rounded-checkbox border border-checkbox-unchecked-border bg-checkbox-unchecked-bg shadow-xs outline-none transition-all duration-200 focus-visible:shadow-[0_0_0_4px_rgba(10,95,188,0.2)] checked:border-checkbox-checked-border checked:bg-checkbox-checked-bg checked:active:brightness-90 not-checked:active:border-slate-400 aria-invalid:border-checkbox-invalid-border! aria-invalid:shadow-[0_0_0_4px_rgba(239,68,68,0.2)] disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        default: "h-4 w-4",
        sm: "h-3.5 w-3.5",
        lg: "h-5 w-5",
      },
    },
    defaultVariants: { size: "default" },
  }
)

/** Checkbox container variants - card backgrounds react to the nested indicator via `has-*`. */
export const checkboxContainerVariants = cva(
  "flex w-fit min-h-6 select-none items-start gap-2 rounded-md transition-all duration-200 has-[:disabled]:opacity-50",
  {
    variants: {
      variant: {
        default: "border-0 bg-transparent min-h-10",
        card: `min-h-[60px] border border-slate-200 bg-white p-3 ${checkboxCheckedBoxBorderStyles} has-[[aria-invalid=true]]:border-checkbox-invalid-border! has-[[aria-invalid=true]]:bg-red-50 has-[[aria-invalid=true]]:shadow-sm sm:p-4`,
      },
      align: {
        // both hug content width; order-1/order-2 (applied in index.tsx) flips box/label visual position.
        start: "",
        end: "",
      },
    },
    defaultVariants: { variant: "default", align: "start" },
  }
)

/** Label/description text styles - no variants needed, so plain strings instead of cva. */
export const checkboxLabelVariants =
  "font-sans text-sm font-medium leading-none tracking-normal text-checkbox-checked-label break-words group-aria-invalid:text-checkbox-invalid-label"
export const checkboxDescriptionVariants =
  "font-sans text-sm leading-5 font-normal tracking-normal text-checkbox-description break-words"

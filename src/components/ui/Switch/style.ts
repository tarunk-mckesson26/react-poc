import { cva } from "class-variance-authority"

export const switchControlVariants = cva("relative mt-0.5 flex shrink-0", {
  variants: {
    align: {
      start: "order-1",
      end: "order-2",
    },
  },
  defaultVariants: { align: "start" },
})

export const switchTextVariants = cva("flex min-w-0 flex-1 flex-col gap-1", {
  variants: {
    align: {
      start: "order-2",
      end: "order-1",
    },
  },
  defaultVariants: { align: "start" },
})

export const switchErrorStyles = "text-xs text-red-600"

export const switchTrackVariants = cva(
  "peer block box-border shrink-0 appearance-none cursor-pointer rounded-full border-2 border-[var(--switch-off-borderColor,#FFFFFF)] px-px bg-[var(--switch-off-bgColor,#A3A3A3)] outline-none transition-colors checked:border-0 checked:bg-[var(--switch-on-bgColor,#0A5FBC)] focus-visible:border! focus-visible:border-[var(--switch-focus-ringColor,#A3A3A3)] focus-visible:shadow-[0_0_0_4px_var(--switch-focus-ringColor,rgba(10,95,188,0.2))] aria-invalid:border-2 aria-invalid:border-[var(--base-destructive,#DC2626)] aria-invalid:shadow-[0px_0px_0px_3px_var(--customdestructive-20-dark-destructive-40,rgba(255,59,77,0.2))] checked:aria-invalid:border checked:aria-invalid:border-[var(--base-destructive,#DC2626)] disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        default: "h-[18.4px] w-8",
        sm: "h-[14px] w-6",
        lg: "h-6 w-11",
      },
      state: {
        default: "",
        focus: "border! border-[var(--switch-focus-ringColor,#A3A3A3)] shadow-[0_0_0_4px_var(--switch-focus-ringColor,rgba(10,95,188,0.2))]",
        invalid: "",
        disabled: "",
      },
    },
    defaultVariants: { size: "default", state: "default" },
  }
)

/** Switch thumb (the moving knob) style variants using CVA. */
export const switchThumbVariants = cva(
  "pointer-events-none absolute left-px top-1/2 z-10 block -translate-y-1/2 rounded-full bg-[var(--switch-thumb-bgColor,#FFFFFF)] shadow transition-transform",
  {
    variants: {
      size: {
        default: "size-4 peer-checked:translate-x-[14px]",
        sm: "size-3 peer-checked:translate-x-[10px]",
        lg: "size-5 peer-checked:translate-x-[22px]",
      },
    },
    defaultVariants: { size: "default" },
  }
)

/**
 * Switch container (label wrapper) style variants using CVA.
 * `align="end"` visually moves the switch after the text via flex `order`
 * while the switch stays first in the DOM, so `peer-*` selectors keep working.
 */
export const switchContainerVariants = cva(
  "group flex w-full max-w-[312px] min-h-[42px] select-none items-start gap-2 rounded-lg transition-all duration-200 has-[:disabled]:opacity-50",
  {
    variants: {
      variant: {
        default: "border-0 bg-transparent",
        card: "border border-border bg-white p-3 has-[:checked]:border-transparent has-[:checked]:[background:linear-gradient(var(--checkbox-card-checked-bgColor,rgba(23,23,23,0.05)),var(--checkbox-card-checked-bgColor,rgba(23,23,23,0.05)))_padding-box,linear-gradient(white,white)_padding-box,linear-gradient(0deg,var(--custom-alpha-30-dark-alpha-20,rgba(255,255,255,0.7)),var(--custom-alpha-30-dark-alpha-20,rgba(255,255,255,0.7)))_border-box,linear-gradient(0deg,var(--base-primary,#0A5FBC),var(--base-primary,#0A5FBC))_border-box] has-[:checked]:has-[[aria-invalid=true]]:border-[var(--base-destructive,#DC2626)] has-[:checked]:has-[[aria-invalid=true]]:bg-[var(--custom-destructive-10-dark-destructive-20,#DC26261A)] has-[:checked]:has-[[aria-invalid=true]]:[background-image:none] sm:p-4",
      },
      size: {
        default: "",
        sm: "max-w-[304px] min-h-[36px]",
        lg: "",
      },
      align: {
        start: "",
        end: "w-full justify-between",
      },
    },
    defaultVariants: { variant: "default", align: "start" },
  }
)

/** Label/description text styles - no variants needed, so plain strings instead of cva. */
export const switchLabelVariants =
  "font-sans text-sm font-medium leading-5 tracking-normal text-[var(--switch-label-textColor,#333333)] break-words group-aria-invalid:text-[var(--switch-invalid-label-textColor,#DC2626)]"
export const switchDescriptionVariants =
  "font-sans text-sm font-normal leading-5 tracking-normal text-[var(--switch-description-textColor,#737373)] break-words"

import { cva } from "class-variance-authority"

/**
 * Input styling tokens and CVA variants.
 *
 * States are expressed with native selectors so the component stays
 * uncontrolled-friendly:
 * - default  → resting state (empty)
 * - focus    → `focus-visible:`
 * - filled   → `data-filled:` (set by the component for text and file inputs)
 * - disabled → `disabled:`
 * - invalid  → `aria-invalid:` (plus `aria-invalid:data-filled:` for invalid + filled)
 */

const inputFocusRing = "focus-visible:shadow-[0_0_0_3px_rgba(0,90,140,0.2)]"
const inputInvalidRing = "aria-invalid:focus-visible:shadow-[0_0_0_3px_rgba(220,38,38,0.2)]"

/** Forces the focus look in galleries/docs where the field can't actually hold focus; bare has none by design. */
export const inputFocusPreviewStyles: Record<"default" | "bare", string> = {
  default: "border-breadcrumb-link shadow-[0_0_0_3px_rgba(10,95,188,0.2)]",
  bare: "",
}

const inputBaseClass =
  "w-full min-w-0 bg-transparent text-sm leading-5 text-muted-foreground transition-colors outline-none placeholder:text-muted-foreground text-[14px] leading-5 data-filled:text-text disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:data-filled:text-destructive"

// Hiding the ::file-selector-button once filled leaves only the browser's filename text visible
const inputFileButtonClass =
  "py-auto file:mr-1 file:inline-flex file:cursor-pointer file:bg-transparent file:text-[14px] file:font-medium file:leading-5 disabled:file:pointer-events-none aria-invalid:file:border-destructive data-filled:file:hidden"

export const inputVariants = cva(inputBaseClass, {
  variants: {
    variant: {
      default: `h-8 rounded-[10px] border border-input px-2.5 focus-visible:border-primary ${inputFocusRing} data-filled:border-border-pressed disabled:border-ring disabled:bg-accent aria-invalid:border-destructive ${inputInvalidRing}`,
      bare: `h-8 border-0 px-0 shadow-none outline-none aria-invalid:text-destructive`,
    },
    type: {
      default: "",
      password: "data-filled:tracking-[0.2em] placeholder:tracking-normal",
      file: `py-1.5 ${inputFileButtonClass}`,
    },
  },
  defaultVariants: {
    variant: "default",
    type: "default",
  },
})

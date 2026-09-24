import { cva } from "class-variance-authority"

/** Spinner style variants using CVA - size controls the icon dimensions. */
export const spinnerVariants = cva("animate-spin text-slate-400", {
  variants: {
    size: {
      3: "size-3",
      4: "size-4",
      5: "size-5",
      6: "size-6",
      8: "size-8",
    },
  },
  defaultVariants: { size: 5 },
})

import { cva } from "class-variance-authority"

/**
 * Pagination styling using CVA
 * Layout classes are kept small; the interactive item styling is delegated to
 * the shared Button component (via PaginationLink) to stay visually consistent.
 */

export const paginationNavClass = "mx-auto flex w-full justify-center"

export const paginationContentClass = "flex items-center gap-0.5"

export const paginationEllipsisClass =
  "flex size-8 items-center justify-center [&_svg:not([class*='size-'])]:size-4"

export const paginationLinkVariants = cva("", {
  variants: {
    isActive: {
      true: "",
      false: "",
    },
  },
  defaultVariants: {
    isActive: false,
  },
})

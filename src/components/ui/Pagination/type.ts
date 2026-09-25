import type React from "react"
import type { Button } from "@/components/ui/Button"

/**
 * Centralized type definitions for Pagination components
 */

export type PaginationProps = React.ComponentProps<"nav">

export type PaginationContentProps = React.ComponentProps<"ul">

export type PaginationItemProps = React.ComponentProps<"li">

export type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">

export type PaginationPreviousProps = PaginationLinkProps & { text?: string }

export type PaginationNextProps = PaginationLinkProps & { text?: string }

export type PaginationEllipsisProps = React.ComponentProps<"span">

/**
 * Props for the composed `PaginationComponent` wrapper.
 * Consumers only need to pass totals and the active page — the wrapper
 * computes the page range (with ellipsis) and wires up next/prev handlers.
 */
export interface PaginationComponentProps {
  /** Total number of records across all pages */
  totalItems: number
  /** Number of records rendered per page */
  itemsPerPage: number
  /** Current active page (1-based) */
  currentPage: number
  /** Callback fired when the user selects any page (including via next/prev) */
  onPageChange: (page: number) => void
  /** Optional callback fired specifically when the "Next" control is used */
  onNext?: (page: number) => void
  /** Optional callback fired specifically when the "Previous" control is used */
  onPrevious?: (page: number) => void
  /** Number of page buttons to show on each side of the current page */
  siblingCount?: number
  /** Hide the component entirely when there is only a single page */
  hideOnSinglePage?: boolean
  /** Custom label for the previous button */
  previousLabel?: string
  /** Custom label for the next button */
  nextLabel?: string
  /** Custom className applied to the outer nav element */
  className?: string
}

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./pagination"
import type { PaginationComponentProps } from "./type"

/**
 * Build the list of page tokens to render for the current pagination state.
 * Returns page numbers interleaved with the string "ellipsis" where a gap
 * should be shown. Always keeps the first and last page visible.
 */
function getPaginationRange(
  currentPage: number,
  totalPages: number,
  siblingCount: number
): (number | "ellipsis")[] {
  // first + last + current + 2 * siblings + 2 ellipsis slots
  const totalPageNumbers = siblingCount * 2 + 5

  if (totalPages <= totalPageNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const leftSibling = Math.max(currentPage - siblingCount, 1)
  const rightSibling = Math.min(currentPage + siblingCount, totalPages)

  const showLeftEllipsis = leftSibling > 2
  const showRightEllipsis = rightSibling < totalPages - 1

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftItemCount = 3 + 2 * siblingCount
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1)
    return [...leftRange, "ellipsis", totalPages]
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightItemCount = 3 + 2 * siblingCount
    const rightRange = Array.from(
      { length: rightItemCount },
      (_, i) => totalPages - rightItemCount + 1 + i
    )
    return [1, "ellipsis", ...rightRange]
  }

  const middleRange = Array.from(
    { length: rightSibling - leftSibling + 1 },
    (_, i) => leftSibling + i
  )
  return [1, "ellipsis", ...middleRange, "ellipsis", totalPages]
}

/**
 * Dynamic Pagination wrapper.
 *
 * Given the total number of records, page size, and current page, it renders
 * the previous/next controls together with a compact numbered range that
 * collapses to ellipses for large page counts. Consumers control the active
 * page via `currentPage` + `onPageChange` (fully controlled).
 */
function PaginationComponent({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onNext,
  onPrevious,
  siblingCount = 1,
  hideOnSinglePage = false,
  previousLabel = "Previous",
  nextLabel = "Next",
  className,
}: PaginationComponentProps) {
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage))
  const safeCurrent = Math.min(Math.max(currentPage, 1), totalPages)

  if (hideOnSinglePage && totalPages <= 1) {
    return null
  }

  const range = getPaginationRange(safeCurrent, totalPages, siblingCount)
  const isFirstPage = safeCurrent <= 1
  const isLastPage = safeCurrent >= totalPages

  const goToPage = (page: number) => {
    const next = Math.min(Math.max(page, 1), totalPages)
    if (next === safeCurrent) return
    onPageChange(next)
  }

  const handlePrevious = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (isFirstPage) return
    const next = safeCurrent - 1
    onPrevious?.(next)
    goToPage(next)
  }

  const handleNext = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (isLastPage) return
    const next = safeCurrent + 1
    onNext?.(next)
    goToPage(next)
  }

  const handleSelect =
    (page: number) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      goToPage(page)
    }

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            text={previousLabel}
            aria-disabled={isFirstPage}
            data-disabled={isFirstPage ? "" : undefined}
            tabIndex={isFirstPage ? -1 : undefined}
            onClick={handlePrevious}
          />
        </PaginationItem>

        {range.map((token, index) =>
          token === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={token}>
              <PaginationLink
                href="#"
                isActive={token === safeCurrent}
                onClick={handleSelect(token)}
              >
                {token}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            text={nextLabel}
            aria-disabled={isLastPage}
            data-disabled={isLastPage ? "" : undefined}
            tabIndex={isLastPage ? -1 : undefined}
            onClick={handleNext}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export {
  PaginationComponent,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
export type { PaginationComponentProps } from "./type"

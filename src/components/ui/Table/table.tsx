import { cn } from "cn"
import {
  tableBodyClass,
  tableCaptionClass,
  tableCellClass,
  tableClass,
  tableContainerClass,
  tableFooterClass,
  tableHeadClass,
  tableHeaderClass,
  tableRowClass,
} from "./style"

import type {
  TableBodyProps,
  TableCaptionProps,
  TableCellProps,
  TableFooterProps,
  TableHeadProps,
  TableHeaderProps,
  TableProps,
  TableRowProps,
} from "./type"

function Table({ className, ...props }: TableProps) {
  return (
    <div data-slot="table-container" className={tableContainerClass}>
      <table
        data-slot="table"
        className={cn(tableClass, className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: TableHeaderProps) {
  return (
    <thead
      data-slot="table-header"
      className={cn(tableHeaderClass, className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: TableBodyProps) {
  return (
    <tbody
      data-slot="table-body"
      className={cn(tableBodyClass, className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: TableFooterProps) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(tableFooterClass, className)}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: TableRowProps) {
  return (
    <tr
      data-slot="table-row"
      className={cn(tableRowClass, className)}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: TableHeadProps) {
  return (
    <th
      data-slot="table-head"
      className={cn(tableHeadClass, className)}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: TableCellProps) {
  return (
    <td
      data-slot="table-cell"
      className={cn(tableCellClass, className)}
      {...props}
    />
  )
}

function TableCaption({ className, ...props }: TableCaptionProps) {
  return (
    <caption
      data-slot="table-caption"
      className={cn(tableCaptionClass, className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
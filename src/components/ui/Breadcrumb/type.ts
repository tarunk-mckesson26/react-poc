import type React from "react"

export type BreadcrumbProps = React.ComponentProps<"nav">

export type BreadcrumbListProps = React.ComponentProps<"ol">

export type BreadcrumbItemProps = React.ComponentProps<"li">

export interface BreadcrumbLinkProps extends React.ComponentProps<"a"> {
  asChild?: boolean
}

export type BreadcrumbPageProps = React.ComponentProps<"span">

export type BreadcrumbSeparatorProps = React.ComponentProps<"li">

export type BreadcrumbEllipsisProps = React.ComponentProps<"span">
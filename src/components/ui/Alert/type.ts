import type React from "react"
import type { VariantProps } from "class-variance-authority"
import type { alertVariants } from "./alert"

export interface AlertProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof alertVariants> {}

export type AlertTitleProps = React.ComponentProps<"div">

export type AlertDescriptionProps = React.ComponentProps<"div">

export type AlertActionProps = React.ComponentProps<"div">
import { cva } from "class-variance-authority";

const alertTextStyles =
  "font-sans text-sm not-italic leading-5 tracking-normal";
const alertLinkStyles =
  "[&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground";

export const alertTitleStyles = `${alertTextStyles} font-medium text-inherit group-has-[>svg]/alert:col-start-2 ${alertLinkStyles}`;

export const alertDescriptionStyles = `${alertTextStyles} font-normal text-[color:var(--alert-description-color,var(--alert-description-textColor,--theme(--color-text)))] text-balance md:text-pretty ${alertLinkStyles} [&_p:not(:last-child)]:mb-4`;

export const alertActionStyles = "absolute top-2 right-2";

const alertInfoStyles =
  "border-[color:var(--alert-alert-borderColor,--theme(--color-warning-border))] bg-[color:var(--alert-alert-bgColor,--theme(--color-warning))] text-[color:var(--alert-alert-title-textColor,--theme(--color-warning-foreground))] [--alert-description-color:var(--alert-description-textColor,--theme(--color-text))]";

export const alertVariants = cva(
  "group/alert relative grid min-h-14.5 w-full max-w-158.5 gap-x-2 gap-y-px rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: alertInfoStyles,
        info: alertInfoStyles,
        alert:
          "border-[color:var(--alert-error-borderColor,--theme(--color-error-border))] bg-[color:var(--alert-error-bgColor,--theme(--color-error))] text-[color:var(--alert-error-title-textColor,--theme(--color-error-foreground))] [--alert-description-color:var(--alert-description-textColor,--theme(--color-text))]",
        error:
          "border-[color:var(--alert-info-borderColor,--theme(--color-info-border))] bg-[color:var(--alert-info-bgColor,--theme(--color-info))] text-[color:var(--alert-info-title-textColor,--theme(--color-info-foreground))] [--alert-description-color:var(--alert-description-textColor,--theme(--color-text))]",
        success:
          "border-[color:var(--Green-100,--theme(--color-success-border))] bg-[color:var(--Semantic-Success50,--theme(--color-success))] text-[color:var(--Semantic-Success900,--theme(--color-success-foreground))] [--alert-description-color:var(--Semantic-Success900,--theme(--color-success-foreground))]",
        "success-strong":
          "border-[color:var(--base-success,--theme(--color-success-strong))] bg-[color:var(--base-success,--theme(--color-success-strong))] text-[color:var(--base-success-foreground,--theme(--color-success-strong-foreground))] [--alert-description-color:var(--base-success-foreground,--theme(--color-success-strong-foreground))]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

import { cva } from "class-variance-authority";

const alertTextStyles =
  "font-sans text-sm not-italic leading-5 tracking-normal";
const alertLinkStyles =
  "[&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground";

export const alertTitleStyles = `${alertTextStyles} font-medium text-inherit group-has-[>svg]/alert:col-start-2 ${alertLinkStyles}`;

export const alertDescriptionStyles = `${alertTextStyles} font-normal text-[color:var(--alert-description-color,var(--text))] text-balance md:text-pretty ${alertLinkStyles} [&_p:not(:last-child)]:mb-4`;

export const alertActionStyles = "absolute top-2 right-2";
export const alertCloseButtonStyles = `${alertActionStyles} rounded-sm p-1 text-current hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current`;
export const alertPartStyles = {
  title: alertTitleStyles,
  description: alertDescriptionStyles,
  action: alertActionStyles,
};

const errorPaletteStyles =
  "border-[color:var(--error-border)] bg-[color:var(--error-bg)] text-[color:var(--error-foreground)]";

export const alertVariants = cva(
  "group/alert relative grid min-h-14.5 w-full max-w-158.5 gap-x-2 gap-y-px rounded-lg border px-2.5 py-2 text-left text-sm [--alert-description-color:var(--text)] has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: errorPaletteStyles,
        info: errorPaletteStyles,
        alert:
          "border-[color:var(--warning-border)] bg-[color:var(--warning-bg)] text-[color:var(--warning-foreground)]",
        error:
          "border-[color:var(--info-border)] bg-[color:var(--info-bg)] text-[color:var(--info-foreground)]",
        success:
          "border-[color:var(--Green-100)] bg-[color:var(--Semantic-Success50)] text-[color:var(--Semantic-Success900)] [--alert-description-color:var(--Semantic-Success900)]",
        "success-strong":
          "border-[color:var(--base-success)] bg-[color:var(--base-success)] text-[color:var(--base-success-foreground)] [--alert-description-color:var(--base-success-foreground)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

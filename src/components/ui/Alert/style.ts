import { cva } from "class-variance-authority";

const alertTextStyles =
  "font-sans text-sm not-italic leading-5 tracking-normal";
const alertLinkStyles =
  "[&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground";

export const alertTitleStyles = `${alertTextStyles} font-medium text-inherit group-has-[>svg]/alert:col-start-2 ${alertLinkStyles}`;

export const alertDescriptionStyles = `${alertTextStyles} font-normal text-[color:var(--alert-description-color,var(--alert-description-textColor,#333333))] text-balance md:text-pretty ${alertLinkStyles} [&_p:not(:last-child)]:mb-4`;

export const alertActionStyles = "absolute top-2 right-2";

const alertInfoStyles =
  "border-[color:var(--alert-alert-borderColor,#FDE68A)] bg-[color:var(--alert-alert-bgColor,#FFFBEB)] text-[color:var(--alert-alert-title-textColor,#92400E)] [--alert-description-color:var(--alert-description-textColor,#333333)]";

export const alertVariants = cva(
  "group/alert relative grid min-h-[58px] w-full max-w-[634px] gap-x-2 gap-y-px rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: alertInfoStyles,
        info: alertInfoStyles,
        alert:
          "border-[color:var(--alert-error-borderColor,#FECACA)] bg-[color:var(--alert-error-bgColor,#FEF2F2)] text-[color:var(--alert-error-title-textColor,#991B1B)] [--alert-description-color:var(--alert-description-textColor,#333333)]",
        error:
          "border-[color:var(--alert-info-borderColor,#B3CDEA)] bg-[color:var(--alert-info-bgColor,#E7EFF8)] text-[color:var(--alert-info-title-textColor,#063467)] [--alert-description-color:var(--alert-description-textColor,#333333)]",
        success:
          "border-[color:var(--Green-100,#B0D9C8)] bg-[color:var(--Semantic-Success50,#E6F3ED)] text-[color:var(--Semantic-Success900,#00492B)] [--alert-description-color:var(--Semantic-Success900,#00492B)]",
        "success-strong":
          "border-[color:var(--base-success,#007948)] bg-[color:var(--base-success,#007948)] text-[color:var(--base-success-foreground,#FFFFFF)] [--alert-description-color:var(--base-success-foreground,#FFFFFF)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

import { cva } from "class-variance-authority";

const badgeContentStyles =
  "rounded-[6px] px-[6px] py-[2px] font-sans font-medium text-xs leading-4 tracking-normal";
const badgeFocusStyles =
  "focus:outline-none focus:[box-shadow:inset_0_0_0_1px_color-mix(in_srgb,var(--ring)_50%,transparent),0_0_0_1px_var(--background),0_0_0_2px_color-mix(in_srgb,var(--ring)_50%,transparent),0_0_0_6px_color-mix(in_srgb,var(--primary)_20%,transparent)]";
const badgeSubtleFocusStyles =
  "focus:outline-none focus:[box-shadow:inset_0_0_0_0px_color-mix(in_srgb,var(--ring)_50%,transparent),0_0_0_1px_var(--background),0_0_0_2px_color-mix(in_srgb,var(--ring)_50%,transparent),0_0_0_6px_color-mix(in_srgb,var(--primary)_20%,transparent)]";

export const badgeNumberStyles =
  "h-5 min-w-5 rounded-full px-1 font-sans font-medium not-italic text-xs leading-4 tracking-normal text-center";

export const badgeVariants = cva(
  "group/badge inline-flex h-5  shrink-0 items-center justify-center",
  {
    variants: {
      variant: {
        default: `${badgeContentStyles} ${badgeFocusStyles} bg-badge-default text-badge-default-foreground hover:opacity-80 focus:bg-badge-default`,
        secondary: `${badgeContentStyles} ${badgeFocusStyles} bg-badge-secondary text-badge-secondary-foreground hover:opacity-80 focus:bg-badge-secondary`,
        destructive: `${badgeContentStyles} focus:outline-none focus:[box-shadow:inset_0_0_0_0px_color-mix(in_srgb,var(--destructive)_20%,transparent),0_0_0_1px_var(--background),0_0_0_2px_color-mix(in_srgb,var(--destructive)_20%,transparent),0_0_0_6px_color-mix(in_srgb,var(--primary)_20%,transparent)] bg-destructive/10 text-destructive-pressed hover:bg-destructive hover:text-destructive-foreground focus:bg-destructive/20 focus:text-destructive`,
        outline: `${badgeContentStyles} [box-shadow:inset_0_0_0_1px_color-mix(in_srgb,var(--ring)_50%,transparent)] ${badgeFocusStyles} bg-background text-foreground hover:bg-muted hover:text-foreground focus:bg-background focus:text-foreground`,
        ghost: `${badgeContentStyles} ${badgeSubtleFocusStyles} bg-background text-foreground hover:bg-muted hover:text-foreground focus:bg-background focus:text-foreground`,
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "",
        lg: "h-6 text-base leading-5 px-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

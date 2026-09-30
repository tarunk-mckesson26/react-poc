import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "group/badge inline-flex h-5  shrink-0 items-center justify-center",
  {
    variants: {
      variant: {
        default:
          "focus:outline-none focus:[box-shadow:inset_0_0_0_1px_#A3A3A380,0_0_0_1px_#fff,0_0_0_2px_#A3A3A380,0_0_0_6px_#005A8C33] h-5 rounded-[6px] bg-[#7C3AED] font-sans font-medium text-xs leading-4 tracking-normal text-[#fafafa] px-[6px] py-[2px] hover:opacity-80 focus:bg-[#7C3AED]",
        secondary:
          "focus:outline-none focus:[box-shadow:inset_0_0_0_1px_#A3A3A380,0_0_0_1px_#fff,0_0_0_2px_#A3A3A380,0_0_0_6px_#005A8C33] h-5 rounded-[6px] bg-[#EDE9FE] font-sans font-medium text-xs leading-4 tracking-normal text-[#4C1D95] px-[6px] py-[2px] hover:opacity-80 focus:bg-[#EDE9FE]",
        destructive:
          "focus:outline-none focus:[box-shadow:inset_0_0_0_0px_#DC262633,0_0_0_1px_#fff,0_0_0_2px_#DC262633,0_0_0_6px_#005A8C33] h-5 rounded-[6px] bg-[#DC26261A] font-sans font-medium text-xs leading-4 tracking-normal text-[#991B1B] px-[6px] py-[2px] hover:bg-[#DC2626] hover:text-[#FAFAFA] focus:bg-[#DC262633] focus:text-[#DC2626]",
        outline:
          "[box-shadow:inset_0_0_0_1px_#A3A3A380] focus:outline-none focus:[box-shadow:inset_0_0_0_1px_#A3A3A380,0_0_0_1px_#fff,0_0_0_2px_#A3A3A380,0_0_0_6px_#005A8C33] h-5 rounded-[6px] bg-[#FFFFFF] font-sans font-medium text-xs leading-4 tracking-normal text-[#0A0A0A] px-[6px] py-[2px] hover:bg-[#F5F5F5] hover:text-[#0A0A0A] focus:bg-[#FFFFFF] focus:text-[#0A0A0A]",
        ghost:
          "focus:outline-none focus:[box-shadow:inset_0_0_0_0px_#A3A3A380,0_0_0_1px_#fff,0_0_0_2px_#A3A3A380,0_0_0_6px_#005A8C33] h-5 rounded-[6px] bg-[#FFFFFF] font-sans font-medium text-xs leading-4 tracking-normal text-[#0A0A0A] px-[6px] py-[2px] hover:bg-[#F5F5F5] hover:text-[#0A0A0A] focus:bg-[#FFFFFF] focus:text-[#0A0A0A]",
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

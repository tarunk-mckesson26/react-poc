import { clsx as buildClassNames, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Resolves conflicting Tailwind utility classes (e.g. border color/bg overrides)
export function clsx(...inputs: ClassValue[]) {
  return twMerge(buildClassNames(inputs))
}

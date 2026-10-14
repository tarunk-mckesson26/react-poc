export const dialogStyles: Record<
  | "root"
  | "trigger"
  | "portal"
  | "close"
  | "overlay"
  | "content"
  | "placeholder"
  | "header"
  | "title"
  | "description"
  | "footer",
  string
> = {
  root: "",
  trigger: "",
  portal: "",
  close: "",
  overlay:
    "fixed inset-0 isolate z-50 bg-[var(--overlay-color)] duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
  content:
    "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-popover text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
  placeholder: "",
  header: "flex flex-col gap-2 px-6 pt-6 pb-4",
  title:
    "font-sans text-2xl font-semibold leading-8 tracking-tight [color:var(--dialog-title-textColor,var(--text))]",
  description:
    "font-sans text-sm font-normal leading-5 tracking-normal [color:var(--dialog-description-textColor,var(--muted-foreground))]",
  footer:
    "flex flex-col-reverse gap-2 rounded-b-xl border-t border-border bg-muted/50 p-6 sm:flex-row sm:justify-start",
};

export const dialogIconCloseStyles =
  "absolute top-4 right-4 flex size-4 items-center justify-center rounded-xs p-0 transition-colors hover:bg-[var(--dialogCloseIcon-hover-bgColor,var(--muted))] focus:border-2 focus:border-[var(--dialogCloseIcon-focus-borderColor,var(--ring))] focus:opacity-70 focus:bg-[var(--dialogCloseIcon-default-bgColor,var(--background))]";

export const dialogPlaceholderStyles =
  "flex h-15 bg-[var(--dialog-placeholder-bgColor,var(--muted))] rotate-0 items-center justify-center gap-2 rounded-md border border-dashed border-t border-border p-5 opacity-100 text-muted-foreground";

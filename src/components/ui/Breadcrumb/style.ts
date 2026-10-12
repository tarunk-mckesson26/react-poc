const breadcrumbLinkBaseStyles =
  "inline-flex items-center rounded-xs font-sans text-sm font-semibold leading-5 tracking-normal underline decoration-transparent outline-1 outline-offset-2 outline-transparent transition-[color,text-decoration-color,outline-color] duration-300 ease-out";
const breadcrumbLinkFocusStyles =
  "focus:outline-[var(--custom-outline,var(--breadcrumb-focus))]";
const breadcrumbLinkColorStyles =
  "text-[color:var(--breadcrumbItem-default-textColor,var(--breadcrumb-link))]";
const breadcrumbIconSizeStyles = "[&>svg]:size-4";
const breadcrumbDropdownTriggerStyles =
  "inline-flex h-5 w-auto items-center gap-1";

export const breadcrumbListClassName =
  "flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-muted-foreground";

export const breadcrumbItemClassName = "inline-flex items-center gap-1";

export const breadcrumbLinkClassName = `${breadcrumbLinkBaseStyles} ${breadcrumbLinkColorStyles} hover:text-breadcrumb-link-hover hover:decoration-breadcrumb-link-hover ${breadcrumbLinkFocusStyles}`;

export const breadcrumbPageClassName = "font-normal text-foreground";

export const breadcrumbSeparatorClassName = "[&>svg]:size-[15px]";

export const breadcrumbEllipsisClassName = `flex size-5 items-center justify-center rounded-xs text-breadcrumb-link group-focus/button:ring-1 group-focus/button:ring-[var(--breadcrumb-ellipsis-focus-ringColor,var(--breadcrumb-focus))] ${breadcrumbIconSizeStyles}`;

export const breadcrumbDropdownMenuTriggerClassName = `${breadcrumbDropdownTriggerStyles} ${breadcrumbLinkBaseStyles} ${breadcrumbLinkColorStyles} hover:decoration-solid hover:decoration-[color:var(--breadcrumbItem-default-textColor,var(--breadcrumb-link))] ${breadcrumbLinkFocusStyles}`;

export const breadcrumbDropdownMenuContentClassName =
  "z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95";

export const breadcrumbDropdownMenuItemClassName =
  "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive";

import type React from "react";
import AlertDemo from "./alertDemo";
import BadgeDemo from "./badgeDemo";
import BreadcrumbDemo from "./breadcrumbDemo";
import ButtonDemo from "./buttonDemo";
import CheckboxDemo from "./checkboxDemo";
import PaginationDemo from "./paginationDemo";
import ProgressDemo from "./progressDemo";
import TooltipDemo from "./tooltipDemo";

export interface ComponentDemo {
  id: string;
  label: string;
  description: string;
  render: () => React.ReactNode;
}

export const componentDemos: ComponentDemo[] = [
  { id: "alert", label: "Alert", description: "Informational messages with different variants.", render: () => <AlertDemo /> },
  { id: "badge", label: "Badge", description: "Variants and sizes.", render: () => <BadgeDemo /> },
  { id: "breadcrumb", label: "Breadcrumb", description: "Navigation for hierarchical content.", render: () => <BreadcrumbDemo /> },
  { id: "button", label: "Button", description: "Variants and sizes.", render: () => <ButtonDemo /> },
  { id: "checkbox", label: "Checkbox", description: "Selection control with label.", render: () => <CheckboxDemo /> },
  { id: "pagination", label: "Pagination", description: "Page navigation control.", render: () => <PaginationDemo /> },
  { id: "progress", label: "Progress", description: "Determinate progress bar.", render: () => <ProgressDemo /> },
  { id: "tooltip", label: "Tooltip", description: "Contextual hint on hover.", render: () => <TooltipDemo /> },
];

import type React from "react";
import AccordionDemo from "./accordionDemo";
import AlertDemo from "./alertDemo";
import AvatarDemo from "./avatarDemo";
import BadgeDemo from "./badgeDemo";
import BreadcrumbDemo from "./breadcrumbDemo";
import ButtonDemo from "./buttonDemo";
// import CardDemo from "./cardDemo";
import CheckboxDemo from "./checkboxDemo";
import InputDemo from "./inputDemo";
import PaginationDemo from "./paginationDemo";
import ProgressDemo from "./progressDemo";
import SonnerDemo from "./sonnerDemo";
import TooltipDemo from "./tooltipDemo";
import SwitchDemo from "./switchDemo";

export interface ComponentDemo {
  id: string;
  label: string;
  description: string;
  render: () => React.ReactNode;
}

export const componentDemos: ComponentDemo[] = [
  { id: "accordion", label: "Accordion", description: "Collapsible sections in basic and bordered variants.", render: () => <AccordionDemo /> },
  { id: "alert", label: "Alert", description: "Informational messages with different variants.", render: () => <AlertDemo /> },
  { id: "avatar", label: "Avatar", description: "Image, name, and icon avatars in different sizes.", render: () => <AvatarDemo /> },
  { id: "badge", label: "Badge", description: "Variants and sizes.", render: () => <BadgeDemo /> },
  { id: "breadcrumb", label: "Breadcrumb", description: "Navigation for hierarchical content.", render: () => <BreadcrumbDemo /> },
  { id: "button", label: "Button", description: "Variants and sizes.", render: () => <ButtonDemo /> },
  { id: "checkbox", label: "Checkbox", description: "Selection control with label.", render: () => <CheckboxDemo /> },
  { id: "input", label: "Input", description: "Text, password, and file fields in default and bare variants.", render: () => <InputDemo /> },
  { id: "pagination", label: "Pagination", description: "Page navigation control.", render: () => <PaginationDemo /> },
  { id: "progress", label: "Progress", description: "Determinate progress bar.", render: () => <ProgressDemo /> },
  { id: "sonner", label: "Sonner", description: "All options of Sonner / Toast.", render: () => <SonnerDemo /> },
  { id: "tooltip", label: "Tooltip", description: "Contextual hint on hover.", render: () => <TooltipDemo /> },
  { id: "switch", label: "Switch", description: "Toggle control with label.", render: () => <SwitchDemo /> },
];

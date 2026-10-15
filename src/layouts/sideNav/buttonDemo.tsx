import { Fragment } from "react";
import { Button } from "@/components/ui/Button";
import {
  buttonFocusPreviewStyles,
  buttonHoverPreviewStyles,
} from "@/components/ui/Button/style";
import type { ButtonSize, ButtonVariant } from "@/components/ui/Button/type";
import { FileChartPie } from "lucide-react";

const variants: { title: string; variant: ButtonVariant }[] = [
  { title: "Primary", variant: "primary" },
  { title: "Secondary", variant: "secondary" },
  { title: "Destructive", variant: "destructive" },
  { title: "Tertiary", variant: "tertiary" },
  { title: "Ghost", variant: "ghost" },
  { title: "Link", variant: "link" },
];

const sizes: { title: string; size: ButtonSize; icon: boolean }[] = [
  { title: "default", size: "default", icon: false },
  { title: "xs", size: "xs", icon: false },
  { title: "sm", size: "sm", icon: false },
  { title: "lg", size: "lg", icon: false },
  { title: "icon", size: "icon", icon: true },
  { title: "icon-xs", size: "icon-xs", icon: true },
  { title: "icon-sm", size: "icon-sm", icon: true },
  { title: "icon-lg", size: "icon-lg", icon: true },
];

const states = ["Default", "Hover", "Focus", "Loading", "Disabled", "Pressed"] as const;
type DemoState = (typeof states)[number];

const ButtonCell = ({
  variant,
  size,
  icon,
  state,
}: {
  variant: ButtonVariant;
  size: ButtonSize;
  icon: boolean;
  state: DemoState;
}) => {
  // Hover/focus can't be held in a static gallery, so their looks are forced via className.
  const previewClassName =
    state === "Hover"
      ? buttonHoverPreviewStyles[variant]
      : state === "Focus"
        ? buttonFocusPreviewStyles[variant]
        : undefined;

  return (
    <Button
      variant={variant}
      size={size}
      disabled={state === "Disabled"}
      data-loading={state === "Loading"}
      aria-pressed={state === "Pressed" ? true : undefined}
      aria-label={icon ? `${variant} ${size} button` : undefined}
      className={previewClassName}
    >
      {icon ? <FileChartPie /> : "Button"}
    </Button>
  );
};

const ButtonDemo = () => (
  <div className="flex flex-col gap-12">
    {variants.map(({ title, variant }) => (
      <section key={variant} className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold text-slate-500">{title}</h2>
        <div
          className="grid items-center, gap-x-7 gap-y-5"
          style={{ gridTemplateColumns: `72px repeat(${states.length}, minmax(96px, 1fr))` }}
        >
          <div />
          {states.map((state) => (
            <span key={state} className="text-xs font-medium text-slate-400 text-center">
              {state}
            </span>
          ))}

          {sizes.map(({ title: sizeTitle, size, icon }) => (
            <Fragment key={size}>
              <span className="text-xs text-slate-400">{sizeTitle}</span>
              {states.map((state) => (
                <div key={state} className="flex items-center justify-center">
                  <ButtonCell variant={variant} size={size} icon={icon} state={state} />
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </section>
    ))}
  </div>
);

export default ButtonDemo;
import { Checkbox } from "@/components/ui/Checkbox";
import {
  checkboxFocusPreviewStyles as focusStyles,
  checkboxPressedPreviewStyles as pressedStyles,
} from "@/components/ui/Checkbox/style";
import DemoRow from "./demoRow";

const layouts = [
  { title: "Default Start", variant: "default" as const, align: "start" as const },
  { title: "Default End", variant: "default" as const, align: "end" as const },
  { title: "Box Start", variant: "card" as const, align: "start" as const },
  { title: "Box End", variant: "card" as const, align: "end" as const },
];

const states = [
  { title: "Default", className: undefined, disabled: false, invalid: false },
  { title: "Focus", className: focusStyles, disabled: false, invalid: false },
  { title: "Pressed", className: pressedStyles, disabled: false, invalid: false },
  { title: "Disabled", className: undefined, disabled: true, invalid: false },
  { title: "Invalid", className: undefined, disabled: false, invalid: true },
];

const CheckboxDemo = () => (
  <div className="flex flex-col gap-4">
    <DemoRow>
      {states.map((state) => (
        <fieldset key={state.title} className="min-w-0 border-0 p-0">
          <legend className="mb-3 text-sm font-semibold text-slate-500">
            {state.title}
          </legend>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {layouts.map((layout) => (
              <div key={layout.title} className="flex min-w-0 flex-col gap-3">
                <h4 className="text-sm font-medium">{layout.title}</h4>
                <Checkbox
                  variant={layout.variant}
                  align={layout.align}
                  className={state.className}
                  disabled={state.disabled}
                  invalid={state.invalid}
                  label="Checkbox Text"
                  description="This is a checkbox description."
                  defaultChecked
                />
                <Checkbox
                  variant={layout.variant}
                  align={layout.align}
                  className={state.className}
                  disabled={state.disabled}
                  invalid={state.invalid}
                  label="Checkbox Text"
                  description="This is a checkbox description."
                />
              </div>
            ))}
          </div>
        </fieldset>
      ))}
      <fieldset className="min-w-0 border-0 p-0">
        <legend className="mb-3 mt-4 text-sm font-semibold text-violet-600">
          Checkbox Group
        </legend>
        <div className="flex flex-col gap-3">
          {Array.from({ length: 6 }, (_, index) => (
            <Checkbox
              key={index}
              label="Checkbox Text"
              description="This is a checkbox description"
              defaultChecked
            />
          ))}
        </div>
      </fieldset>
    </DemoRow>
  </div>
);

export default CheckboxDemo;
import { Input, type InputType, type InputVariant } from "@/components/ui/InputField";
import { inputFocusPreviewStyles } from "@/components/ui/InputField/style";

const variants: { title: string; variant: InputVariant }[] = [
  { title: "Default", variant: "default" },
  { title: "Bare", variant: "bare" },
];

const types: { title: string; type: InputType; placeholder: string; value: string }[] = [
  { title: "Text", type: "default", placeholder: "Enter your name", value: "Ada Lovelace" },
  { title: "Password", type: "password", placeholder: "Enter password", value: "sup3rsecret" },
  { title: "File", type: "file", placeholder: "", value: "" },
];

const states = [
  { title: "Default", filled: false, focus: false, disabled: false, invalid: false },
  { title: "Focus", filled: false, focus: true, disabled: false, invalid: false },
  { title: "Filled", filled: true, focus: false, disabled: false, invalid: false },
  { title: "Disabled", filled: false, focus: false, disabled: true, invalid: false },
  { title: "Invalid", filled: false, focus: false, disabled: false, invalid: true },
  { title: "Invalid filled", filled: true, focus: false, disabled: false, invalid: true },
];

type State = (typeof states)[number];
type TypeConfig = (typeof types)[number];

const InputField = ({
  variant,
  config,
  state,
}: {
  variant: InputVariant;
  config: TypeConfig;
  state: State;
}) => {
  const isFile = config.type === "file";
  // A file input's value can't be set programmatically, so fake the filled flag.
  const filledPreview = state.filled && isFile ? { "data-filled": "true" } : {};

  return (
    <Input
      variant={variant}
      type={config.type}
      placeholder={isFile ? undefined : config.placeholder}
      {...(state.filled && !isFile ? { defaultValue: config.value } : {})}
      {...filledPreview}
      disabled={state.disabled}
      invalid={state.invalid}
      className={state.focus ? inputFocusPreviewStyles[variant] : undefined}
    />
  );
};

const InputDemo = () => (
  <div className="flex flex-col gap-10">
    {variants.map(({ title, variant }) => (
      <section key={variant} className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold text-slate-500">{title} variant</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {states.map((state) => (
            <fieldset key={state.title} className="min-w-0 border-0 p-0">
              <legend className="mb-3 text-sm font-medium">{state.title}</legend>
              <div className="flex flex-col gap-4">
                {types.map((config) => (
                  <InputField key={config.type} variant={variant} config={config} state={state} />
                ))}
              </div>
            </fieldset>
          ))}
        </div>
      </section>
    ))}
  </div>
);

export default InputDemo;

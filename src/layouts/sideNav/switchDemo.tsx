import { Switch } from "@/components/ui/Switch";

const switchExamples = [
  { title: "Default Start", align: "start" },
  { title: "Default End", align: "end" },
  { title: "Box Start", variant: "card", align: "start" },
  { title: "Box End", variant: "card", align: "end" },
] as const;

const switchStates = [
  { title: "Default", state: "default" },
  { title: "Focus", state: "focus" },
  { title: "Invalid", state: "invalid" },
  { title: "Disabled", state: "disabled" },
] as const;

function SwitchDemo() {
  const renderStateSections = (size: "default" | "sm") =>
    switchStates.map(({ title, state }) => (
      <fieldset key={`${size}-${state}`} className="min-w-0 border-0 p-0">
        <legend className="mb-3 text-sm font-semibold text-slate-500">{title}</legend>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {switchExamples.map((example) => (
            <div key={example.title} className="flex min-w-0 flex-col gap-3">
              <h4 className="text-sm font-medium">{example.title}</h4>
              <Switch
                {...example}
                size={size === "sm" ? "sm" : undefined}
                state={state === "default" ? undefined : state}
                label="Switch Text"
                description="This is a switch description."
              />
              <Switch
                {...example}
                size={size === "sm" ? "sm" : undefined}
                state={state === "default" ? undefined : state}
                label="Switch Text"
                description="This is a switch description."
                defaultChecked
              />
            </div>
          ))}
        </div>
      </fieldset>
    ));

  return (
    <div className="mx-auto flex w-full flex-col gap-4 sm:gap-5">
      {renderStateSections("default")}
      <h3 className="text-sm font-semibold text-slate-700">Small size</h3>
      {renderStateSections("sm")}
    </div>
  )
}

export default SwitchDemo

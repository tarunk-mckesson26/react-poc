import { useState } from "react"
import { TabsComponent } from "./ui/Tabs"
import { Spinner } from "./ui/spinner"
import { Switch } from "./ui/Switch"
import { Progress } from "./ui/Progress"
import { Checkbox } from "./ui/Checkbox"
import {
  checkboxFocusPreviewStyles as focusStyles,
  checkboxPressedPreviewStyles as pressedStyles,
} from "./ui/Checkbox/style"

const showcaseTabs = [
  {
    value: "tab-1",
    label: "Overview",
    content: (
      <div className="space-y-1">
        <p className="font-medium text-slate-800">Overview</p>
        <p>Content for the overview tab.</p>
      </div>
    ),
  },
  {
    value: "tab-2",
    label: <span className="inline-flex items-center gap-2">Details</span>,
    content: (
      <div className="space-y-1">
        <p className="font-medium text-slate-800">Details</p>
        <p>Content for the details tab.</p>
      </div>
    ),
  },
]

function ComponentsShowcase() {
  const [activeTab, setActiveTab] = useState("tab-1")
  const [switchOn, setSwitchOn] = useState(true)

  return (
    <div className="mx-auto flex w-full flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-violet-600">Tabs</h2>
        <TabsComponent items={showcaseTabs} value={activeTab} onValueChange={setActiveTab} />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-violet-600">Spinner</h2>
        <Spinner size={5} />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-violet-600">Switch</h2>
        <Switch label="Airplane Mode" checked={switchOn} onCheckedChange={setSwitchOn} />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-violet-600">Progress</h2>
        <div className="mx-auto grid w-full grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-1">
          <Progress percent="100%" valueLabel="100%" aria-label="Progress, 100 percent" />
          <Progress percent="75%" valueLabel="75%" aria-label="Progress, 75 percent" />
          <Progress percent="50%" valueLabel="50%" aria-label="Progress, 50 percent" />
          <Progress percent="25%" valueLabel="25%" aria-label="Progress, 25 percent" />
          <Progress percent="0%" valueLabel="0%" aria-label="Progress, 0 percent" />
          <Progress value={62.5} valueLabel="62.5%" aria-label="Dynamic progress" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-violet-600">Checkbox</h2>
        <fieldset className="min-w-0 border-0 p-0">
          <legend className="mb-3 text-sm font-semibold text-slate-500">Default</legend>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex min-w-0 flex-col gap-3">
              <h4 className="text-sm font-medium">Default Start</h4>
              <Checkbox align="start" label="Checkbox Text" description="This is a checkbox description." defaultChecked />
              <Checkbox align="start" label="Checkbox Text" description="This is a checkbox description." />
            </div>
            <div className="flex min-w-0 flex-col gap-3">
              <h4 className="text-sm font-medium">Default End</h4>
              <Checkbox align="end" label="Checkbox Text" description="This is a checkbox description." defaultChecked />
              <Checkbox align="end" label="Checkbox Text" description="This is a checkbox description." />
            </div>
            <div className="flex min-w-0 flex-col gap-3">
              <h4 className="text-sm font-medium">Box Start</h4>
              <Checkbox variant="card" align="start" label="Checkbox Text" description="This is a checkbox description." defaultChecked />
              <Checkbox variant="card" align="start" label="Checkbox Text" description="This is a checkbox description." />
            </div>
            <div className="flex min-w-0 flex-col gap-3">
              <h4 className="text-sm font-medium">Box End</h4>
              <Checkbox variant="card" align="end" label="Checkbox Text" description="This is a checkbox description." defaultChecked />
              <Checkbox variant="card" align="end" label="Checkbox Text" description="This is a checkbox description." />
            </div>
          </div>
        </fieldset>

        <fieldset className="min-w-0 border-0 p-0">
          <legend className="mb-3 text-sm font-semibold text-slate-500">Focus</legend>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex min-w-0 flex-col gap-3">
              <h4 className="text-sm font-medium">Default Start</h4>
              <Checkbox align="start" className={focusStyles} label="Checkbox Text" description="This is a checkbox description." defaultChecked />
              <Checkbox align="start" className={focusStyles} label="Checkbox Text" description="This is a checkbox description." />
            </div>
            <div className="flex min-w-0 flex-col gap-3">
              <h4 className="text-sm font-medium">Default End</h4>
              <Checkbox align="end" className={focusStyles} label="Checkbox Text" description="This is a checkbox description." defaultChecked />
              <Checkbox align="end" className={focusStyles} label="Checkbox Text" description="This is a checkbox description." />
            </div>
            <div className="flex min-w-0 flex-col gap-3">
              <h4 className="text-sm font-medium">Box Start</h4>
              <Checkbox variant="card" align="start" className={focusStyles} label="Checkbox Text" description="This is a checkbox description." defaultChecked />
              <Checkbox variant="card" align="start" className={focusStyles} label="Checkbox Text" description="This is a checkbox description." />
            </div>
            <div className="flex min-w-0 flex-col gap-3">
              <h4 className="text-sm font-medium">Box End</h4>
              <Checkbox variant="card" align="end" className={focusStyles} label="Checkbox Text" description="This is a checkbox description." defaultChecked />
              <Checkbox variant="card" align="end" className={focusStyles} label="Checkbox Text" description="This is a checkbox description." />
            </div>
          </div>
        </fieldset>

        <fieldset className="min-w-0 border-0 p-0">
          <legend className="mb-3 text-sm font-semibold text-slate-500">Pressed</legend>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex min-w-0 flex-col gap-3">
              <h4 className="text-sm font-medium">Default Start</h4>
              <Checkbox align="start" className={pressedStyles} label="Checkbox Text" description="This is a checkbox description." defaultChecked />
              <Checkbox align="start" className={pressedStyles} label="Checkbox Text" description="This is a checkbox description." />
            </div>
            <div className="flex min-w-0 flex-col gap-3">
              <h4 className="text-sm font-medium">Default End</h4>
              <Checkbox align="end" className={pressedStyles} label="Checkbox Text" description="This is a checkbox description." defaultChecked />
              <Checkbox align="end" className={pressedStyles} label="Checkbox Text" description="This is a checkbox description." />
            </div>
            <div className="flex min-w-0 flex-col gap-3">
              <h4 className="text-sm font-medium">Box Start</h4>
              <Checkbox variant="card" align="start" className={pressedStyles} label="Checkbox Text" description="This is a checkbox description." defaultChecked />
              <Checkbox variant="card" align="start" className={pressedStyles} label="Checkbox Text" description="This is a checkbox description." />
            </div>
            <div className="flex min-w-0 flex-col gap-3">
              <h4 className="text-sm font-medium">Box End</h4>
              <Checkbox variant="card" align="end" className={pressedStyles} label="Checkbox Text" description="This is a checkbox description." defaultChecked />
              <Checkbox variant="card" align="end" className={pressedStyles} label="Checkbox Text" description="This is a checkbox description." />
            </div>
          </div>
        </fieldset>

        <fieldset className="min-w-0 border-0 p-0">
          <legend className="mb-3 text-sm font-semibold text-slate-500">Disabled</legend>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex min-w-0 flex-col gap-3">
              <h4 className="text-sm font-medium">Default Start</h4>
              <Checkbox align="start" disabled label="Checkbox Text" description="This is a checkbox description." defaultChecked />
              <Checkbox align="start" disabled label="Checkbox Text" description="This is a checkbox description." />
            </div>
            <div className="flex min-w-0 flex-col gap-3">
              <h4 className="text-sm font-medium">Default End</h4>
              <Checkbox align="end" disabled label="Checkbox Text" description="This is a checkbox description." defaultChecked />
              <Checkbox align="end" disabled label="Checkbox Text" description="This is a checkbox description." />
            </div>
            <div className="flex min-w-0 flex-col gap-3">
              <h4 className="text-sm font-medium">Box Start</h4>
              <Checkbox variant="card" align="start" disabled label="Checkbox Text" description="This is a checkbox description." defaultChecked />
              <Checkbox variant="card" align="start" disabled label="Checkbox Text" description="This is a checkbox description." />
            </div>
            <div className="flex min-w-0 flex-col gap-3">
              <h4 className="text-sm font-medium">Box End</h4>
              <Checkbox variant="card" align="end" disabled label="Checkbox Text" description="This is a checkbox description." defaultChecked />
              <Checkbox variant="card" align="end" disabled label="Checkbox Text" description="This is a checkbox description." />
            </div>
          </div>
        </fieldset>

        <fieldset className="min-w-0 border-0 p-0">
          <legend className="mb-3 text-sm font-semibold text-slate-500">Invalid</legend>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex min-w-0 flex-col gap-3">
              <h4 className="text-sm font-medium">Default Start</h4>
              <Checkbox align="start" invalid label="Checkbox Text" description="This is a checkbox description." defaultChecked />
              <Checkbox align="start" invalid label="Checkbox Text" description="This is a checkbox description." />
            </div>
            <div className="flex min-w-0 flex-col gap-3">
              <h4 className="text-sm font-medium">Default End</h4>
              <Checkbox align="end" invalid label="Checkbox Text" description="This is a checkbox description." defaultChecked />
              <Checkbox align="end" invalid label="Checkbox Text" description="This is a checkbox description." />
            </div>
            <div className="flex min-w-0 flex-col gap-3">
              <h4 className="text-sm font-medium">Box Start</h4>
              <Checkbox variant="card" align="start" invalid label="Checkbox Text" description="This is a checkbox description." defaultChecked />
              <Checkbox variant="card" align="start" invalid label="Checkbox Text" description="This is a checkbox description." />
            </div>
            <div className="flex min-w-0 flex-col gap-3">
              <h4 className="text-sm font-medium">Box End</h4>
              <Checkbox variant="card" align="end" invalid label="Checkbox Text" description="This is a checkbox description." defaultChecked />
              <Checkbox variant="card" align="end" invalid label="Checkbox Text" description="This is a checkbox description." />
            </div>
          </div>
        </fieldset>

        <fieldset className="min-w-0 border-0 p-0">
          <legend className="mb-3 mt-4 text-sm font-semibold text-violet-600">Checkbox Group</legend>
          <div className="flex flex-col gap-3">
            <Checkbox label="Checkbox Text" description="This is a checkbox description" defaultChecked />
            <Checkbox label="Checkbox Text" description="This is a checkbox description" defaultChecked />
            <Checkbox label="Checkbox Text" description="This is a checkbox description" defaultChecked />
            <Checkbox label="Checkbox Text" description="This is a checkbox description" defaultChecked />
            <Checkbox label="Checkbox Text" description="This is a checkbox description" defaultChecked />
            <Checkbox label="Checkbox Text" description="This is a checkbox description" defaultChecked />
          </div>
        </fieldset>
      </div>
    </div>
  )
}

export default ComponentsShowcase

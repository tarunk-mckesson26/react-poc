import { useState } from "react"
import { TabsComponent } from "./ui/Tabs"
import { Spinner } from "./ui/Spinner"
import { Switch } from "./ui/Switch"
import { Progress } from "./ui/Progress"
import { Checkbox } from "./ui/Checkbox"

const showcaseTabs = [
  {
    value: "tab-1",
    label: <span>Overview</span>,
    content: (
      <div className="space-y-1">
        <p className="font-medium text-slate-800">Overview</p>
        <p>Content for the overview tab.</p>
      </div>
    ),
  },
  {
    value: "tab-2",
    label: <span>Details</span>,
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
  const [checked, setChecked] = useState(true)

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
        <Progress value={62.5} label="Progress" valueLabel="62.5%" />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-violet-600">Checkbox</h2>
        <Checkbox
          value="accept-terms"
          label="Accept terms and conditions"
          checked={checked}
          onCheckedChange={(value) => setChecked(value === true)}
        />
      </div>
    </div>
  )
}

export default ComponentsShowcase

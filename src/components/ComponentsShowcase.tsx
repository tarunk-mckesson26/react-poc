import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs"
import { Spinner } from "./ui/Spinner"
import { Switch } from "./ui/Switch"
import { Progress } from "./ui/Progress"
import { Checkbox } from "./ui/Checkbox"

function ComponentsShowcase() {
  const [activeTab, setActiveTab] = useState("tab-1")
  const [switchOn, setSwitchOn] = useState(true)
  const [checked, setChecked] = useState(true)

  return (
    <div className="mx-auto flex w-full flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-violet-600">Tabs</h2>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="tab-1" onClick={() => setActiveTab("tab-1")}>
              Tab 1
            </TabsTrigger>
            <TabsTrigger value="tab-2" onClick={() => setActiveTab("tab-2")}>
              Tab 2
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab-1">Content for Tab 1</TabsContent>
          <TabsContent value="tab-2">Content for Tab 2</TabsContent>
        </Tabs>
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

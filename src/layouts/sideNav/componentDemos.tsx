import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Checkbox } from "@/components/ui/Checkbox"
import { PaginationComponent } from "@/components/ui/Pagination"
import { Progress } from "@/components/ui/Progress"
import { Switch } from "@/components/ui/Switch"
import { TabsComponent } from "@/components/ui/Tabs"
import { TooltipComponent } from "@/components/ui/Tooltip"
import {
  checkboxFocusPreviewStyles as focusStyles,
  checkboxPressedPreviewStyles as pressedStyles,
} from "@/components/ui/Checkbox/style"

const Row = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-wrap items-center gap-3">{children}</div>
)



const ProgressDemo = () => (
  <Row>
    <Progress percent="100%" valueLabel="100%" aria-label="Progress, 100 percent" />
          <Progress percent="75%" valueLabel="75%" aria-label="Progress, 75 percent" />
          <Progress percent="50%" valueLabel="50%" aria-label="Progress, 50 percent" />
          <Progress percent="25%" valueLabel="25%" aria-label="Progress, 25 percent" />
          <Progress percent="0%" valueLabel="0%" aria-label="Progress, 0 percent" />
          <Progress value={62.5} valueLabel="62.5%" aria-label="Dynamic progress" />
  </Row>
)

const CheckboxDemo = () => (
  <div className="flex flex-col gap-4">
    <Row>
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
    </Row>
  </div>
)


const PaginationDemo = () => {
  const [page, setPage] = useState(1)

  return <PaginationComponent totalItems={120} itemsPerPage={10} currentPage={page} onPageChange={setPage} />
}

const SwitchDemo = () => {
  const [on, setOn] = useState(true)

  return (
    <div className="flex flex-col gap-4">
      <Switch label="Airplane mode" checked={on} onCheckedChange={setOn} />
      <Switch label="Notifications" description="Receive updates by email" align="end" />
      <Switch label="Disabled" disabled />
    </div>
  )
}

const TabsDemo = () => {
  const [tab, setTab] = useState("overview")

  return (
    <TabsComponent
      value={tab}
      onValueChange={setTab}
      className="max-w-xl"
      items={[
        { value: "overview", label: "Overview", content: <p>Content for the overview tab.</p> },
        { value: "details", label: "Details", content: <p>Content for the details tab.</p> },
        { value: "settings", label: "Settings", content: <p>Content for the settings tab.</p> },
      ]}
    />
  )
}


const TooltipDemo = () => (
  <Row>
    <TooltipComponent trigger={<Button variant="secondary">Top</Button>} content="Tooltip on top" />
    <TooltipComponent side="right" trigger={<Button variant="secondary">Right</Button>} content="Tooltip on right" />
    <TooltipComponent side="bottom" trigger={<Button variant="secondary">Bottom</Button>} content="Tooltip on bottom" />
    <TooltipComponent side="left" trigger={<Button variant="secondary">Left</Button>} content="Tooltip on left" />
  </Row>
)

export interface ComponentDemo {
  id: string
  label: string
  description: string
  render: () => React.ReactNode
}

export const componentDemos: ComponentDemo[] = [
  // { id: "accordion", label: "Accordion", description: "Collapsible content panels.", render: () => <AccordionDemo /> },
  // { id: "avatar", label: "Avatar", description: "User image with initials fallback.", render: () => <AvatarDemo /> },
  // { id: "bar-chart", label: "Bar Chart", description: "Chart card built on Recharts.", render: () => <BarChartDemo /> },
  // { id: "button", label: "Button", description: "Variants and sizes.", render: () => <ButtonDemo /> },
  { id: "checkbox", label: "Checkbox", description: "Selection control with label.", render: () => <CheckboxDemo /> },
  // { id: "combobox", label: "Combobox", description: "Searchable single and multi select.", render: () => <ComboboxDemo /> },
  // { id: "input", label: "Input", description: "Text field variants.", render: () => <InputDemo /> },
  // { id: "line-graph", label: "Line Graph", description: "Area chart built on Recharts.", render: () => <LineGraphDemo /> },
  { id: "pagination", label: "Pagination", description: "Page navigation control.", render: () => <PaginationDemo /> },
  { id: "progress", label: "Progress", description: "Determinate progress bar.", render: () => <ProgressDemo /> },
  // { id: "select", label: "Select", description: "Dropdown selection.", render: () => <SelectDemo /> },
  // { id: "sonner", label: "Sonner", description: "Success and error toast notifications.", render: () => <SonnerDemo /> },
  // { id: "spinner", label: "Spinner", description: "Loading indicator.", render: () => <SpinnerDemo /> },
  // { id: "switch", label: "Switch", description: "Toggle control.", render: () => <SwitchDemo /> },
  // { id: "tabs", label: "Tabs", description: "Tabbed content panels.", render: () => <TabsDemo /> },
  // { id: "tooltip", label: "Tooltip", description: "Contextual hint on hover.", render: () => <TooltipDemo /> },
  ]

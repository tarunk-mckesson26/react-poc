import { useState } from "react"
import { Bar, BarChart as RechartsBarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { AlertIcon, SuccessIcon } from "../../assets"
import { AccordionComponent, type AccordionItemData } from "../../components/ui/Accordion"
import { Avatar } from "../../components/ui/Avatar"
import { BarChart } from "../../components/ui/BarChart"
import { Button } from "../../components/ui/Button"
import { Checkbox } from "../../components/ui/Checkbox"
import { Combobox } from "../../components/ui/Combobox"
import { Input } from "../../components/ui/InputField"
import { LineGraph } from "../../components/ui/LineGraph"
import { PaginationComponent } from "../../components/ui/Pagination"
import { Progress } from "../../components/ui/Progress"
import { SelectComponent } from "../../components/ui/Select"
import { sonner } from "../../components/ui/Sonner"
import { Spinner } from "../../components/ui/Spinner"
import { Switch } from "../../components/ui/Switch"
import { TabsComponent } from "../../components/ui/Tabs"
import { TooltipComponent } from "../../components/ui/Tooltip"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "../../components/ui/chart"

const Row = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-wrap items-center gap-3">{children}</div>
)

const AccordionDemo = () => {
  const items: AccordionItemData[] = [
    { value: "item-1", title: "What is this?", content: "A showcase of the design system accordion." },
    { value: "item-2", title: "Is it accessible?", content: "Yes, it is built on Radix primitives." },
    { value: "item-3", title: "Disabled item", content: "You cannot open this.", disabled: true },
  ]

  return <AccordionComponent type="single" collapsible items={items} className="max-w-lg" />
}

const AvatarDemo = () => (
  <Row>
    <Avatar size="xs" firstName="Ada" lastName="Lovelace" />
    <Avatar size="sm" firstName="Grace" lastName="Hopper" />
    <Avatar size="default" firstName="Alan" lastName="Turing" />
    <Avatar size="lg" firstName="Linus" lastName="Torvalds"/>
    <Avatar size="xl" src="https://i.pravatar.cc/128" alt="User avatar" />
  </Row>
)

const BarChartDemo = () => {
  const chartConfig = {
    value: { label: "Rebate", color: "#16a34a" },
  } satisfies ChartConfig

  const data = [
    { name: "Jan", value: 1200 },
    { name: "Feb", value: 1900 },
    { name: "Mar", value: 3000 },
    { name: "Apr", value: 4000 },
    { name: "May", value: 4500 },
    { name: "Jun", value: 5500 },
  ]

  return (
    <BarChart
      title="Rebates"
      chartTitle="Rebate performance trend"
      description="Last 6 months of accrued rebates."
      linkText="View report"
      onLinkClick={() => undefined}
      className="max-w-2xl"
    >
      <ChartContainer config={chartConfig} className="h-[320px] w-full">
        <RechartsBarChart accessibilityLayer data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill="var(--color-value)" radius={4} />
        </RechartsBarChart>
      </ChartContainer>
    </BarChart>
  )
}

const ButtonDemo = () => (
  <div className="flex flex-col gap-4">
    <Row>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </Row>
    <Row>
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button disabled>Disabled</Button>
    </Row>
  </div>
)

const CheckboxDemo = () => {
  const [checked, setChecked] = useState(true)

  return (
    <div className="flex flex-col gap-4">
      <Checkbox
        value="terms"
        label="Accept terms and conditions"
        description="You agree to our privacy policy."
        checked={checked}
        onCheckedChange={(value) => setChecked(value === true)}
      />
      <Checkbox value="disabled" label="Disabled option" disabled />
      <Checkbox value="invalid" label="Invalid option" invalid error="This field is required" />
    </div>
  )
}

const ComboboxDemo = () => {
  const [value, setValue] = useState("next")
  const [multi, setMulti] = useState<string[]>(["react"])

  const options = [
    { value: "react", label: "React" },
    { value: "next", label: "Next.js" },
    { value: "vue", label: "Vue" },
    { value: "svelte", label: "Svelte" },
    { value: "angular", label: "Angular", disabled: true },
  ]

  return (
    <div className="flex max-w-sm flex-col gap-4">
      <Combobox options={options} value={value} onValueChange={setValue} placeholder="Pick a framework" />
      <Combobox multiple options={options} value={multi} onValueChange={setMulti} placeholder="Pick frameworks" />
    </div>
  )
}

const InputDemo = () => {
  const [value, setValue] = useState("")

  return (
    <div className="flex max-w-sm flex-col gap-4">
      <Input placeholder="Default input" value={value} onChange={(event) => setValue(event.target.value)} />
      <Input variant="outline" size="default" placeholder="Outline input" />
      <Input placeholder="Invalid input" invalid />
      <Input placeholder="Disabled input" disabled />
    </div>
  )
}

const LineGraphDemo = () => {
  const config = {
    savings: { label: "Savings", color: "#16a34a" },
  } satisfies ChartConfig

  const data = [
    { quarter: "Q4-2026", savings: 31100 },
    { quarter: "Q1-2027", savings: 33500 },
    { quarter: "Q2-2027", savings: 38750 },
    { quarter: "Q3-2027", savings: 42850 },
  ]

  return (
    <LineGraph
      title="Quarterly savings trend"
      data={data}
      config={config}
      dataKey="savings"
      xAxisKey="quarter"
      className="h-[320px] w-full max-w-2xl"
    />
  )
}

const PaginationDemo = () => {
  const [page, setPage] = useState(1)

  return <PaginationComponent totalItems={120} itemsPerPage={10} currentPage={page} onPageChange={setPage} />
}

const ProgressDemo = () => (
  <div className="flex max-w-md flex-col gap-6">
    <Progress value={25} label="Uploading" />
    <Progress value={62.5} label="Processing" valueLabel="62.5%" caption="Estimated 2 minutes remaining" />
    <Progress value={100} label="Complete" headerLayout="stack" />
  </div>
)

const SelectDemo = () => {
  const [value, setValue] = useState<string>()

  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "durian", label: "Durian", disabled: true },
  ]

  return (
    <div className="flex max-w-sm flex-col gap-4">
      <SelectComponent options={options} value={value} onValueChange={setValue} placeholder="Pick a fruit" />
      <SelectComponent options={options} size="lg" placeholder="Large select" />
      <SelectComponent options={options} invalid placeholder="Invalid select" />
    </div>
  )
}

const SpinnerDemo = () => (
  <Row>
    <Spinner />
    <Spinner size={8} />
    <Spinner size={6} />
  </Row>
)

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

const SonnerDemo = () => (
  <Row>
    <Button
      onClick={() =>
        sonner({
          text: "Upload complete",
          description: "3 files added",
          fill: "success",
          icon: <img src={SuccessIcon} alt="" />,
        })
      }
    >
      Success
    </Button>
    <Button
      variant="destructive"
      onClick={() =>
        sonner({
          text: "Something went wrong",
          description: "Please try again.",
          fill: "error",
          icon: <img src={AlertIcon} alt="" />,
        })
      }
    >
      Error
    </Button>
  </Row>
)

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
  { id: "accordion", label: "Accordion", description: "Collapsible content panels.", render: () => <AccordionDemo /> },
  { id: "avatar", label: "Avatar", description: "User image with initials fallback.", render: () => <AvatarDemo /> },
  { id: "bar-chart", label: "Bar Chart", description: "Chart card built on Recharts.", render: () => <BarChartDemo /> },
  { id: "button", label: "Button", description: "Variants and sizes.", render: () => <ButtonDemo /> },
  { id: "checkbox", label: "Checkbox", description: "Selection control with label.", render: () => <CheckboxDemo /> },
  { id: "combobox", label: "Combobox", description: "Searchable single and multi select.", render: () => <ComboboxDemo /> },
  { id: "input", label: "Input", description: "Text field variants.", render: () => <InputDemo /> },
  { id: "line-graph", label: "Line Graph", description: "Area chart built on Recharts.", render: () => <LineGraphDemo /> },
  { id: "pagination", label: "Pagination", description: "Page navigation control.", render: () => <PaginationDemo /> },
  { id: "progress", label: "Progress", description: "Determinate progress bar.", render: () => <ProgressDemo /> },
  { id: "select", label: "Select", description: "Dropdown selection.", render: () => <SelectDemo /> },
  { id: "sonner", label: "Sonner", description: "Success and error toast notifications.", render: () => <SonnerDemo /> },
  { id: "spinner", label: "Spinner", description: "Loading indicator.", render: () => <SpinnerDemo /> },
  { id: "switch", label: "Switch", description: "Toggle control.", render: () => <SwitchDemo /> },
  { id: "tabs", label: "Tabs", description: "Tabbed content panels.", render: () => <TabsDemo /> },
  { id: "tooltip", label: "Tooltip", description: "Contextual hint on hover.", render: () => <TooltipDemo /> },]

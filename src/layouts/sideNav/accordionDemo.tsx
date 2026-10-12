import { AccordionComponent, type AccordionItemData } from "@/components/ui/Accordion";
import DemoRow from "./demoRow";

const items: AccordionItemData[] = [
  {
    value: "shipping",
    title: "Shipping & delivery",
    content: "Orders are dispatched within 24 hours and delivered in 3-5 business days.",
  },
  {
    value: "returns",
    title: "Returns & refunds",
    content: "Return any unused item within 30 days for a full refund.",
  },
  {
    value: "warranty",
    title: "Warranty (coming soon)",
    content: "Extended warranty details will be published shortly.",
    disabled: true,
  },
];

const AccordionDemo = () => (
  <DemoRow>
    <section className="flex w-full max-w-sm flex-col gap-4">
      <h2 className="text-sm font-medium">Basic</h2>
      <AccordionComponent type="single" collapsible items={items} />
    </section>
    <section className="flex w-full max-w-sm flex-col gap-4">
      <h2 className="text-sm font-medium">Bordered</h2>
      <AccordionComponent type="single" collapsible variant="border" items={items} />
    </section>
  </DemoRow>
);

export default AccordionDemo;

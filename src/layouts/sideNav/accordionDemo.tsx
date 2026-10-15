import { AccordionComponent, type AccordionItemData } from "@/components/ui/Accordion";

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
  <div className="grid gap-10 md:grid-cols-2">
    <AccordionComponent type="single" collapsible items={items} />

    <AccordionComponent
      type="single"
      collapsible
      variant="border"
      defaultValue="shipping"
      items={items}
    />
  </div>
);

export default AccordionDemo;

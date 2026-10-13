import type { ReactNode } from "react";
import { AccordionComponent, type AccordionItemData } from "@/components/ui/Accordion";

const Section = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) => (
  <section className="flex flex-col gap-3">
    <div className="flex flex-col gap-0.5">
      <h2 className="text-sm font-semibold text-slate-500">{title}</h2>
      {description ? (
        <p className="text-xs text-slate-400">{description}</p>
      ) : null}
    </div>
    {children}
  </section>
);

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
    <Section
      title="Single · Basic"
      description="One section at a time; collapsible lets you close the open one."
    >
      <AccordionComponent type="single" collapsible items={items} />
    </Section>

    <Section
      title="Single · Border"
      description="Same behaviour, wrapped in an outlined container."
    >
      <AccordionComponent
        type="single"
        collapsible
        variant="border"
        defaultValue="shipping"
        items={items}
      />
    </Section>

    <Section
      title="Multiple · Basic"
      description="Any number of sections can stay open at once."
    >
      <AccordionComponent
        type="multiple"
        defaultValue={["shipping"]}
        items={items}
      />
    </Section>

    <Section
      title="Multiple · Border"
      description="Starts with two sections expanded."
    >
      <AccordionComponent
        type="multiple"
        variant="border"
        defaultValue={["shipping", "returns"]}
        items={items}
      />
    </Section>
  </div>
);

export default AccordionDemo;

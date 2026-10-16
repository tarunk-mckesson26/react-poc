import type { ReactNode } from "react";
import { CardComponent } from "@/components/ui/card";

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

const CardDemo = () => (
  <div className="grid gap-10 md:grid-cols-2">
    <Section
      title="Default · Title and subheading"
      description="Title, description and a string body."
    >
      <CardComponent
        title="Monthly report"
        description="Summary of September activity."
      >
        Revenue grew by 12% compared to the previous month, driven mostly by
        returning customers.
      </CardComponent>
    </Section>

    <Section
      title="Small · Custom JSX content"
      description="No title or description, only children passed."
    >
      <CardComponent size="sm">
        <p className="text-sm leading-5 text-[#6e6e6e]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </CardComponent>
    </Section>
  </div>
);

export default CardDemo;

import { useState, type ReactNode } from "react";
import {
  PaginationComponent,
  type PaginationComponentProps,
} from "@/components/ui/Pagination";

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

type PreviewProps = Omit<
  PaginationComponentProps,
  "currentPage" | "onPageChange"
> & { initialPage?: number };

/** Keeps each example independently interactive instead of frozen on one page. */
const PaginationPreview = ({ initialPage = 1, ...props }: PreviewProps) => {
  const [page, setPage] = useState(initialPage);
  return (
    <PaginationComponent currentPage={page} onPageChange={setPage} {...props} />
  );
};

const PaginationDemo = () => (
  <div className="flex flex-col gap-10">
    <Section
      title="Default"
      description="12 pages; the range collapses to ellipses as you move through it."
    >
      <PaginationPreview totalItems={120} itemsPerPage={10} />
    </Section>

    <Section
      title="Short range"
      description="Five pages or fewer render every number, with no ellipsis."
    >
      <PaginationPreview totalItems={50} itemsPerPage={10} />
    </Section>

    <Section
      title="Single page"
      description="Rendered by default; hideOnSinglePage removes it entirely."
    >
      <PaginationPreview totalItems={8} itemsPerPage={10} />
      <PaginationPreview totalItems={8} itemsPerPage={10} hideOnSinglePage />
    </Section>
  </div>
);

export default PaginationDemo;
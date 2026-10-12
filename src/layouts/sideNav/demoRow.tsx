import type { ReactNode } from "react";

const DemoRow = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-wrap items-center gap-3">{children}</div>
);

export default DemoRow;
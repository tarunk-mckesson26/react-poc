import { useState } from "react";
import { PaginationComponent } from "@/components/ui/Pagination";

const PaginationDemo = () => {
  const [page, setPage] = useState(1);

  return (
    <PaginationComponent
      totalItems={120}
      itemsPerPage={10}
      currentPage={page}
      onPageChange={setPage}
    />
  );
};

export default PaginationDemo;
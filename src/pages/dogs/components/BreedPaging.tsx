import React from "react";
import { Button } from "../../../ui-toolkit/components/Button/Button";
import { PagingContext } from "../../../ui-toolkit/hooks/usePaging";

interface Props {
  paging: PagingContext;
}

const PAGE_NUM_RANGE = 3;

export function BreedPaging({ paging }: Props) {
  return (
    <div className="btn-group">
      <Button
        variant="outline"
        type="button"
        disabled={paging.currentPage <= 1}
        onClick={(e) => {
          paging.goBack();
        }}
      >
        Prev
      </Button>
      {Array.from(Array(PAGE_NUM_RANGE * 2 + 1), (val, index) => {
        let pageNumber = paging.currentPage - PAGE_NUM_RANGE + index;
        if (pageNumber < 1 || pageNumber > paging.totalPages) return null;
        return (
          <Button
            key={pageNumber}
            type="button"
            variant={paging.currentPage === pageNumber ? "filled" : "outline"}
            onClick={(e) => {
              paging.goTo(pageNumber);
            }}
          >
            {pageNumber}
          </Button>
        );
      })}
      <Button
        variant="outline"
        type="button"
        disabled={paging.currentPage >= paging.totalPages}
        onClick={(e) => {
          paging.goForward();
        }}
      >
        Next
      </Button>
    </div>
  );
}

import React from "react";
import { Pagination } from "@mui/material";
import styled from "styled-components";
import { FunctionComponent } from "react";

type TProps = {
  pageNumber: number;
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
};

const WrapperModule = styled.div`
  .css-yx0nvq-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    background-color: orange;
  }
  .MuiButtonBase-root {
    font-size: 1.5rem;
    font-weight: bold;
    > svg {
      font-size: 2.5rem;
    }
  }
`;

const PaginateDemo: FunctionComponent<TProps> = ({
  pageNumber,
  activePage,
  setActivePage,
}) => (
  <WrapperModule>
    <Pagination
      count={pageNumber}
      defaultPage={1}
      size="large"
      siblingCount={1}
      boundaryCount={2}
      shape="rounded"
      showFirstButton
      showLastButton
      onChange={(e, page) => {
        setActivePage(page);
      }}
    />
  </WrapperModule>
);

export default PaginateDemo;

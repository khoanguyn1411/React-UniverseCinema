import { Pagination } from "@mui/material";
import React, { FunctionComponent, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

interface IFilterInfo {
  title: string;
  routeAPI: string;
  root: string;
}

type TProps = {
  pageNumber: number;
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  filterInfo: IFilterInfo;
};

const WrapperModule = styled.div`
  .Mui-selected {
    background-color: var(--yellow-color) !important;
  }
  .MuiButtonBase-root {
    font-size: 1.5rem;
    font-weight: bold;
    > svg {
      font-size: 2.5rem;
    }
  }
  .MuiPagination-ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const AppPagination: FunctionComponent<TProps> = ({
  pageNumber,
  activePage,
  setActivePage,
  filterInfo,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSwitchPage = (e: React.ChangeEvent<unknown>, page: number) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (activePage !== 1) {
      searchParams.set("page", `${activePage}`);
    } else {
      searchParams.delete("page");
    }
    setSearchParams(searchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage]);

  return (
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
        page={activePage}
        onChange={handleSwitchPage}
      />
    </WrapperModule>
  );
};

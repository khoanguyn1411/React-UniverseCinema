import { Pagination } from "@mui/material";
import React, { FunctionComponent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();
  const { category } = useParams();
  const handleSwitchPage = (e: React.ChangeEvent<unknown>, page: number) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    navigate(
      `/${category}${filterInfo.root}${
        activePage !== 1 ? "/" + activePage : ""
      }`
    );
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

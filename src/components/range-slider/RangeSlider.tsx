import { Slider } from "@mui/material";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

type TProps = {
  range: number[];
  setRange: React.Dispatch<React.SetStateAction<number[]>>;
  minDistance: number;
  marks?: any;
  lableShow: string;
  minMax: number[];
  step: number;
  lableShowSuffix?: string;
};

const WrapperModule = styled.div`
  * {
    box-shadow: none !important;
  }

  .MuiSlider-thumb {
    background-color: var(--yellow-color);
  }

  .Mui-active {
    background-color: var(--yellow-color);
  }

  .MuiSlider-track {
    background-color: var(--black-color);
    color: black !important;
  }
  .MuiSlider-valueLabel {
    background-color: var(--black-color);
  }
  .MuiSlider-rail {
    background-color: var(--black-color);
  }
  .MuiSlider-markLabel {
    font-size: 1.5rem;
  }
  .MuiSlider-mark {
    background-color: var(--black-color);
  }
`;
export const RangeSlider: FunctionComponent<TProps> = ({
  range,
  setRange,
  minDistance,
  marks,
  lableShow,
  minMax,
  step,
  lableShowSuffix = "",
}) => {
  function valueLabelFormat(value: number) {
    return `${lableShow}: ${value}${lableShowSuffix}`;
  }
  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setRange([Math.min(newValue[0], range[1] - minDistance), range[1]]);
    } else {
      setRange([range[0], Math.max(newValue[1], range[0] + minDistance)]);
    }
  };
  return (
    <WrapperModule>
      <div className="p-[1rem]">
        <Slider
          min={minMax[0]}
          max={minMax[1]}
          value={range}
          onChange={handleChange}
          valueLabelDisplay="auto"
          marks={marks}
          step={step}
          valueLabelFormat={valueLabelFormat}
        />
      </div>
    </WrapperModule>
  );
};

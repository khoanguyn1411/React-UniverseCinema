import { icArrowDown, Icon } from "@/assets/icons";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import classNames from "classnames";

interface IActive {
  title: string;
  param: string;
}

type TProps = {
  list: IActive[];
  active: IActive;
  setActive: React.Dispatch<React.SetStateAction<IActive>>;
  onChange?: () => void;
};

export const SelectWithURL: FunctionComponent<TProps> = ({
  list,
  active,
  setActive,
  onChange,
}) => {
  const [isShowContent, setIsShowContent] = useState<Boolean>(false);
  const listRef = useRef(null);
  const displayRef = useRef(null);

  useEffect(() => {
    const elementList = listRef?.current;
    const elementDisplay = displayRef?.current;
    if (elementList && elementDisplay) {
      const handleCloseListDiv = (event: Event) => {
        if (
          !elementList.contains(event.target) &&
          !elementDisplay.contains(event.target)
        ) {
          setIsShowContent(false);
        }
      };
      window.addEventListener("click", handleCloseListDiv);
      return () => {
        window.removeEventListener("click", handleCloseListDiv);
      };
    }
  }, [isShowContent]);

  const handleSetSelectedItem = (item: IActive) => {
    setActive(item);
    setIsShowContent(false);
  };
  const handleToggleContent = () => {
    setIsShowContent(!isShowContent);
  };

  useEffect(() => {
    onChange && onChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div>
      <select className="hidden">
        {list.map((item, index: number) => (
          <option key={index}>{item.title}</option>
        ))}
      </select>

      <div className="relative select-none">
        {/* Display */}
        <div
          ref={displayRef}
          onClick={handleToggleContent}
          className="w-full flex cursor-pointer bg-grey justify-between items-center p-[1rem] rounded-[0.5rem]"
        >
          <h1>{active.title}</h1>
          <Icon icon={icArrowDown} />
        </div>
        {/* List */}
        {isShowContent && (
          <div
            ref={listRef}
            className="absolute z-10 max-h-[20rem] overflow-auto bg-white border-[0.15rem] border-black w-full mt-[0.5rem] rounded-[0.5rem]"
          >
            {list.map((item: IActive, index: number) => (
              <div
                key={index}
                onClick={() => handleSetSelectedItem(item)}
                className={classNames(
                  "p-[1rem] cursor-pointer hover:bg-grey transition-all hover:transition-all",
                  {
                    "font-bold": item.title === active.title,
                    "rounded-t-[0.3rem]": index === 0,
                    "rounded-b-[0.3rem]": index === list.length - 1,
                  }
                )}
              >
                <h1>{item.title}</h1>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

import { FC, StrictMode } from "react";
import { GridProps } from "@components/molecules/GridTable/index";

type GridTablePresenterProps = {
  gridProps: GridProps[];
};
export const GridTablePresenter: FC<GridTablePresenterProps> = ({
  gridProps,
}) => {
  return (
    <div className={"grid grid-cols-4 flex"}>
      {gridProps.map((g, index) => {
        return (
          <StrictMode key={`gridTable${index}`}>
            <div className={"border-2 p-4"}>{g.label}</div>
            <div className={"border-2 p-4 col-span-3 "}>{g.components}</div>
          </StrictMode>
        );
      })}
    </div>
  );
};

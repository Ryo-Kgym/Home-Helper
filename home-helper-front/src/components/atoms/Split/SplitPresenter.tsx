import Split from "react-split";
import { FC, ReactElement } from "react";

type SplitPresenterProps = {
  first: ReactElement;
  second: ReactElement;
  size?: number;
};
export const SplitPresenter: FC<SplitPresenterProps> = ({
  first,
  second,
  size = 50,
}) => (
  <Split
    className="flex"
    gutter={() => {
      const gutterElement = document.createElement("div");
      gutterElement.className = `w-[3px] bg-zinc-900 hover:cursor-col-resize hover:w-2 hover:bg-zinc-900 transition-all delay-100 duration-100 ease-in-out`;
      return gutterElement;
    }}
    // デフォルトのガター幅を無効にするために指定
    gutterStyle={() => ({})}
    sizes={[size, 100 - size]}
  >
    <div className="flex items-center justify-center">{first}</div>
    <div className="flex items-center justify-center">{second}</div>
  </Split>
);

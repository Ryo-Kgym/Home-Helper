import { FC } from "react";
import Countup from "react-countup";
import Image from "next/image";
import piggy from "@public/piggy_bank.svg";

type PossessionPointPresenterProps = {
  userName: string;
  currentPoint: number;
};

export const PossessionPointPresenter: FC<PossessionPointPresenterProps> = ({
  userName,
  currentPoint,
}) => {
  return (
    <div className={"grid grid-cols-4"}>
      <div className={"col-span-1"} />
      <div className={"col-span-2"}>
        <Point name={userName} point={currentPoint} />
      </div>
      <div className={"col-span-1"} />
    </div>
  );
};

const Point = ({ name, point }: { name: string; point: number }) => (
  <>
    <div
      style={{
        fontSize: "120px",
        width: "6.1em",
        height: "2.7em",
        position: "relative",
      }}
    >
      <div
        className={
          "flex text-4xl absolute z-10 left-[1em] top-[-0.5em] bg-white"
        }
      >
        {name} の今のポイント
      </div>
      <div
        className={
          "flex border-8 border-double rounded-lg border-black " +
          "text-9xl w-[5.2em] absolute justify-end h-[2.2em] " +
          "pt-[0.5em] pl-[0.01em]"
        }
      >
        <Countup
          end={point}
          duration={1}
          formattingFn={(n) => n.toLocaleString()}
        />
        <div className={"flex text-7xl pt-12 pr-5 pl-5"}>
          {process.env.NEXT_PUBLIC_POINT_UNIT}
        </div>
      </div>
      <div>
        <Image
          src={piggy}
          alt={"piggy"}
          className={"w-32 h-32 absolute bottom-0 right-0"}
        />
      </div>
    </div>
  </>
);

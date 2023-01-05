import { FC } from "react";
import { Flex } from "@mantine/core";
import Countup from "react-countup";
import styles from "./styles.module.scss";
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
    <>
      <Point name={userName} point={currentPoint} />
    </>
  );
};

const Point = ({ name, point }: { name: string; point: number }) => (
  <>
    <Flex className={styles.pointFrame} wrap={"wrap"}>
      <Flex className={styles.pointTitle}>{name} の今のポイント</Flex>
      <Flex className={styles.pointArea}>
        <Countup
          end={point}
          duration={1}
          formattingFn={(n) => n.toLocaleString()}
        />
        <Flex>pt</Flex>
      </Flex>
      <Flex>
        <Image src={piggy} alt={"piggy"} className={styles.piggy} />
      </Flex>
    </Flex>
  </>
);

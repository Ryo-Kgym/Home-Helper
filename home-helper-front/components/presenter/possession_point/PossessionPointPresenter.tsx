import { FC } from "react";
import { Layout } from "@components/presenter/Layout";
import { CardLinkList } from "@components/ui/Card";
import { Flex } from "@mantine/core";
import Countup from "react-countup";
import styles from "./styles.module.scss";
import Image from "next/image";
import piggy from "@public/piggy_bank.svg";

type PossessionPointPresenterProps = {
  name: string;
  point: number;
};

const cardListProps = [
  { href: "/homeHelper", label: "戻る", back: true },
  { href: "/homeHelper/chargePoint", label: "ふやす" },
  { href: "/homeHelper/usePoint", label: "つかう" },
];

export const PossessionPointPresenter: FC<PossessionPointPresenterProps> = (
  props
) => {
  const pointProps = {
    name: props.name,
    point: props.point,
  };

  return (
    <Layout
      main={
        <>
          <Point props={pointProps} />
          <CardLinkList props={cardListProps} />
        </>
      }
    />
  );
};

const Point = ({ props }: { props: { name: string; point: number } }) => (
  <>
    <Flex className={styles.pointFrame} wrap={"wrap"}>
      <Flex className={styles.pointTitle}>{props.name} の今のポイント</Flex>
      <Flex className={styles.pointArea}>
        <Countup
          end={props.point}
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

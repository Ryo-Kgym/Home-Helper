import { HouseHoldLayout } from "@components/atoms/Layout/HouseHoldLayout";
import { FC } from "react";
import { GenreContainer } from "@components/organisms/genre/GenreContainer";

export const Page: FC = () => {
  return (
    <HouseHoldLayout>
      <GenreContainer />
    </HouseHoldLayout>
  );
};

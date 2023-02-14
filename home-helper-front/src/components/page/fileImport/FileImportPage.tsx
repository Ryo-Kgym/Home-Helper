import { HouseHoldLayout } from "@components/atoms/Layout/HouseHoldLayout";
import { FC } from "react";
import { FileImportContainer } from "@components/organisms/file_import/FileImportContainer";

export const Page: FC = () => {
  return (
    <HouseHoldLayout>
      <FileImportContainer />
    </HouseHoldLayout>
  );
};

import { FC } from "react";
import { Button } from "@components/atoms/Button";

type FileImportPresenterProps = {
  importDisabled: boolean;
  registerDisabled: boolean;
  importClickHandler: () => void;
  clearClickHandler: () => void;
  registerClickHandler: () => void;
};
export const FileImportButtonsPresenter: FC<FileImportPresenterProps> = ({
  importDisabled,
  registerDisabled,
  importClickHandler,
  clearClickHandler,
  registerClickHandler,
}) => (
  <div className={"grid"}>
    <div className={"py-2"}>
      <Button
        onClick={importClickHandler}
        disabled={importDisabled}
        colorType={"import"}
      />
      <Button onClick={clearClickHandler} colorType={"clear"} />
      <Button
        onClick={registerClickHandler}
        colorType={"register"}
        disabled={registerDisabled}
      />
    </div>
  </div>
);

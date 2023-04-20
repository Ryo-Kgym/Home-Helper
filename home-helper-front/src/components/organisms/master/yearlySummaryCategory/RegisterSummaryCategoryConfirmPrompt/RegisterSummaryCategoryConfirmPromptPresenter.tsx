import { ConfirmPrompt } from "@components/molecules/ConfirmPrompt";
import { TransferListItem } from "@components/atoms/TransferList";
import { FC } from "react";

type RegisterSummaryCategoryConfirmPromptPresenterProps = {
  opened: boolean;
  onClose: () => void;
  doneClickHandler: () => void;
  selectedCategories: TransferListItem[];
};

export const RegisterSummaryCategoryConfirmPromptPresenter: FC<
  RegisterSummaryCategoryConfirmPromptPresenterProps
> = ({ opened, onClose, doneClickHandler, selectedCategories }) => (
  <ConfirmPrompt
    title={"以下のカテゴリを登録します。"}
    opened={opened}
    onClose={onClose}
    doneOnClickHandler={doneClickHandler}
  >
    <div className={"border-2"}>
      <ul>
        {selectedCategories.map((item) => (
          <li key={item.value}>{item.label}</li>
        ))}
      </ul>
    </div>
  </ConfirmPrompt>
);

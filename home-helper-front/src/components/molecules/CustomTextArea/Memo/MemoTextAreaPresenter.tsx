import { FC } from "react";
import { TextAreaContainer } from "@components/atoms/TextArea/TextAreaContainer";

type MemoTextAreaPresenterProps = {
  memo: string;
  setMemo: (value: string) => void;
};
export const MemoTextAreaPresenter: FC<MemoTextAreaPresenterProps> = ({
  memo,
  setMemo,
}) => <TextAreaContainer label={"Memo"} value={memo} setValue={setMemo} />;

import { TextAreaContainer } from "@components/atoms/TextArea/TextAreaContainer";

type MemoTextAreaPresenterProps = {
  memo: string;
  setMemo: (_: string) => void;
};
export const MemoTextAreaPresenter = ({
  memo,
  setMemo,
}: MemoTextAreaPresenterProps) => (
  <TextAreaContainer label={"Memo"} value={memo} setValue={setMemo} />
);

import { LinkList, LinkProps } from "@components/atoms/Card";
import { LoginStatus } from "@components/molecules/LoginStatus";

type TopPresenterProps = {
  linkListProps: LinkProps[];
};

export const TopPresenter = ({ linkListProps }: TopPresenterProps) => {
  return (
    <>
      <LoginStatus />
      <LinkList props={linkListProps} />
    </>
  );
};

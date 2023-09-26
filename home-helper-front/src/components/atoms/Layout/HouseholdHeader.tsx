import { HouseholdMenu } from "@components/molecules";
import { LoginStatus } from "@components/molecules/LoginStatus";

export const HouseholdHeader = () => {
  return (
    <div>
      <div className={"grid grid-cols-2 md:hidden"}>
        <HouseholdMenu defaultOpened={false} />
        <LoginStatus />
      </div>
      <div className={"grid grid-cols-2 max-md:hidden"}>
        <div className={"font-bold text-3xl"}>家計簿アプリ</div>
        <LoginStatus />
      </div>
    </div>
  );
};

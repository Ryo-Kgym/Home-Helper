import { useRecoilState } from "recoil";
import { groupState } from "@recoil/groupState";

export const useGroup = () => {
  const [group, setGroup] = useRecoilState(groupState);

  const save = (group: { id: string; name: string }) => {
    setGroup(group);
  };
  return { id: group.id, name: group.name, save };
};

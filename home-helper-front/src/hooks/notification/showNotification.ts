import { showNotification as mShowNotification } from "@mantine/notifications";
import { NotificationProps } from "@mantine/notifications/lib/types";

export function showNotification(props: NotificationProps) {
  return mShowNotification(props);
}

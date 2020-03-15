
import { notification } from "antd";

export const openAlertNotification = (inputName, msg) => {
  notification.warning({
    message: `Invalid ${inputName}`,
    description: msg,
  });
};
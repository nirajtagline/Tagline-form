import toast from "react-hot-toast";

export const showToast = (
  message = "Something went wrong! Try again later",
  messageType = "error",
  position = "top-right",
  reverseOrder = true,
) =>
  toast(message, {
    position,
    reverseOrder,
    type: messageType,
  });

import Toast from "react-native-toast-message";
type ToastProps = {
  message: string;
  message2?: string;
  type: "success" | "error";
  position?: "top" | "bottom";
};

export const showToast = ({
  message,
  message2,
  type,
  position = "top",
}: ToastProps) => {
  Toast.show({
    type,
    text1: message,
    text2: message2,
    position,
  });
};
import Toast from "react-native-toast-message";
type ToastProps = {
  message: string;
  message2?: string;
  type: "success" | "error";
};

export const showToast = ({
  message,
  message2,
  type,
}: ToastProps) => {
  Toast.show({
    type: type,
    text1: message,
    text2: message2
  });
};
import { Alert } from "flowbite-react";

const AlertComponent = ({ type, message, onDismiss }) => {
  return (
    <Alert color={type || "success"} onDismiss={onDismiss}>
      <span className="font-medium">{message}</span>
    </Alert>
  );
};

export default AlertComponent;

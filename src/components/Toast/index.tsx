import React from "react";
import { ToastMessage } from "../../context/ToastContext";

import ToastTwo from "./ToastTwo";

import { Container } from "./styles";

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => (
        <ToastTwo key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;

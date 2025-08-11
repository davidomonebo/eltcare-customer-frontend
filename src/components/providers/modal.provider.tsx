"use client";
import React from "react";
import ReactDOM from "react-dom";
import { useAuthContext } from "./auth.provider";
import { useQueryClient } from "@tanstack/react-query";

interface IModalContext {
  modal?: React.ReactNode;
  setModal: React.Dispatch<React.SetStateAction<IModalContext["modal"]>>;
}

const ModalContext = React.createContext<null | IModalContext>(null);
export const useModalContext = () => React.useContext(ModalContext)!;

export default function ModalProvider(properties: React.PropsWithChildren) {
  const client = useQueryClient();
  const { logged } = useAuthContext();

  const [modal, setModal] = React.useState<IModalContext["modal"]>();

  React.useEffect(() => {
    client.setDefaultOptions({ queries: { enabled: !!logged } });
  }, [logged, client]);

  const renderModal = () => {
    if (typeof window === "undefined") return null;
    const portalElement = document.querySelector("#portal")!;

    return ReactDOM.createPortal(modal, portalElement);
  };

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {renderModal()}
      {properties.children}
    </ModalContext.Provider>
  );
}

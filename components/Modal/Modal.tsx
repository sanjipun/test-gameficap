import React from "react";

type ModalProps = {
  children: React.ReactNode;
  showModal: boolean;
  hideModal: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, showModal, hideModal }) => {
  return (
    <div id="modal" className="px-4 text-primary">
      <div
        className={`max-w-580 max-h-580 w-full ${
          showModal ? "z-50 opacity-100" : "opacity-0 -z-50"
        } overflow-scroll transition-all duration-700 ease-in-out
      fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 p-5 md:p-10 rounded-lg bg-white
    `}
      >
        <div className="relative z-10">{children}</div>
      </div>
      <div
        onClick={hideModal}
        className={`bg-black bg-opacity-40 ${
          showModal ? "opacity-100 z-40" : "opacity-0 -z-50"
        } h-full w-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out`}
      ></div>
    </div>
  );
};

export default Modal;

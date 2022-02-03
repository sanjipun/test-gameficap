import React from 'react';

type ModalProps = {
  children: React.ReactNode;
  showModal: boolean;
};

const Modal: React.FC<ModalProps> = ({ children, showModal }) => {
  return (
    <div>
      <div
        className={`${
          showModal ? 'opacity-100' : 'opacity-0'
        } overflow-hidden transition-all duration-700 ease-in-out
      fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 p-5 md:p-10 rounded-lg bg-white
    `}>
        <div className="relative z-10">{children}</div>
      </div>
      <div
        className={`bg-black bg-opacity-40 ${
          showModal ? 'opacity-100' : 'opacity-0'
        } h-full w-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-50 transition-all duration-700 ease-in-out`}></div>
    </div>
  );
};

export default Modal;

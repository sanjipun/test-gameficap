import { useToast } from '@store/Toast.store';
import { NextPage } from 'next';
import React from 'react';

const Toast: NextPage = () => {
  const { showToast, type, toastMessage } = useToast();
  return (
    <div
      id="toast"
      className={`${
        type === 'success' ? 'bg-green-500' : type === 'fail' ? 'bg-red-500' : 'bg-yellow-500'
      } max-w-sm w-full transform transition-all duration-700 ease-in-out ${
        showToast ? 'opacity-100 translate-y-1' : 'opacity-0 -translate-y-16'
      } right-0 left-0 mx-auto absolute rounded-md px-2 py-1`}>
      {toastMessage}
    </div>
  );
};

export default Toast;

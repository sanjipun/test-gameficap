import React from 'react';

interface ViewAllTagsProps {
  children: React.ReactNode;
}

const ViewAllTags: React.FC<ViewAllTagsProps> = ({ children }) => {
  return (
    <h3 className="px-4 cursor-pointer py-1 m-2 capitalize hover:bg-slate-500 hover:text-white bg-white border border-solid rounded">
      {children}
    </h3>
  );
};

export default ViewAllTags;

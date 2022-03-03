import React from "react";
import { CgProfile } from "react-icons/cg";

interface CommentsProps {
  data: {
    fullName: string;
    date: string;
    id: number;
    comment: string;
  };
}

const Comments: React.FC<CommentsProps> = ({ data }) => {
  return (
    <div className="my-8">
      <h1 className="flex font-semibold">
        <CgProfile className="w-6 h-6 mr-4" />
        {data.fullName}
      </h1>
      <p className="mt-3 text-sm leading-5">{data.comment}</p>
      <p className="mt-3 text-3C454A text-sm">{data.date}</p>
    </div>
  );
};

export default Comments;

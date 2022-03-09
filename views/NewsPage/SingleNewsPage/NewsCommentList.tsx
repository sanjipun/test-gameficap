import Comments from "@components/Comments";
import { COMMENTS } from "@constants/COMMENTS";
import React from "react";

interface NewsCommentListProps {}

const NewsCommentList: React.FC<NewsCommentListProps> = () => {
  return (
    <section id="slug-title-comments" className="bg-FAFAFA">
      <div className="max-w-1440 mx-auto px-52 py-14">
        <h1 className="text-2xl text-primary mb-5 leading-47 font-semibold">Comments (14)</h1>
        {COMMENTS.map((comment) => (
          <Comments key={comment.id} data={comment} />
        ))}
        <button className="p-3 border rounded-lg">View more comments</button>
      </div>
    </section>
  );
};

export default NewsCommentList;

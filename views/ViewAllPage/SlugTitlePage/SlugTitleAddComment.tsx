import React from "react";

const SlugTitleAddComment = () => {
  return (
    <section className="bg-FAFAFA">
      <div className="max-w-1440 mx-auto px-20 py-14">
        <h1 className="text-2xl text-primary mb-5">Leave a comment</h1>
        <input type="text" placeholder="Full Name" className="w-full bg-F4F5F7 px-9 py-6" />
        <textarea placeholder="Type Comment" className="w-full bg-F4F5F7 h-40 mt-7 px-9 py-6" />
        <div className="w-full flex justify-end">
          <button className="bg-94A2AB px-8 py-4 rounded text-white mt-6">Submit Comment</button>
        </div>
      </div>
    </section>
  );
};

export default SlugTitleAddComment;

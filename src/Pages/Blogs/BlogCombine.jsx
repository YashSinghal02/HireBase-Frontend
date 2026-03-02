import React from "react";
import LeftBlogs from "./LeftBlogs";
import RightBlogs from "./RightBlogs";
import "./BlogCombine.css";

function BlogCombine() {
  return (
    <section className="blog-combine">
      <div className="blog-wrapper">
        <LeftBlogs />
        <RightBlogs />
      </div>
    </section>
  );
}

export default BlogCombine;
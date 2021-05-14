import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = (props) => {
  const id = props.match.params.id;
  const [blog, setBlog] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="jumbotron my-5">
      <h1 className="display-4 text-center">{blog.title}</h1>
      <p className="lead my-3">{blog.body}</p>
      <hr className="my-4" />

      <p className="lead text-center">
        <Link
          to={`/edit/${blog._id}`}
          style={{ width: "fit-content" }}
          className="btn btn-secondary"
        >
          Edit Blog
        </Link>
      </p>
    </div>
  );
};

export default Blog;

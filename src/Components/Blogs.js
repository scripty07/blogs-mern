import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const minify = (str) => {
  return str.split(" ").slice(0, 15).join(" ");
};

const Card = ({ blog, deleteBlog }) => {
  return (
    <div className="card text-center m-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <p className="card-text">{minify(blog.body)}</p>
        <Link to={`/${blog._id}`} className="btn m-2 btn-sm btn-primary">
          Read More
        </Link>
        <span
          onClick={() => deleteBlog(blog._id)}
          href="/"
          className="btn m-2 btn-sm btn-danger"
        >
          Delete
        </span>
      </div>
    </div>
  );
};

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const deleteBlog = (id) => {
    if (window.confirm("Want to delete this blog ?")) {
      axios
        .delete(`http://localhost:5000/blogs/delete/${id}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));

      setBlogs((val) => val.filter((el) => el._id !== id));
    }
  };

  useEffect(() => {
    axios.get("http://localhost:5000/blogs").then((data) => {
      console.log(data.data);
      setBlogs(data.data);
    });
  }, []);
  return (
    <div className="card-columns my-5 d-flex flex-wrap">
      {blogs.length > 0 &&
        blogs.map((blog) => (
          <Card blog={blog} deleteBlog={deleteBlog} key={blog._id} />
        ))}
    </div>
  );
};

export default Blogs;

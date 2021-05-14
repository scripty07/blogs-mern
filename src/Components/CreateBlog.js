import React, { useEffect, useRef } from "react";
import axios from "axios";

const CreateBlog = (props) => {
  let url = "http://localhost:5000/blogs/add";
  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (props.match.params.id) {
      axios
        .get(`http://localhost:5000/blogs/${props.match.params.id}`)
        .then((res) => {
          let blog = res.data;
          titleRef.current.value = blog.title;
          bodyRef.current.value = blog.body;
        })
        .catch((err) => console.log(err));
      url = `http://localhost:5000/blogs/update/${props.match.params.id}`;
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const blog = {
      title: titleRef.current.value,
      body: bodyRef.current.value,
    };

    axios
      .post(url, blog)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    window.location = "/";
  };

  return (
    <form className="my-5">
      <div className="form-group my-2">
        <label>Blog Title</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Title"
          ref={titleRef}
        />
      </div>
      <div className="form-group my-2">
        <label>Blog Data</label>
        <textarea
          className="form-control"
          placeholder="Enter Body"
          ref={bodyRef}
        ></textarea>
      </div>
      <button onClick={onSubmit} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreateBlog;

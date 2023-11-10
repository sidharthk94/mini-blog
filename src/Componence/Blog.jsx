import axios from "axios";
import "./Blog.css";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setBlogs(response?.data);
    };
    getData();
  }, []);
  return (
    <div>
        <div className="navbar">
            <div className="lonoName">
                <img src="/logo.png" alt="" className="logo" />
                <div>
                    <h1>HealthifY</h1>
                </div>
            </div>
            <div className="extraOptions">
                <div>Start Here</div>
                <div>Popular</div>
                <div>Magazine</div>
                <div>Write for Us</div>
            </div>
            <div className="sing">
                <h4>Sign In</h4>
                <h4>Sign Up</h4>
            </div>
        </div>
      <div className="blog">
        <div className="blogContent">
          <h2>
            Exploring 100 Human Disease: Insights from Qui Qui Voluptates Illo Iste
            Minima and Id Minus Libero Illum Nam Ad Officiis
          </h2>
          <p>
            In the vast landscape of human emotions and experiences, we often
            find ourselves entangled in the intricacies of desire, satisfaction,
            and the pursuit of fulfillment. This exploration is magnificently
            portrayed in two thought-provoking pieces of literature: "Qui Qui
            Voluptates Illo Iste Minima" and "Id Minus Libero Illum Nam Ad
            Officiis."
          </p>
          {blogs?.map((items, index) => (
            <div>
              <h3>
                {index + 1}. {items.title}
              </h3>
              <div>{items.body}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

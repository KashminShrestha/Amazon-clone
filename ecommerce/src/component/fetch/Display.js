import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import DataFetch from "./DataFetch";

const Display = () => {
  const [posts, SetPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        SetPost(json);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {posts.map((post, i) => {
          return <DataFetch p={post} key={i} />;
        })}
      </div>
      <Footer />
    </>
  );
};

export default Display;

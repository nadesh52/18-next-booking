"use client";
import React, { useEffect, useState } from "react";
import Title from "./Title";

type Post = {
  id: string;
  title: string;
  body: string;
};

const Review = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isOpen, setIsOpen] = useState<any>({});

  const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await res.json();

    setPosts(jsonData);
    console.log(jsonData[0].body.length);
  };

  function toggleFunction(id: any) {
    setIsOpen({
      ...isOpen,
      [id]: !isOpen[id],
    });
  }

  const showText = (post: any) => {
    if (post.body.length > 150) {
      if (!isOpen[post.id]) {
        return (
          <>
            <span>{post.body.slice(0, 150)}...</span>
            <button onClick={() => toggleFunction(post.id)}>
              <span className="font-bold hover:underline hover:text-primary">
                show more
              </span>
            </button>
          </>
        );
      } else {
        return (
          <>
            <p>{post.body}</p>
            <button onClick={() => toggleFunction(post.id)}>
              <p className="font-bold hover:underline hover:text-primary">
                show less
              </p>
            </button>
          </>
        );
      }
    }
    return <p>{post.body}</p>;
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Title>Reviews</Title>
      {posts.map((p, i) => (
        <div key={i} className="border rounded-lg my-4 py-2 px-4">
          <p className="font-medium text-2xl mb-2 line-clamp-1 sm:line-clamp-none ">
            {p.title}
          </p>
          <div>{showText(p)}</div>
        </div>
      ))}
    </>
  );
};

export default Review;

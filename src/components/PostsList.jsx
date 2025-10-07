import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostList.module.css";

// import { useEffect, useState } from "react";

function PostsList() {
  // const [posts, setPosts] = useState([]);
  // const [isFetching, setIsFetching] = useState(false);

  const posts = useLoaderData();

  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true);
  //     // const response = await fetch("http://localhost:8080/posts");
  //     // const resData = await response.json();

  //     if(!response) {
  //      //error bla bla bla
  //     }

  //     setPosts(resData.posts);
  //     setIsFetching(false);
  //   }

  //   fetchPosts();
  // }, []);

  // function addPostHandler(postData) {
  //   fetch("http://localhost:8080/posts", {
  //     method: "POST",
  //     body: JSON.stringify(postData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   setPosts((prevState) => [postData, ...prevState]);
  // }

  return (
    <>
      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post id={post.id} key={post.id} author={post.author} text={post.body} />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}

      {/* {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          Loading posts...
        </div>
      )} */}
    </>
  );
}

export default PostsList;

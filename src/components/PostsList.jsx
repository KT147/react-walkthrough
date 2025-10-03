import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";
import { useEffect, useState } from "react";

function PostsList(props) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();

      if(!response) {
       //error bla bla bla
      }

      setPosts(resData.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((prevState) => [postData, ...prevState]);
  }

  return (
    <>
      {props.isPosting && (
        <Modal onClose={props.onStopPosting}>
          <NewPost onCancel={props.onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isFetching && posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} text={post.body} />
          ))}
        </ul>
      ) : (
        !isFetching && (
          <div style={{ textAlign: "center", color: "white" }}>
            <h2>There are no posts yet.</h2>
            <p>Start adding some!</p>
          </div>
        )
      )}

      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          Loading posts...
        </div>
      )}
    </>
  );
}

export default PostsList;

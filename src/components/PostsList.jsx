import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

function PostsList() {

  const [writtenText, setWrittenText] = useState();
  const [writtenAuthor, setWrittenAuthor] = useState()

  function changeTextHandler(event) {
    setWrittenText(event.target.value);
  }

  function changeAuthorHandler(event) {
    setWrittenAuthor(event.target.value);
  }

  return (
    <>
      <NewPost onTextChange={changeTextHandler} onAuthorChange={changeAuthorHandler}/>
      <ul className={classes.posts}>
        <Post author={writtenAuthor} text={writtenText} />
        <Post author="aa" text="aa" />
      </ul>
    </>
  );
}

export default PostsList;

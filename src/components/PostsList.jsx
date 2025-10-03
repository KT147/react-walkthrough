import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";

function PostsList(props) {
  const [writtenText, setWrittenText] = useState();
  const [writtenAuthor, setWrittenAuthor] = useState();


  function changeTextHandler(event) {
    setWrittenText(event.target.value);
  }

  function changeAuthorHandler(event) {
    setWrittenAuthor(event.target.value);
  }

  return (
    <>
      {props.isPosting && <Modal onClose={props.onStopPosting}>
        <NewPost
          onTextChange={changeTextHandler}
          onAuthorChange={changeAuthorHandler}
        />
      </Modal>}

      <ul className={classes.posts}>
        <Post author={writtenAuthor} text={writtenText} />
        <Post author="aa" text="aa" />
      </ul>
    </>
  );
}

export default PostsList;

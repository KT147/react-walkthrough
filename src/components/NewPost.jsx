
import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost(props) {

  const [writtenText, setWrittenText] = useState();
  const [writtenAuthor, setWrittenAuthor] = useState();


  function changeTextHandler(event) {
    setWrittenText(event.target.value);
  }

  function changeAuthorHandler(event) {
    setWrittenAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault()
    const postData ={
      body: writtenText,
      author: writtenAuthor
    }
    props.onAddPost(postData)
    props.onCancel()
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeTextHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
      <p className={classes.actions}>
        <button onClick={props.onCancel} type='button'>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;

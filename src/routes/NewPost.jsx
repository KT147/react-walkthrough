// import { useState } from "react";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Form, Link, redirect } from "react-router-dom";

function NewPost(props) {
  // const [writtenText, setWrittenText] = useState();
  // const [writtenAuthor, setWrittenAuthor] = useState();

  // function changeTextHandler(event) {
  //   setWrittenText(event.target.value);
  // }

  // function changeAuthorHandler(event) {
  //   setWrittenAuthor(event.target.value);
  // }

  // function submitHandler(event) {
  //   event.preventDefault()
  //   const postData ={
  //     body: writtenText,
  //     author: writtenAuthor
  //   }
  //   props.onAddPost(postData)
  //   props.onCancel()
  // }

  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" name="author" id="name" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("/");
}

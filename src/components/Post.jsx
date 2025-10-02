import classes from './Post.module.css'

function Post() {
  return (
    <main className={classes.post}>
        <p className={classes.author}>Author</p>
        <p className={classes.text}>Post Body</p>
    </main>
  )
}

export default Post
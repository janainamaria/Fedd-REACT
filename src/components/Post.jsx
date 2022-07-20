import { format} from 'date-fns'
import { useState } from 'react'
import { Comment } from './Comment'
import styles from './Post.module.css'


export function Post(props){

  const [comments, setcomments] = useState([1,2,])


  console.log(props.content);
  const publicationDateFormatted = format(props.publicationDate , 'dd/MM/yyyy')

  function createNewComment() {
    event.preventDefault()
    setcomments([...comments, comments.length +1])
    console.log(comments);
  }

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
          <strong>{props.author.name}</strong>
          <span>{props.author.role}</span>
        </div>
        </div>

        <time title='' dateTime='2022-06-13 13:37:00'>
          {publicationDateFormatted}
        </time>

      </header>

      <div className={styles.content}>
         {props.content.map(line => {
            if (line.type === 'paragraph') {
              return <p>{line.content}</p>
            }else if(line.type === 'link')
             return <p><a href={line.content}>{line.content}</a></p>
         })}
      </div>

    <form onSubmit={createNewComment} className={styles.comentForm}>
      <strong>Deixe seu feedback:</strong>

      <textarea placeholder='Deixe um comentario'/>


        <footer>
      <button type='submit'>Publicar</button>
        </footer>
    </form>


    <div className={styles.commentList}>
         {comments.map(comment =>{
            return <Comment/>

         })}


    </div>
    </article>
  )
}
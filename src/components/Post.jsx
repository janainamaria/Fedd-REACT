import { format} from 'date-fns'
import { Comment } from './Comment'
import styles from './Post.module.css'


export function Post(props,publicationDate){

  const publicationDateFormatted = format(props.publicationDate , 'dd/MM/yyyy')

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
          <p>Oi pessoal!</p>
          
          <p>Acabei de criar esse projetinho de feed com react! o que você achou? conta aqui. Segue abaixo o link do repositorio no github</p>
          
          <a href="https://github.com/janainamaria/Feed-REACT"><p>Clique aqui para o repositorio no github</p></a>

          <a href="">#Dev</a>{'  '}
          <a href="">#react</a> {'  '}
          <a href="">#Front-end</a> 
      </div>

    <form className={styles.comentForm}>
      <strong>Deixe seu feedback:</strong>

      <textarea placeholder='Deixe um comentario'/>
        <footer>
      <button type='submit'>Publicar</button>
        </footer>
    </form>


    <div className={styles.commentList}>
      <Comment/>
      <Comment/>
      <Comment/>
    </div>
    </article>
  )
}
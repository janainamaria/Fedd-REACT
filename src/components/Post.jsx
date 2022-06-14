import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://avatars.githubusercontent.com/u/87093667?v=4" />
        <div className={styles.authorInfo}>
          <strong>Janaina Maria</strong>
          <span>Desenvolvedora de Front-end</span>
        </div>
        </div>

        <time title='13 de julho as 13hrs' dateTime='2022-06-13 13:37:00'>Publicado há 1 hora</time>
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
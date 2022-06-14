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
          <p>Fala galeraa 👋</p>
          
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          
          <a href=""><p> jane.design/doctorcare</p></a>

          <a href="">#novoprojeto</a>{'  '}
          <a href="">#nlw</a> {'  '}
          <a href="">#rocketseat</a> 
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
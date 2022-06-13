import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
return(
  <div className={styles.comment}>
     <img src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
  
  <div className={styles.commentBox}>
     <div className={styles.commentContent}>
      <header>
        <div className={styles.authorAndTime}>
          <strong>Usuario</strong>
          <time title='13 de julho as 13hrs' dateTime='2022-06-13 13:37:00'>Cerca de 1h atrás</time>
        </div>

        <button title='Deletar comentario'>
          <Trash size={24}/>
        </button>
      </header>

      <p>Muito bom!</p>
    </div>
    <footer>
      <button>
        <ThumbsUp/>
        Aplaudir <span>20</span>
      </button>
    </footer>
  </div>
  </div>
)
}

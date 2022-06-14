import {LinkedinLogo} from "phosphor-react"
import { Avatar } from "./Avatar"
import styles from  './Sidebar.module.css'
export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/87093667?v=4"/>
        <strong>Janaina Maria</strong>
        <span>Desenvolvedora de Front-end</span>
      </div>
      <footer>
        <a href="https://www.linkedin.com/in/janaina-monteiro-015455213/">
          <LinkedinLogo size={20}/>
          Linkedin
        </a>
      </footer>
    </aside>
  )
}
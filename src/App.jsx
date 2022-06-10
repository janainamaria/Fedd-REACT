
import  './global.css'
import styles from './App.module.css'
import { Header } from './components/Header';

export function App() {

  return (
   <div>
     <Header/>
     <div className={styles.wrapper}>
        <aside>
          Sidebar
        </aside>
        <main>
          <Post
          author='Diego moura'
          content=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod eaque inventore, suscipit quaerat quidem ex repellat cumque officia, eius aspernatur consequuntur quisquam, quam nostrum maiores. Harum cumque quae quas eius?'
          />
          <Post
          author='Ana felix'
          content=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod eaque inventore, suscipit quaerat quidem ex repellat cumque officia, eius aspernatur consequuntur quisquam, quam nostrum maiores. Harum cumque quae quas eius?'
          />
        </main>
     </div>
   </div>
      
  )
}

export default App

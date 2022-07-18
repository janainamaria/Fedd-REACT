import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import style from './App.module.css'
import  './global.css'
import { MagnetStraight } from 'phosphor-react';

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: "https://avatars.githubusercontent.com/u/87093667?v=4",
      name: 'janaina maria',
      role:'Desenvolvedora de Front-end',
    },
    content:[
      {type: 'paragraph', content:  'Oi pessoal!'},
      {type: 'paragraph', content:'Acabei de criar esse projetinho de feed com react! o que você achou? conta aqui. Segue abaixo o link do repositorio no github' },
      {type: 'link', content:"https://github.com/janainamaria/Feed-REACT"},
     ], 
     publicationDate: new Date ('2022-18-06 20:00:00')
  },
  {
    id: 2,
    author:{
      avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      name: 'Matheus sobral',
      role:'Desenvolvedor de back-end',
    },
    content:[
      {type: 'paragraph', content:  'Fala galera'},
      {type: 'paragraph', content:'Adorei o projetinho da janaina e queria comentar com vocês, acham que foi necessario? falem aqui comigo!' },
      {type: 'link', content:"https://github.com/janainamaria/Feed-REACT"},
     ], 
     publicationDate: new Date ('2022-19-06 18:00:00')
  },
]


export function App() {

  return (
   <div>
     <Header/>
     <div className={style.wrapper}>
        <aside>
          <Sidebar/>
        </aside>
        <main>
         {posts.map(post=>{
            return <Post/>
         }

         )}
        </main>
     </div>
   </div>
      
  )
}

export default App

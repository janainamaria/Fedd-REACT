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
     publicationDate: new Date(2022, 6, 20)
  },
  {
    id: 2,
    author:{
      avatarUrl: "https://avatars.githubusercontent.com/u/36102609?v=4",
      name: 'Fernando santana',
      role:'Desenvolvedor de back-end',
    },
    content:[
      {type: 'paragraph', content:  'Fala galera'},
      {type: 'paragraph', content:'Adorei o projetinho da janaina! tambem possuo alguns projetinhos. segue o link de um bem legal!! Uma api de vendas' },
      {type: 'link', content:"https://github.com/Fernando01santana/API-VENDAS"},
     ], 
     publicationDate: new Date(2022, 5, 21)
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
           return( 
            <Post
              author={post.author}
              content={post.content}
              publicationDate={post.publicationDate}
            />
            
            )
          }

         )}
        </main>
     </div>
   </div>
      
  )
}

export default App

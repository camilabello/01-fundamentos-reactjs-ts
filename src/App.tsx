import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType} from "./components/Post";

import styles from './App.module.css';

import './global.css';

const posts: PostType [] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/camilabello.png',
      name: 'Camila Schneider Bello',
      role: 'Desenvolvedora'
    },
    content: [
      { type: 'paragraph', content: ' Fala galeraa 👋', },
      { type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É  um projeto que fiz no NLW return, evento da Rocketseat. O nome do projeto é DoctorCare', },
      { type: 'link', content: 'jane.design/doctorcare  🚀' },
    ],
    publishedAt: new Date('2023-04-26 15:35:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educador @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: ' Fala galeraa 👋', },
      { type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É  um projeto que fiz no NLW return, evento da Rocketseat. O nome do projeto é DoctorCare', },
      { type: 'link', content: 'jane.design/doctorcare  🚀' },
    ],
    publishedAt: new Date('2023-04-31 15:35:00'),
  }
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
               post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


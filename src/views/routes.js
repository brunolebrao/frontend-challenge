import { Home, Search, Artist } from 'views'

export const routes = [
  {
    name: 'Home',
    path: '/',
    title: 'Somos Front-end Challange',
    component: Home,
    exact: true,
  },
  {
    name: 'Busca',
    title: 'Procure aqui seu artista aqui',
    path: '/busca',
    component: Search,
    exact: true,
  },
  {
    name: 'Artista',
    title: 'Seu artista escolhido',
    path: '/artista',
    component: Artist,
    exact: true,
  },
]

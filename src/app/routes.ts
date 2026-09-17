import { createBrowserRouter } from 'react-router'
import Root from './Root'
import Home from '../pages/Home'
import Story from '../pages/Story'
import Board from '../pages/Board'
import Partners from '../pages/Partners'
import PartnerDetail from '../pages/PartnerDetail'
import Programs from '../pages/Programs'
import Contact from '../pages/Contact'
import Documents from '../pages/Documents'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'story', Component: Story },
      { path: 'board', Component: Board },
      { path: 'partners', Component: Partners },
      { path: 'partners/:slug', Component: PartnerDetail },
      { path: 'programs', Component: Programs },
      { path: 'contact', Component: Contact },
      { path: 'documents', Component: Documents },
    ],
  },
])

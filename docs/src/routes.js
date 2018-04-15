import QuickStart from './pages/QuickStart.md'
import HamburgerButton from './pages/HamburgerButton.md'

export default [
  { path: '/quick-start', component: QuickStart },
  { path: '/hamburger-button', component: HamburgerButton },
  { path: '*', redirect: '/quick-start' }
]

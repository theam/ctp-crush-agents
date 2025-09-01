import { Outlet, Link } from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

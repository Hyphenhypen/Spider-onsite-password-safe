import { Link } from "react-router-dom"
import './Navbar.css'
import MainSearch from "../pages/search/MainSearch"
export default function Navbar() {
  return (
    <nav>
      <Link to='/' className="nav-item-home">Home</Link>
      <div className="nav-items">
        <MainSearch className="nav-item"/>
        <Link to='/solve' className="nav-item">Solve</Link>
        <Link to='/create' className="nav-item">Create</Link>
        <Link to='/register' className="nav-item">Register</Link>
        <Link to='/login' className="nav-item">Login</Link>
        <Link to='/dashboard' className="nav-item">Dashboard</Link>
      </div>
    </nav>
  )
}
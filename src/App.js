import logo from './logo.svg';
import './App.css';
import {Link, Outlet} from "react-router-dom"

export function Home() {
  return (
    <>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>Home</h1>
    </>
  )
}
export function About() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about/history">History</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>About</h1>
      <Outlet/>
    </>
  )
}
export function Contact() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <h1>Contact</h1>
    </>
  )
}
export function History() {
  return (<h1>History</h1>)
}
export function App() {
  return <Home/>;
}


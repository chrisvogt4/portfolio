import { useState } from 'react'
import './App.css'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import calc from "./calculator.png";
import rpg from "./rpg.png";
import counter from "./counter.png";
import todo from "./todo.png"


function App() {

  return (
    <body>
    <header>
      <div className='class'>
      <a className='logo' id='logo'>Chris Vogt</a>
      <a className='logo' id='fed'>Software Developer</a>
      </div>
      <nav id="navbar">
          <a href="#bio-section" target="_blank" className="nav-link" id="profile-link">about</a>
          <a href="#project-preview" className="nav-link" id="projects">portfolio</a>
          <a href="#contact-link" className="nav-link" id="contact">contact</a>
          <a href='https://www.linkedin.com/in/chris-vogt-66a3b51b8/'><i className='icon-link'><FaLinkedin /></i></a>
          <a href='https://github.com/chrisvogt4'><i className='icon-link'><FaGithub /></i></a>
          <a><i className='icon-link'><FaInstagram /></i></a>
      </nav>
      </header>
      <section className='bio-section'>
        <h1>Creative</h1>
        <h2>Front-End</h2>
        <h3>Developer</h3>
        <p>I am a developer and UI designer based in Philadelphia. Please feel free to look below for my most recent projects.</p>
      </section>
      <section id="portfolio" className='project-preview'>
        <h1>My recent work</h1>
        <p>A collection of projects I've worked on.</p>
        <div className='projects'>
          <a href="https://calculatorapp-chrisvogt.netlify.app/" className='project-title'>
          <img className="calc" src={calc} />
          <p className='pc'>Calculator App</p>
          </a>
          <a  href="https://github.com/chrisvogt4/RPG-simulator-" className='project-title'>
          <img className='rpg' src={rpg} />
          <p>RPG Game</p>
          </a>
          <a href="https://github.com/chrisvogt4/counter-app" className='project-title'>
          <img className='count' src={counter} />
          <p>Counter App</p>
          </a>
          <a href="https://github.com/chrisvogt4/todo-app" className='project-title'>
          <img className='todo' src={todo} />
          <p>To-do List</p>
          </a>
          </div>
        </section>
        <section className='contact'>
          <button>Contact Me</button>
        </section>
        <footer>
          <p>Copyright © 2025 Chris Vogt. All rights reserved.</p>
        </footer>
      </body>
  )
}

export default App

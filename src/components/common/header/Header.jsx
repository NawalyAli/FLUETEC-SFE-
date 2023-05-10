import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
const handleLogin = () => {
  // Perform login logic here

  // Redirect to the home page
  window.location.href = '/home';
  window.location.href = '/';
};

const handleButtonClick = () => {
  // window.open("https://www.youtube.com/embed/", "_blank");
  window.open("https://uk.portal.fastfieldforms.com/WebApp/WebForm?formId=22915", "_blank");
  <div>
        <iframe title="YouTube video player" width="560" height="315"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
}

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Dashbroad</Link>
            </li>
            {/* <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li> */}
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          
          <button onClick={handleButtonClick}>Student's Log in</button>
          <button onClick={handleButtonClick}>Teacher's Log in</button>

          <div className="login-container">
      {/* <h2>Login</h2> */}
      {/* <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit" onClick={handleLogin}>Login</button>
      </form> */}
    </div>
          
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
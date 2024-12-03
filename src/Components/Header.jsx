import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
  var inputRef = useRef()
  // console.log(inputRef.current);
  
  function handleSearch(e){
      // e.preventDefalut();
      var queryTerm = e.target.value
      console.log(queryTerm);
      queryTerm=0
      // queryTerm==" "
      return navigate(`/search?q=${queryTerm}`)
  }
  return (
    <nav className='navbar navbar-expand-md bg-primary fixed-top navbar-light text-light'>
      <div className='container-fluid'>
          <a href="http:/" className='navbar-brand'><i className="bi bi-film"></i>   MovieHub</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

          <div className="collapse navbar-collapse" id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-md-0'>
              <li className='nav-item active'><Link to='/' className='nav-link'>Home</Link></li>
              <li className='nav-item'><Link to="/toprates" className='nav-link'>Top Rates</Link></li>
              <li className='nav-item'><Link to="/popular" className='nav-link'>Popular</Link></li>
              <li className='nav-item'><Link to="/upcoming" className='nav-link' >Upcoming</Link></li>
            </ul>
            <form onChange={handleSearch}>
              <input type="text" className='form-control form-control-ms' ref={inputRef} placeholder='Search...'/>
            </form>
          </div>
      </div>
      
    </nav>
  )
}

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Backup from '../assests/Backup.jpg'

export const Card = ({movies}) => {
  const navigate = useNavigate()
  return (
    <div className='col'>
      <div className='card shadow-sm p-2' title={movies.Title} >
        {movies.Poster==="N/A"?<img src={Backup} alt={movies.Title} className='card-img-top img-fluid'/>:<img src={movies.Poster} alt={movies.Title} className='card-img-top img-fluid'/>}
        <div className="card-body">
          <h3 className='card-title text-overflow-1'>{movies.Title}</h3>
          <p className='text-muted card-text text-overflow-2'>{movies.Plot}</p>
          <div className='d-flex align-items-center justify-content-between' >
              <Link to={`/MovieHub/${movies.Title}`} className='btn btn-sm btn-outline-primary stretched-link' onClick={()=>navigate('/MovieHub/:id')} movies={movies}>Read More</Link>
              <small>
                <i className='bi bi-star-half text-warning'></i>{movies.ratings}
              </small>
          </div>
        </div>
      </div>
    </div>
  )
}

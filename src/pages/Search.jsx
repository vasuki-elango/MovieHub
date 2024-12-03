import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'

const url = 'http://www.omdbapi.com/?'
const api_key = 'apikey=b1b5d454'
export const Search = () => {
  const [searchParams] = useSearchParams();
  const queryItem = searchParams.get("q")
  const [movie,setMovie] = useState([])

  useEffect(()=>{
    document.title = queryItem
  })

  useEffect(()=>{
    fetchMovie(queryItem)
  },[queryItem])

  async function fetchMovie(queryItem) {
   const res = await fetch(`${url}&${api_key}&s=${queryItem}`)
    const data = await res.json()
    setMovie(data.Search)
  }
  const navigate = useNavigate()
  return (
    <div className="container">
      {
        movie?.length>0 ? (
          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3'> 
        {movie.map((movies,id)=>{
        return (<div className='col' key={id}>
          <div className='card shadow-sm p-2' title={movies.Title} >
            <img src={movies.Poster} alt={movies.Title} className='card-img-top img-fluid'/>
            <div className="card-body">
              <h3 className='card-title text-overflow-1 text-center'>{movies.Title}</h3>
              <p className='text-muted card-text text-overflow-2'>{movies.Plot}</p>
              <div className='d-flex align-items-center justify-content-center text-center' >
                  <Link to={`/MovieHub/${movies.Title}`} className='btn btn-sm btn-outline-primary stretched-link' onClick={()=>navigate('/MovieHub/:id')} movies={movies}>Read More</Link>
                  {/* <a href={`http://www.imdb.com/title/${movies.imdbID}`} target='__blank' className='btn btn-warning'>IMDb</a> */}
              </div>
            </div>
          </div>
        </div>
        )
      })}
      </div>
        ) : <h2 className='text-center text-danger'>Movie Fot Founded</h2>
      }
  </div>
  )
}

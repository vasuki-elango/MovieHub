import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Backup from '../assests/Backup.jpg'

const url = 'http://www.omdbapi.com/?'
const api_key = 'apikey=b1b5d454'
export const MovieDetails = () => {

  const params = useParams()
  const [movie,setMovie] = useState([])

  useEffect(()=>{
    fetchMovie(params)
  },[params])

  async function fetchMovie(params) {
   const res = await fetch(`${url}&t=${params.id}&${api_key}`)
    const data = await res.json()
    setMovie(data)
    console.log(data);
    
  }
  useEffect(()=>{
    document.title = params.id
  })
  
  return (
    <main className='container'>
        <h5 className='text-center border-bottom py-3'>{movie.Title}</h5>
        <div className="row flex justify-content-center align-items-center g-5">
          <div className="col-md-4">
          {movie.Poster==="N/A"?<img src={Backup} alt={movie.Title} className='card-img-top img-fluid'/>:<img src={movie.Poster} alt={movie.Title} className='card-img  img-fluid'/>}
          </div>
          <div className="col-md-8">
            <h3 className='text-primary my-3'>{movie.Title}({movie.Year})</h3>
            <p>{movie.Plot}</p>
            <div className='d-flex g-2'>
            <e className='btn bg-danger p-1 text-white me-3'>{movie.Genre}</e>
            <a href={`http://www.imdb.com/title/${movie.imdbID}`} target='__blank' className='btn btn-warning'>IMDb</a>
            </div>
            <p className='my-3'><i className="bi bi-star-half text-warning"></i> {movie.imdbRating}  |  <i className="bi bi-people-fill text-primary"></i> {movie.imdbVotes}</p>
            <table className='table table-bordered'>
              <tbody>
                <tr>
                  <th>Runtime</th>
                  <td>{movie.Runtime}</td>
                </tr>
                <tr>
                  <th>Released</th>
                  <td>{movie.Released}</td>
                </tr>
                <tr>
                  <th>Language</th>
                  <td>{movie.Language}</td>
                </tr>
                <tr>
                  <th>Actors</th>
                  <td>{movie.Actors}</td>
                </tr>
              </tbody>
            </table>    
          </div>
        </div>
    </main>
  )
}

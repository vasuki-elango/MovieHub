import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../Components/Card'
import Upcomings from '../JSON/Upcoming.json'

export const Upcoming = ({title}) => {
  const UpcomingList = Upcomings
  const navigate = useNavigate()
  useEffect(()=>{
    document.title=title 
  })
  return (
    <div>
    <main className='container'>
      {
        title==="MovieHub" ? <div className='bg-light p-4 border'>
          <h3>Welcome To MovieHub</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ex soluta magni, velit ullam iste tenetur aliquam optio repellendus sequi ut quae fugiat dicta a eos ducimus, animi, rem eum.</p>
          <button className='btn btn-primary' onClick={()=>navigate('/MovieHub/:id')}>Explore Now</button>
        </div>:""
      }
      <h1 className='text-center text-danger py-3'>Upcoming</h1>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {
          UpcomingList.map((movie,id)=>{
            return <Card key={id} movies={movie}/>
          })
        }
      </div>
      
    </main>
  </div>
  )
}

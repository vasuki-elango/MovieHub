import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MovieList } from '../pages/MovieList'
import { Toprates } from '../pages/Toprates'
import { Upcoming } from '../pages/Upcoming'
import { Popular } from '../pages/Popular'
import { MovieDetails } from '../pages/MovieDetails'
import { Search } from '../pages/Search'
import { PageNotFound } from '../pages/PageNotFound'

export const Allroutes = () => {
  return (
    <Routes>
        <Route path='/MovieHub' element={<MovieList title="MovieHub"/>}/>
        <Route path='/toprates' element={<Toprates title="Top Rates"/>}/>
        <Route path='/popular' element={<Popular title="Popular Movies" />}/>
        <Route path='/upcoming' element={<Upcoming title="Upcoming Movies"/>}/>
        <Route path='/movie/:id' element={<MovieDetails/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}

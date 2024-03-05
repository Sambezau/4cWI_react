import React from 'react'
import {Link} from "react-router-dom"
 
export default function Navigation() {
  return (
    <ul class="nav">
    <Link to={'/Pages/Seite2'} className='absolute right-5 top-16 font-[1000] text-lg text-white'>Matches</Link>
    <Link to={'/'} className='absolute right-32 top-16 font-[1000] text-lg text-white'>Tabelle</Link>
    
  </ul>
  )
}
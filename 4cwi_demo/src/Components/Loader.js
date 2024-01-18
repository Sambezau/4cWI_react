import React from 'react'
import { CirclesWithBar, FidgetSpinner } from "react-loader-spinner";
 
export default function Loader() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'><FidgetSpinner
      height="100"
      width="100"
      color="#4fa94d"
      outerCircleColor="#4fa94d"
      innerCircleColor="#4fa94d"
      barColor="#4fa94d"
      ariaLabel="circles-with-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    /></div>
  )
}
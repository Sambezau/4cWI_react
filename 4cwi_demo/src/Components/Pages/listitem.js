import React from 'react';


export default function listitem({ team }) {
  console.log(team)
  return (
    <>

      <div className=" bg-slate-100 component flex h-16 w-7/8 m-3 rounded-lg relative font-bold p-5">
        <div className=""> {team.teamName}</div>
        <div className="absolute right-40"><img src={team.teamIconUrl} className='w-8 h-8'/></div>
        <div className="absolute right-32"> {team.points}</div> 
        <div className="absolute right-24">{team.matches}</div> 
        <div className="absolute right-16">{team.won}</div>
        <div className="absolute right-8">{team.draw}</div> 
        <div className="absolute right-1">{team.lost} </div>
     </div>
    </>
  )
}

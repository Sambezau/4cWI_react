import React from 'react'

export default function MatchItem({ match }) {
    console.log(match);
    //let info = JSON.parse(match)^
    // console.log(match.team1.teamName);
    
  if (match.length < 1) return(<></>);
  return (
    
    <div className='h-40 rounded-lg mt-10 ml-16 mr-16 border-4 border-black flex relative '>
    <div className='items-center flex'>
    <div className='flex text-3xl font-bold absolute left-8 items-center'>
        {match.team1.teamName} 
        <img src={match.team1.teamIconUrl} className='w-12 h-12 ml-4'/>
    </div>
    <div className='text-xl font-bold absolute left-1/2 transform -translate-x-1/2'>VS</div>
    <div className='text-3xl flex font-bold absolute right-8 items-center'>
        {match.team2.teamName}
        <img src={match.team2.teamIconUrl} className='w-16 h-16 ml-4'/>
    </div>
    
    </div>
    <div className='absolute left-1/2 transform -translate-x-1/2 font-bold'>{match.matchDateTime}</div>
</div>




  )
}

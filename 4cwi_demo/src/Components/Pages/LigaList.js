import React, { useEffect, useState } from 'react'
import ListItem from "./listitem"
import Aufstellung from "./Aufstellung"

export default function LigaList() {
  const [ligadata, setligaData] = useState([]);

  useEffect(() => {
    fetch("https://api.openligadb.de/getbltable/laliga1/2023").then(
      res => res.json().then(data => {
        setligaData(data);


      })
    );
  }, []);
  return (
    <><div className='flex h-screen'>
      <div className='h-2/3 bg-red-500 border-4 rounded-lg border-black w-1/3 m-10 overflow-y-auto '>
        <ListItem team={{"teamName":"LA Liga Tabelle","teamIconUrl":"", "points":"P", "matches":"M", "won":"W", "draw":"D", "lost":"L"}}/>
        {ligadata.map(data => {
          return <ListItem team={data} />
        })}
      </div>
      <div className='h-1/3 w-2/4 m-10 text-lg font-bold'> Aufstellung FC Barcelona
        <Aufstellung/>
      </div>
      </div>
    </>
  )
}

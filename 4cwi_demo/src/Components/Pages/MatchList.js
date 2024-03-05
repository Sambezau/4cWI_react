import React, { useEffect, useState } from 'react'
import MatchItem from './MatchItem'

export default function MatchList() {
  const [matchdata, setmatchData] = useState([]);
  const [matchdata1, setmatchData1] = useState([]);
  const [matchdata2, setmatchData2] = useState([]);

  useEffect(() => {
    fetch("https://api.openligadb.de/getnextmatchbyleagueteam/4672/356").then(
      res => res.json().then(data => {
        setmatchData(data);
        console.log(data);
      })
    );
    fetch("https://api.openligadb.de/getnextmatchbyleagueteam/4672/1133").then(
      res => res.json().then(data1 => {
        setmatchData1(data1);
        console.log(data1);
      })
    );
    fetch("https://api.openligadb.de/getnextmatchbyleagueteam/4672/4573").then(
      res => res.json().then(data2 => {
        setmatchData2(data2);

        console.log(data2);
      })
    );
  
  }, []);

  
    
  return(<div> <MatchItem match={matchdata}></MatchItem> <MatchItem match={matchdata1}></MatchItem> <MatchItem match={matchdata2}></MatchItem></div>)
  }

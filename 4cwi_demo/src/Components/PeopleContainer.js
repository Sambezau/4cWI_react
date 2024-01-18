import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";


export default function PeopleContainer() {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);


  useEffect(() => {
    fetch("https://659fdd725023b02bfe8aa68c.mockapi.io/Job").then(
      res => res.json().then(data => {
        setPeople(data);
        setFilteredPeople(data);

      })
    );
  }, []);

  if (people.length == 0) {
    return <Loader />
  }

  const filterPeople = (filter) => {
    let filtered = people.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
    setFilteredPeople(filtered);

  }

  return (
    <div className=" ">

      <div className=" fixed boder mb-4 bg-blue-400 w-full h-28 p-7 ">
        <input className="border p-4 mb-20 mt-50 w-full" type="text" placeholder="Search" onChange={(el) => {
          console.log(el.target.value);
          filterPeople(el.target.value);
        }}></input>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 pt-32'>
        {filteredPeople.map(person => {
          return <Card name={person.name} imageUrl={person.avatar} title={person.jobtitle} />
        })}
      </div>

    </div>
  )
}
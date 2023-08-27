import React from 'react'
import Habit from './Habit'
import { useSelector } from "react-redux";

const Habits = () => {

  // call use selector hook for getting state from reducer
  let habitState=useSelector((state)=>state["habits"])
  
  return (
    <div className='habits'>
      {habitState.map((habit)=><Habit habit={habit} key={habit.id}/>)}
    </div>
  )
}

export default Habits

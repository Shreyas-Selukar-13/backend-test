import React from "react";
import { useDispatch } from "react-redux";
import { habitMarkDone, habitMarkNone, habitMarkUnDone } from "../redux/features/habitSlice";

const DayView = ({day}) => {
  // get today date
  const today=new Date();
  // get day from today date
  const todayDay=today.getDay();

  // call use dispatch hook a variable call dispatch
  const dispatch=useDispatch();

  // get date details from providing date
  const date=new Date(day.yyyy,day.mm,day.dd);

  // function call after click done icon--------------
  const markDoneHabit=()=>{
    if(day.id>todayDay){
      alert("You cannot change your next days status")
      return;
    }
    // call habit done action from reducer
    dispatch(habitMarkDone(day.id));
  }
  // -------------------------------------------------

  // function call after click undone icon------------
  const markUnDoneHabit=()=>{
    if(day.id>todayDay){
      alert("You cannot change your next days status")
      return;
    }
    // call habit undone action from reducer
    dispatch(habitMarkUnDone(day.id))
  }
  // --------------------------------------------------

  // function call after click none icon--------------
  const markNoneHabit=()=>{
    if(day.id>todayDay){
      alert("You cannot change your next days status")
      return;
    }
    // call habit none action from reducer
    dispatch(habitMarkNone(day.id));
  }
  // -------------------------------------------------


  return (
    <div className="day-container">
      <h5 className="text-center">{day.day}</h5>
      <p className="text-center">{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</p>
      <i className={day.isDone===true?"fa-solid fa-circle-check circle-icon active":"fa-solid fa-circle-check circle-icon"} onClick={markDoneHabit}></i>
      <i className={day.isDone===false?"fa-solid fa-circle-xmark circle-icon active":"fa-solid fa-circle-xmark circle-icon"} onClick={markUnDoneHabit}></i>
      <i className={day.isDone===""?"fa-solid fa-circle-minus circle-icon active":"fa-solid fa-circle-minus circle-icon"} onClick={markNoneHabit}></i>
    </div>
  );
};

export default DayView;

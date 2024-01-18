import { AiOutlineCheck } from "react-icons/ai";
import React from 'react';
import "../TodoItem/todoItem.css"


export const CompleteIcon = (props) => {
  return (
    <AiOutlineCheck 
    className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
    onClick={props.onComplete}
    />
  )
}
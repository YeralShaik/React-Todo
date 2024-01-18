import React from 'react'
import "../TodoItem/todoItem.css"

import { AiOutlineClose } from "react-icons/ai";

export const DeleteIcon = (props) => {
  return (
    <AiOutlineClose 
    className={"Icon Icon-delete"}
    onClick={props.onDelete}
    />
  )
}
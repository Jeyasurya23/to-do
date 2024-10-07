import React from 'react'
import {FaTrash, FaTrashAlt} from  "react-icons/fa";

const LineItem = ({item,handleCheck,deleting}) => {
  return (
    <li className='item'>
                <input type="checkbox"
                onChange={() =>handleCheck(item.id)}
                checked={item.checked}
                />
                <label 
                style={(item.checked)? {textDecoration: 'line-through'}:null}
                onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
                <FaTrashAlt
                role='button'
                tabIndex="0"
                onClick={()=> deleting(item.id)}
                aria-label={`Delete ${item.item}`}
                />
              </li>
  )
}

export default LineItem
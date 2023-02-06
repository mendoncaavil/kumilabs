import React, {forwardRef} from 'react'
import Productbar from "./ProductBar";


function Dairy({text}, dairy) {
  return (
    <div ref = {dairy}>
      <h1>{text}</h1>
      <Productbar />
    </div>
  )
}

export default forwardRef(Dairy);
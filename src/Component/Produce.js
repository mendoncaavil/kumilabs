import React, {forwardRef} from 'react'
import Productbar from "./ProductBar";


function Produce({text}, produce) {
  return (
    <div ref = {produce}>
      <h1 >{text}</h1>
      <Productbar />
    </div>
  )
}

export default forwardRef(Produce)
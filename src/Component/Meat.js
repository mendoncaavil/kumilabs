import React, {forwardRef} from 'react'
import Productbar from "./ProductBar";


function Meat({text},meat) {
  return (
    <div ref = {meat}>
      <h1>{text}</h1>
      <Productbar />
    </div>
  )
}

export default forwardRef(Meat)
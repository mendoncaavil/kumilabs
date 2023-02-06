import React, {forwardRef} from 'react'
import Productbar from "./ProductBar";


function CanFood({ text }, canFood) {
  return (
    <div ref = {canFood}>
      <h1>{text}</h1>
      <Productbar />
    </div>
  )
}

export default forwardRef(CanFood)
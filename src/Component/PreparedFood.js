import React, {forwardRef} from 'react'
import Productbar from "./ProductBar";


function PreparedFood({text},preparedFood) {
  return (
    <div ref = {preparedFood}>
      <h1>{text}</h1>
      <Productbar />
    </div>
  )
}

export default forwardRef(PreparedFood)
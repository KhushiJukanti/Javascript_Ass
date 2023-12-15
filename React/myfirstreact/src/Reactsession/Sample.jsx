
import React from 'react'
import TestComp from './Test'

const Mango=()=>{
    return(
       <h2>Mangos are Sweet</h2> 
    )
}

const Grapes=()=>{
    return (
       <h2>Grapes are Good</h2>
    )
}

function Sample() {
  return (
    <div>Sample
      <Mango />
      <Grapes />
      <TestComp />
    </div>
  )
}

export default Sample

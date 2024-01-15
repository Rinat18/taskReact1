import React, { useState } from 'react'

const Task1 = () => {
    const [inp, setInp] = useState("")
    function Inp(e) {
        setInp(e.target.value)
    }
  return (
    <div>
        <input onChange={Inp} type="text"/>
        <p>{inp}</p>
    </div>
  )
}

export default Task1

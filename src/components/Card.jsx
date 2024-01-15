import React from 'react'

const Card = (props) => {
  return (
    <div style={{border:"2px solid grey",width:225}}>
      {props.children}
    </div>
  )
}

export default Card

import React from 'react'
import CardStudent from '../cardStudent/CardStudent'

const ListStudent = ({l,g}) => {
  return (
    <div style={{display:"flex",justifyContent:'space-around',flexWrap:"wrap",}}>
     {
         l.map((el)=>(
            <CardStudent el={el} g={g} />
          ))
     }
    </div>
  )
}

export default ListStudent

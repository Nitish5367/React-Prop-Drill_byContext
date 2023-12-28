import React from 'react'
import {useContext} from 'react'
import Gc from './Gc'
const C = () => {
    let obj=useContext(Gc)
  return (
    <div>{obj.name}</div>
  )
}

export default C
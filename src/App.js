import React from 'react'
import A from './A'
import Gc from './Gc'
const App = () => {
  let obj={"name":"Ramu"}
  return (
    <Gc.Provider value={obj}>
      <A/>
    </Gc.Provider>
  )
}

export default App
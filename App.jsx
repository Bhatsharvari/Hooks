// import React,{useState} from 'react'

// const App = () => {
//     let[username, setUsername]=useState("prashika")


//   return (
//     <div>
// <h1>{username}</h1>
//     </div>
//   )
// }

// export default App


//example on updating state
// import React from "react"
// import { useState } from 'react';

// const App=()=>{
//     let[username,setUsername]=useState("prashika")
//     let[count,setCount]=useState(0)

//     let handleusername=()=>{
//         setUsername("Nirmala")
//     }

//     let handleCountChange=()=>{
//         setCount(1)
//     }
//     return(
//         <div>
//             <h1>{username}</h1>
//             <h2>{count}</h2>
//             <button onClick={handleusername}>Change Name</button>
//             <button onClick={handleCountChange}>Change Number</button>
//         </div>
//     )
// }
// export default App

//use counter Application
import React from 'react'
import { useState } from 'react'
import "./global.css"

const App = () => {
    let[count,setCount]=useState(0)

    let handleIncrement=()=>{
        setCount(count+1)
    }
    let handleDecrement=()=>{
        setCount(count-1)
    }
    let handleReset=()=>{
        setCount(0)
    }


  return (
    <div className='mainBlock'>
        <h1>{count}</h1>
    <div className='btnBlock'>
        <button id='btn' onClick={handleIncrement}>+ INCREMENT</button>
        <button id='btn1'onClick={handleDecrement}>- DECREMENT</button>
        <button id='btn2'onClick={handleReset}>RESET</button>
        
        </div>
      
    </div>
    
  )
}

export default App
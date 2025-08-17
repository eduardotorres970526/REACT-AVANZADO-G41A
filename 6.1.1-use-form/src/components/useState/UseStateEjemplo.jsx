import React from 'react'
import {useState} from 'react'


const UseStateEjemplo = () => {
  const [color, setColor] = useState("");
  const cambiarColor = () => {
     if (color !== "red") {
        setColor("red")
        }else {
          setColor("green");
        }
     }

 return (
      <div className ='bg-black h-screen w-screen flex justify-center items-center flex-col gap-4'>
      <div className= {`${color === "red" ? 'bg-red-500' : 'bg-green-500'} h-50 w-50`}></div>
      <button className= 'border-1 p2 rounded-md bg-blue-500 text-white cursor-pointer ' onClick={cambiarColor}>Cambiar color</button>
    </div>
  )
}

export default UseStateEjemplo
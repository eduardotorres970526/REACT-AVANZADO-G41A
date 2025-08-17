import React from 'react'
import {useState, useEffect} from 'react'

const EjemploPaginaDinamica = () => {

    const [color, setColor] = useState("");
      const cambiarColor = () => {
         if (color !== "red") {
            setColor("red")
            }else {
              setColor("green");
            }
         }
    const [colorPantalla, setColorPantalla] = useState("");
    const coloresPantalla = ["bg-black", "bg-blue-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500", "bg-gray-500", "bg-white"];


    useEffect(() => {
        let indice = 0;
        const intervalo = setInterval(() => {
            indice = (indice + 1) % coloresPantalla.length; 
            setColorPantalla(coloresPantalla[indice]);
        }, 2000);
        return () => {
          clearInterval(intervalo);
        };
      }, []);
     

         
  return (
    <div className ={`${colorPantalla} h-screen w-screen flex justify-center items-center flex-col gap-4`}>
      <div className= {`${color === "red" ? 'bg-red-500' : 'bg-green-500'} h-50 w-50`}></div>
      <button className= 'border-1 p2 rounded-md bg-blue-500 text-white cursor-pointer ' onClick={cambiarColor}>Cambiar color</button>
    </div>
  )
}

export default EjemploPaginaDinamica
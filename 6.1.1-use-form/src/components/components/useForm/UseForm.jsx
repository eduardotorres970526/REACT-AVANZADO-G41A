import React from 'react';
import { useState, useEffect, useRef } from "react";

const UseForm = () => {
      
const [usuario, setUsuario] = useState({
    primerNombre: "",
    apellido: "",
    email: "",
    confirmarEmail: "",
    password: "",
    confirmarpassword: "",
    genero: "",
    edad: ""
});   

const errores = useRef({})
  
const capturarDatos = (event) => {
    const nombreUsuario = event.target.name;
    const valorUsuario = event.target.value; 
    setUsuario({...usuario, [nombreUsuario]: valorUsuario});
  };

  const validarDatos = () => {
    if (usuario.primerNombre === "") { 
        errores.current.mensaje = "El campo es requerido";     
        alert(errores.current.mensaje);
        return false;
    }
    errores.current.mensaje = "";
    return true;
  }
   
const enviarDatos = (event) => {
    event.preventDefault();
    if (!validarDatos()) {
        return;  
    }
    alert("Se envió el formulario")
    
}

  return {
    capturarDatos,
    usuario,
    enviarDatos,
  };
    
}

export default UseForm
import React from 'react';
import './formulario.css';
import {useForm} from 'react-hook-form';


const Formulario = () => {
    const {register, handleSubmit, formState:{errors}, watch, reset} = useForm();

    console.log(errors);
    


    const onsubmit = handleSubmit((data)=>{
        alert("El formulario se ha enviado exitosamente");
        reset();
    })

  return (
    <form className="form" onSubmit={onsubmit}>
      <p className="title">Register</p>
      <p className="message">Signup now and get full access to our app.</p>
      
      <div className="flex">
        <label className="w-[50%]">
          <input 
            className="input" 
            type="text" 
            placeholder="" 
            {...register('primerNombre', {required: true})}
          />
          <span>Firstname</span>
          {errors.primerNombre && <span className= "text-red-400 text-xs ml-2">El nombre es requerido</span>}
        </label>
        

        <label className="w-[50%]">
          <input 
            className="input" 
            type="text" 
            placeholder=""
            {...register('apellido', {required: true})} 
            
          />
          <span>Lastname</span>
          {errors.apellido && <span className= "text-red-400 text-xs ml-2">El apellido es requerido</span>}
        </label>
      </div>  
            
      <label>
        <input 
          className="input" 
          type="email" 
          placeholder=""
          {...register("correo", {
            required: {
              value: true,
              message: "El correo es requerido",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "El correo no es valido",
            },
          })} 
           
        />
        <span>Email</span>
         {errors.correo?.type ==="required" && (<span className= "text-red-400 text-xs ml-2">{errors.correo.message}</span>)}
         {errors.correo?.type === "pattern" && (<span className= "text-red-400 text-xs ml-2">{errors.correo.message}</span>)}
      </label> 
        
      <label>
        <input 
          className="input" 
          type="password" 
          placeholder="" 
          {...register("password",{
            required: true,  
          })}
          
        />
        <span>Password</span>
      </label>
      
      <label>
        <input 
          className="input" 
          type="password" 
          placeholder="" 
          {...register("confirmPassword",{
            required: true, 
            validate:(value)=>{
                if (watch().password !== value) {
                    return "Las contraseñas no coinciden";
                }
            }
          })}
          
        />
        <span>Confirm password</span >
        {errors.confirmPassword && (
            <span className="text-red-400 text-xs ml-2">
                {errors.confirmPassword.message}
            </span >)}
      </label>
      
      <input className="submit cursor-pointer" type="submit" value="Enviar" />
    
      
      <p className="signin">
        Already have an account? <a href="#">Signin</a>
      </p>
       <pre>
        {JSON.stringify(watch(), null, 2)}
       </pre>
    </form>
  );
};

export default Formulario;
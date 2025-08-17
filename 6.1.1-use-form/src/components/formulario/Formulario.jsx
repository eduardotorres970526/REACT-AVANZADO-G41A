import UseForm from "../components/useForm/UseForm";
import {useEffect} from "react";

UseForm
const Formulario = () => {

  const { capturarDatos, usuario, enviarDatos} = UseForm();

  return (
    <>
      {/* From Uiverse.io by themrsami */}
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign Up</h2>
          <form className="flex flex-col" onSubmit={(e)=> {enviarDatos(e);}}>
            <input
              placeholder="First Name"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              name= "primerNombre"  
              onChange={(event) => {
                capturarDatos(event);
              }}
            />
            <input
              placeholder="Last Name"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              name= "apellido"
              onChange={(event) => {
                capturarDatos(event);
              }}
            />
            <input
              placeholder="Email"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="email"
              name= "email"
              onChange={(event) => {
                capturarDatos(event);
              }}
            />
            <input
              placeholder="Confirmar Email"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="email"
              name= "confirmarEmail"
              onChange={(event) => {
                capturarDatos(event);
              }}
            />
            <input
              placeholder="Password"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="password"
              name= "password"
              onChange={(event) => {
                capturarDatos(event);
              }}
            />
            <input
              placeholder="Confirmar Password"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="password"
              name= "confirmarPassword"
              onChange={(event) => {
                capturarDatos(event);
              }}
            />

            <label
              className="text-sm mb-2 text-gray-900 cursor-pointer"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              id="gender"
              name= "genero"
              onChange={(event) => {
                capturarDatos(event);
              }}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <label
              className="text-sm mb-2 text-gray-900 cursor-pointer"
              htmlFor="age"
            >
              Age
            </label>
            <input
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2"
              id="age"
              type="date"
              name= "edad"
              onChange={(event) => {
                capturarDatos(event);
              }}
            />

            <p className="text-gray-900 mt-4">
              Already have an account?{" "}
              <a
                className="text-sm text-blue-500 hover:underline mt-4"
                href="#"
              >
                Login
              </a>
            </p>

            <button
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
        <pre>
          {JSON.stringify(usuario,null,2)}
        </pre>
      </div>
    </>
  );
};

export default Formulario;

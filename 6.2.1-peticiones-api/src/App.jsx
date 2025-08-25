import React from 'react'
import {useState, useEffect} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';


const App = () => {

  const [personajes, setPersonajes] = useState([])
  const [pagina, setPagina] = useState(1)
  const [hasMore, setHasMore] = useState(true)
       

  const traerPersonajes = async()=>{
    try {
        const url = `https://rickandmortyapi.com/api/character?page=${pagina}`
        const respuestaJson = await fetch(url);
        if(!respuestaJson) return null;
        const respuesta = await respuestaJson.json();
        if(!respuesta) return null;
        const hayMas = Boolean(respuesta.info.next)

        setPersonajes(prev => [...prev, ...respuesta.results]);
        setPagina(prev => prev + 1)
        setHasMore(hayMas)

    } catch (error) {
        console.log(error)
    }
};

  useEffect(()=>{
    traerPersonajes()
  },[])

  

  return (
    <InfiniteScroll
  dataLength={personajes.length} //This is important field to render the next data
  next={traerPersonajes}
  hasMore={hasMore}
  loader={<h4>Cargando...</h4>}
  endMessage={
    <p className="text-center text-red-500 font-extrabold">
      <b>----------------Ya es toda we 😒----------------</b>
    </p>
  }
  >
<div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-10'>
      {personajes.map((personaje, index)=>{
        return(
         <div className="border border-slate-400 pb-10 rounded-md shadow-xl" key={index}>
        <div className='w-full bg-blue-500'>
          <img src={personaje.image} alt="" className='w-full'/>
        </div>
        <div className='flex flex-col p-10 gap-5'>
          <h1 className='flex items-center gap-2'>Personaje: <p className='font-extrabold'>{index + 1}</p></h1> 
          <h2>Nombre: <span className='font-extrabold'>{personaje.name}</span></h2>  
          <p>Especie: <span className='font-extrabold'>{personaje.species}</span></p>
          <p>Está vivo: {personaje.status === "Alive" ? "SI 😃" : "NO 😔" }</p>
        </div>
      </div>  
        );
      })} 
    </div>
  
  
</InfiniteScroll>

    
  )
}

export default App
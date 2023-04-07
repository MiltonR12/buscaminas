

function Portada({ iniciar }) {

  return (
    <section className='w-full h-full bg-neutral-950 border-cyan-500 border-2 p-3' >
      <h2 className='text-cyan-400 text-center font-medium text-2xl' >BUSCAMINAS</h2>
      <label htmlFor="" className='text-white text-2xl' >Nombre</label>
      <input type="text" className='bg-transparent mb-5 text-white outline-none w-full border-b-2 border-cyan-50 border-dashed text-xl px-2 py-3' />
      <button
        onClick={() => iniciar()}
        className='bg-cyan-500 px-2 py-1 rounded-md hover:bg-cyan-600 w-full'
      >
        Iniciar Juego
      </button>
    </section>
  )
}

export default Portada
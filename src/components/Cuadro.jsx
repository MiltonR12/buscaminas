import React from 'react'
import bomba from '../img/bomba.png'

function Cuadro({ caja, handleClick }) {

  return (
    <div
      onClick={() => { handleClick(caja) }}
      className='h-7 flex items-center justify-center text-white bg-stone-800 select-none cursor-pointer hover:bg-stone-600 transition-all border-cyan-400 border-2' >
      {
        caja.visible && <div> {
          caja.value == -1 ? <img src={bomba} alt="" width={300} /> : <h3> {caja.value} </h3>
        } </div>
      }
    </div>
  )
}

export default Cuadro
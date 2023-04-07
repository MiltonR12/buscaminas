import React, { useState } from 'react'
import { Caja } from './clases/cuadro'
import Cuadro from './components/Cuadro'
import { AiFillFlag } from 'react-icons/ai'
import Portada from './components/Portada'

function App() {

  const [contenedor, setContenedor] = useState([])
  const [bandera, setBandera] = useState(false)
  const [countCaja, setCountCaja] = useState(0)

  const generarMatriz = () => {

    const matriz = []
    let contador = 0
    for (let i = 0; i < 10; i++) {
      matriz.push([])
      for (let j = 0; j < 10; j++) {
        if (parseInt(Math.random() * 5) === 0) {
          matriz[i][j] = new Caja(-1, i, j)
        } else {
          matriz[i][j] = new Caja(0, i, j)
          contador++
        }
      }
    }
    setCountCaja(contador)
    verificar(matriz)
  }

  const verificar = (elementos) => {
    const matriz = elementos;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (matriz[i][j].value != -1) {
          if (i > 0) {
            if (j > 0) {
              matriz[i - 1][j - 1].value == -1 && matriz[i][j].value++
            }
            matriz[i - 1][j].value == -1 && matriz[i][j].value++
            if (j < 9) {
              matriz[i - 1][j + 1].value == -1 && matriz[i][j].value++
            }
          }
          if (j > 0) {
            matriz[i][j - 1].value == -1 && matriz[i][j].value++
          }
          if (j < 9) {
            matriz[i][j + 1].value == -1 && matriz[i][j].value++
          }
          if (i < 9) {
            if (j > 0) {
              matriz[i + 1][j - 1].value == -1 && matriz[i][j].value++
            }
            matriz[i + 1][j].value == -1 && matriz[i][j].value++
            if (j < 9) {
              matriz[i + 1][j + 1].value == -1 && matriz[i][j].value++
            }
          }
        }
      }
    }
    setContenedor(matriz)
  }

  const handleClick = (caja) => {
    if (caja.visible == false) {
      setCountCaja(countCaja - 1)
      console.log(countCaja)
    }
    if (caja.value == -1) {
      let matriz = contenedor.slice()
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (matriz[i][j].value == -1) {
            matriz[i][j].visible = true;
          }
        }
      }
      setContenedor(matriz)
    } else {
      const newContenedor = contenedor.slice()
      newContenedor[caja.positionX][caja.positionY].visible = true
      setContenedor(newContenedor)
    }
  }

  return (
    <div className='bg-neutral-500 h-screen w-full' >
      {countCaja == 0 && <Portada iniciar={generarMatriz} />}
      <div className='bg-neutral-900 h-screen' >
        <h2 className='text-center text-xl p-3 text-white' >BUSCAMINAS</h2>
        <h3 className='text-white' >Jugador: </h3>
        <button onClick={() => setBandera(!bandera)} >
          <AiFillFlag className={`w-7 h-7 ${bandera && 'text-white'}`} />
        </button>
        <div className='grid-cols-10 grid max-w-sm gap-1 p-1 my-3' >
          {
            countCaja > 0 && contenedor.map((item, index) => (
              <div key={index} className='grid gap-1' >
                {
                  item.map((item2, index2) => (
                    <Cuadro key={index2} caja={item2} handleClick={handleClick} />
                  ))
                }
              </div>
            ))
          }
        </div>
        <button className='text-white bg-cyan-500 py-1 px-2 w-3/5 mx-auto block' onClick={() => setCountCaja(0)} >
          Generar Matriz
        </button>
      </div>
    </div>
  )
}

export default App
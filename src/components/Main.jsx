import React from 'react'
import imagen1 from '../components/img/imagen1.jpg'
import imagen2 from '../components/img/imagen2.jpg'
import imagen from '../components/img/imagen.jpg'
import imagen3 from '../components/img/imagen3.jpg'
import imagen4 from '../components/img/imagen4.jpg'
import imagen5 from '../components/img/imagen5.jpg'

const Main = () => {
  return (
    <div>
        <main className='container'>
            <img src={imagen1}/>
            <img src={imagen2}alt="img"/>
            <img src={imagen} alt="img"/>
            <img src={imagen3} alt="img"/>
            <img src={imagen4} alt="img"/>
            <img src={imagen5} alt="img"/>
        </main>
    </div>
  )
}

export default Main
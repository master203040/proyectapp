import React from 'react'
import imagen6 from '../components/img/imagen6.jpg'
import imagen7 from '../components/img/imagen7.jpg'

const Footer = () => {
  return (
    <div>
        <footer className='footer'>
            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias accusantium deserunt quo quis consequuntur mollitia animi possimus, perferendis libero illo!
                <img src={imagen6}alt="img"/>
                <img src={imagen7}alt="img"/>
              </p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
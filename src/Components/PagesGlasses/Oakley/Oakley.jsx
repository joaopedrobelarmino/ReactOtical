import React from 'react'
import styles from './Oakley.module.css'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Image from '../Image/Oakley.jpg'
import { Link } from 'react-router-dom'

const Oakley = () => {
  return (
    <div>
      <Header />
      <div className={styles.Oakley}>
        <div>
          <img src={Image}/>
        </div>
        <div>
          <h1>Oculos Oakley</h1>
          <p> Apresentamos o nosso modelo exclusivo de óculos "Oakley". Com um design moderno e elegante, esses óculos elevam
          instantaneamente o seu estilo a um novo patamar.</p>
          <Link to='/Buy'><button>Adquira o seu</button></Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Oakley
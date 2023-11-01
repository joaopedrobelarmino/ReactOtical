import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <div>
        <p>RESPOSTAS EM ATÉ 24H</p>
        <h1>Contato<font color="#FFBC1A">.</font></h1>
      </div>
      <div className={styles.ContactHome}>
        <form>
          <div>
            <label>Digite seu nome.</label>
            <input type='text' placeholder='Seu nome' />
          </div>
          <div>
            <label>Digite seu email.</label>
            <input type='email' placeholder='Seu email' />
          </div>
          <div>
            <label>Digite sua mensagem.</label>
            <textarea placeholder='Sua mensagem' />
          </div>
          <div>
            <button>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
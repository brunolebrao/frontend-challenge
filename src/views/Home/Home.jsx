import React from 'react'
import { useHistory } from 'react-router-dom'

import { Button } from 'components'

import styles from './Home.module.css'

const Home = () => {
  const { push } = useHistory()
  return (
      <>
        <div className={styles.wrapper}>
          <Button label="Buscar seus artistas" color="primary" onClick={() => push('/busca')} />
        </div>
      </>
  )
}

export default Home

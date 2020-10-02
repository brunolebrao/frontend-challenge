import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Col } from 'antd'
import { Card, Albums, Button } from 'components'

import { getArtist, clearToken } from 'utils'

import plurall from 'assets/images/plurall.png'

import { Container } from './styles'


const Artist = () => {
  const { location, push, goBack } = useHistory()
  const id = location.search.replace(/\?/g, '')
  const [artist, setArtist] = useState([])
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getArtist(`/artists/${id}`).then((response) => {
      setArtist([response.data])
      setLoading(false)
    }).catch((error) => {
      clearToken()
      push('/')
    })
  }, [])

  useEffect(() => {
    setLoading(true)
    getArtist(`/artists/${id}/albums`).then((response) => {
      setAlbums(response.data.items)
      setLoading(false)
    }).catch((error) => {
      clearToken()
      push('/')
    })
  }, [])

  return (
    <Container>
      <Row justify="center">
        <Col span={18}>
          <Card artist={artist} loading={loading} emptyImg={plurall} />
        </Col>
        <Col span={18}>
          <Albums albums={albums} />
        </Col>
      </Row>
      <Row justify="end">
        <Col span={6}>
          <Button label="Voltar" color="secondary" size="sm" onClick={goBack} />
        </Col>
      </Row>

    </Container>
  )
}

export default Artist

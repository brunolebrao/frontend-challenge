import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getArtists, clearToken } from 'utils'
import { Divider, Row, Col } from 'antd'
import { Search, ArtistsList, Button } from 'components'
import plurall from 'assets/images/plurall.png'
import { Container } from './styles'

const SearchView = () => {
  const { push, goBack } = useHistory()
  const [artists, setArtists] = useState([])
  const [artist, setArtist] = useState('')
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    if (artist) {
      getArtists('/search', artist).then((response) => {
        setArtists(response.data.artists.items)
        setLoading(false)
      }).catch((error) => {
        clearToken()
        push('/')
      })
    }
    setLoading(true)
  }, [artist, setArtist])

  const handleSearchArtist = (value) => {
    if (value.length >= 4) {
      setArtist(value)
    }
    setArtists([])
  }

  return (
    <Container>
      <Row justify="center">
        <Col span={20}>
          <Search
            placeholder="Buscar por artista"
            onChange={event => handleSearchArtist(event.target.value)}
            style={{ width: '100%' }}
          />
          <Divider />
          {artist.length > 0 &&
            <ArtistsList
              artists={artists}
              path="/artista"
              emptyText="Favor realizar outra busca"
              emptyImg={plurall}
              loading={loading}
            />}
        </Col>
        <Col span={16} push={4} />
      </Row>
      <Row justify="end">
        <Col span={5}>
          <Button label="Voltar" color="secondary" size="sm" onClick={goBack} />
        </Col>
      </Row>
    </Container>
  )
}

export default SearchView

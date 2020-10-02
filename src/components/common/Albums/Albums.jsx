import React from 'react'
import PropTypes from 'prop-types'
import plurall from 'assets/images/plurall.png'
import { Container, AlbumsContainer, AlbumsImg, AlbumsText, AlbumsData } from './styles'

const Albums = ({ albums }) => (
  <Container>
    {albums.map((album) => (
      <AlbumsContainer key={album.id}>
        <AlbumsData>
          {album.release_date.split('-').reverse().join('/')}
        </AlbumsData>
        <AlbumsImg
          src={album.images.length < 1 ? plurall : album.images.pop().url}
          alt="album"
        />
        <AlbumsText>{album.name}</AlbumsText>
      </AlbumsContainer>
      ))}
  </Container>
)

Albums.propTypes = {
  albums: PropTypes.array.isRequired,
}

export default Albums

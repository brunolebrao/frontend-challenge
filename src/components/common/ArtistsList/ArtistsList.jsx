import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { List, Avatar } from 'antd'

import { Container } from './styles'

const ArtistsList = ({ artists, emptyText, emptyImg, loading, path }) => (
  <Container>
    <List
      itemLayout="horizontal"
      dataSource={artists}
      loading={loading}
      locale={{ emptyText }}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.images.length < 1 ?
                  emptyImg :
                    item.images.pop().url}
            />}
            title={<Link to={{ pathname: path, search: `${item.id}` }}>{item.name}</Link>}
            description={`Genero - ${item.genres.length < 1 ?
                    'Não há informação' :
                    item.genres.map(genre => [genre])}`}
          />
        </List.Item>
            )}
    />
  </Container>
)

ArtistsList.defaultProps = {
  loading: false,
  emptyText: 'Sem dados',
}

ArtistsList.propTypes = {
  artists: PropTypes.array.isRequired,
  emptyImg: PropTypes.string,
  emptyText: PropTypes.string,
  loading: PropTypes.bool,
  path: PropTypes.string.isRequired,
}


export default ArtistsList

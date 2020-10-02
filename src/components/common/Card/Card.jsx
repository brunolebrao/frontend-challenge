import PropTypes from 'prop-types'
import React from 'react'
import { List, Avatar, Space } from 'antd'
import { StarOutlined } from '@ant-design/icons'

import { Container } from './styles'

const Card = ({ loading, artist, emptyImg }) => (
  <Container>
    {artist.length > 0 &&
      <List
        itemLayout="vertical"
        size="large"
        dataSource={artist}
        loading={loading}
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={[<Space>{React.createElement(StarOutlined)}Popularidade : <b>{item.popularity}</b></Space>]}
            extra={
              <img
                width={272}
                alt="logo"
                src={item.images.length < 1 ?
                      emptyImg :
                        item.images.pop().url}
              />
          }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.images.length < 1 ?
              emptyImg :
                item.images.pop().url}
              />}
              title={item.name}
              description={item.description}
            />
            <b>{item.genres.length > 0 ? 'Gêneros:' : 'Gênero:'}</b> {item.genres.map(genre => `${[genre]}, `)}
          </List.Item>
      )}
      />
    }
  </Container>
)

Card.propTypes = {
  artist: PropTypes.array.isRequired,
  emptyImg: PropTypes.string,
  loading: PropTypes.bool,
}

export default Card

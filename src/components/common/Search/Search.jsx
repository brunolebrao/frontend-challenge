import React from 'react'
import { Input } from 'antd'
import PropTypes from 'prop-types'

import { Container } from './styles'

const SearchComponent = ({ placeholder, onChange }) => {
  const { Search } = Input
  return (
    <Container>
      <Search
        placeholder={placeholder}
        onChange={onChange}
      />
    </Container>
  )
}

SearchComponent.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

export default SearchComponent

import React from 'react'
import PropTypes from 'prop-types'


import { Container, Button } from './styles'

const ButtonComponent = ({
  color,
  size,
  label,
  ...rest
}) => (
  <Container size={size}>
    <Button color={color} {...rest}>
      {label}
    </Button>
  </Container>
)

ButtonComponent.defaultProps = {
  color: 'default',
  size: 'md',
}

ButtonComponent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string.isRequired,
}

export default ButtonComponent

import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  ${props =>
    props.size === 'sm' &&
    css`
      width: 150px;
    `};
  ${props =>
    props.size === 'md' &&
    css`
      width: 250px;
    `};
  ${props =>
    props.size === 'lg' &&
    css`
      width: 350px;
    `};
  ${props =>
    props.size === 'fullWidth' &&
    css`
      width: 100%;
    `};
`

export const Icon = styled.img`
  position: absolute;
  top: 14px;
  right: 10px;
  width: 20px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  color: ${props => props.theme.colors.white};
  letter-spacing: normal;
  padding: 20px;
  border-radius: 4px;
  width: 100%;
  height: 48px;
  cursor: pointer;
  ${props =>
    props.color === 'primary' &&
    css`
      background: ${props.theme.colors.primary};
    `};
  ${props =>
    props.color === 'secondary' &&
    css`
      background: ${props.theme.colors.secondary};
      border: 1px solid ${props.theme.colors.primary};
      color: ${props.theme.colors.primary};
    `};
  ${props =>
    props.color === 'warning' &&
    css`
      background: ${props.theme.colors.warning};
    `};
`

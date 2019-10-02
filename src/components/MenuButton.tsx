import React from 'react'
import { LocationDescriptor } from 'history'
import * as S from './styles'
import { Link } from 'react-router-dom'

interface IOwnProps {
  externalLink?: string
  to?: LocationDescriptor
  children: React.ReactNode
}

const MenuButton = (props: IOwnProps) => {
  const { externalLink, to, children } = props

  // Inspired by https://material-ui.com/guides/composition/#link
  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref: React.Ref<HTMLAnchorElement>) => (
        // With react-router-dom@^6.0.0 use `ref` instead of `innerRef`
        // See https://github.com/ReactTraining/react-router/issues/6056
        <Link to={to!} {...itemProps} innerRef={ref} />
      )),
    [to]
  )

  let linkProps
  if (externalLink) {
    linkProps = {
      target: '_blank',
      href: externalLink
    }
  } else if (to) {
    linkProps = {
      component: renderLink
    }
  } else {
    console.error('Unexpected state. Both, externalLink and route, are undefined.')
  }

  return (
    <S.MenuButton variant='text' {...linkProps}>
      {children}
    </S.MenuButton>
  )
}

export default MenuButton

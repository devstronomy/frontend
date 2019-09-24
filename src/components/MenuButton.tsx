import React from 'react'
import { LocationDescriptor } from 'history'
import * as S from './styles'
import { Link, LinkProps } from 'react-router-dom'

interface IOwnProps {
  externalLink?: string
  route?: LocationDescriptor
  children: React.ReactNode
}

const MenuButton = (props: IOwnProps) => {
  const { externalLink, route, children } = props

  let linkProps
  if (externalLink) {
    linkProps = {
      target: '_blank',
      href: externalLink
    }
  } else if (route) {
    const linkComponent: any = (linkProps: LinkProps) => <Link {...linkProps} to={route} />
    linkComponent.displayName = 'LinkComponent'
    linkProps = {
      component: linkComponent
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

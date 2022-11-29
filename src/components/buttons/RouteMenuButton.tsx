import React from 'react'
import { Link, To } from 'react-router-dom'

import * as S from './styles'

type Props = React.PropsWithChildren<{
  to: To
  onClick?: React.MouseEventHandler
}>

const LinkMenuButton = (props: Props) => {
  const { to, onClick, children } = props

  // Inspired by https://material-ui.com/guides/composition/#link
  const renderLink = React.useMemo(
    () =>
      // TODO: Try to resolve the below ESLint complain.
      // eslint-disable-next-line react/display-name
      React.forwardRef((itemProps, ref: React.Ref<HTMLAnchorElement>) => (
        // With react-router-dom@^6.0.0 use `ref` instead of `innerRef`
        // See https://github.com/ReactTraining/react-router/issues/6056
        <Link to={to} {...itemProps} ref={ref} />
      )),
    [to]
  )

  const linkProps = { component: renderLink }

  return (
    <S.MenuButton onClick={onClick} variant='text' {...linkProps}>
      {children}
    </S.MenuButton>
  )
}

export default LinkMenuButton

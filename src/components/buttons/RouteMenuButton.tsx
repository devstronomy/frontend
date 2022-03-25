import { To } from 'history'
import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './styles'

const LinkMenuButton = (props: React.PropsWithChildren<{ to: To }>) => {
  const { to, children } = props

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
    <S.MenuButton variant='text' {...linkProps}>
      {children}
    </S.MenuButton>
  )
}

export default LinkMenuButton

import * as S from './styles'

interface IOwnProps {
  link: string
  children: React.ReactNode
}

const ExternalLinkMenuButton = (props: IOwnProps) => (
  <S.MenuButton variant='text' href={props.link} target='_blank'>
    {props.children}
  </S.MenuButton>
)

export default ExternalLinkMenuButton

import styled from 'styled-components'
import colors from '../../styles/colors'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${colors.secondaryColor};
  color: white;
`
export const FooterInnerContainer = styled.div`
  a {
    text-decoration: none;
    color: white;
    text-decoration-line: underline;
    &:hover {
      opacity: 0.8;
    }
  }
`

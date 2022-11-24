import { FooterContainer, FooterInnerContainer } from './styledComponents'

function Footer() {
  return (
    <footer>
      <FooterContainer>
        <FooterInnerContainer>
          <a href="mailto:gippolito@hotmail.co.uk?subject=PIIQUANTE-feedback from the website's footer">
            Send a feedback about this website.
          </a>
          <p>Website by: Giuseppe Ippolito.</p>
        </FooterInnerContainer>
      </FooterContainer>
    </footer>
  )
}

export default Footer

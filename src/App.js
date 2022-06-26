import styled from 'styled-components';
import { Spin } from './style/animations.js'
import image from './images/BirdWheel.png'

const Header = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`

const SpinningImage = styled.img`
    height: 40vmin;
    pointer-events: none;
    @media (prefers-reduced-motion: no-preference) {
        animation: ${Spin} 0.2s infinite linear;
    }
`

const Paragraph = styled.p`

`

const Container = styled.div`
    text-align: center;
`

// const Link = styled.a`
//     color: #61dafb;
// `

function App() {
  return (
    <Container>
      <Header>
        <SpinningImage src={image} alt="logo" />
        <Paragraph>
          HAYLEY FINDLAY
        </Paragraph>
      </Header>
    </Container>
  );
}

export default App;

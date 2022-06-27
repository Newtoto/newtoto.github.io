import styled from 'styled-components';
import { Spin, Bounce } from '../style/animations.js'

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
animation: ${Spin} 0.02s infinite linear;
// @media (prefers-reduced-motion: no-preference) {
//     animation: ${Bounce} 2s infinite linear;
//     // animation: ${Spin} 0.2s infinite linear;
// }
`

const Spinner = styled.div`
animation: ${Spin} 0.2s infinite linear;
`

const Paragraph = styled.p`

`

const Container = styled.div`
text-align: center;
`

// const Link = styled.a`
//     color: #61dafb;
// `


const home = () => {
    return (
        <p>Test Home Page</p>
    )
}

export default home;

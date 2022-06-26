import { keyframes } from 'styled-components';

const Spin = keyframes`
    from {
        transform: rotate(360deg);
    }
    to {
        transform: rotate(0deg);
    }
`

const Fade = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const Bounce = keyframes`
    0% {
        transform: translateY(0);
    }
    25% {
        transform: translateY(-20rem);
    }
    50% {
        transform: translateY(0);
    }
    75% {
        transform: translateY(-10rem);
    }
    100% {
        transform: translateY(0);
    }
`

export {
    Spin,
    Fade,
    Bounce
}

import { keyframes } from 'styled-components';

const Spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
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
        transform: translateY(-10rem);
    }
    50% {
        transform: translateY(0);
    }
    75% {
        transform: translateY(-5rem);
    }
    100% {
        transform: translateY(0);
    }
`

const Rise = keyframes`
0% {
    transform: translateY(-10rem)
}
50% {
    transform: translateY(0);
}
100% {
    transform: translateY(-10rem)
}
`

export {
    Spin,
    Fade,
    Bounce,
    Rise
}

import React, { useRef, useEffect, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize.js';
import colors from '../style/colors'

const drawLine  = (ctx, offset) => {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    for(let i = 0; i < 10; i ++) {
        ctx.moveTo(0 + (i * 40), 0);
        ctx.lineTo((300 * i) + offset, 150 + (i * 30));
    }
    ctx.stroke();
}

const Canvas = props => {
    // const container = useRef(null);
    const canvasRef = useRef(null);
    const { width, height } = useWindowSize();
    
    useEffect(() => {
        canvasRef.current.width = width;
        canvasRef.current.height = height;
    }, [width, height])

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        //Our first draw
        context.fillStyle = colors.blossom
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)

        drawLine(context, height/10)
    }, [width, height])
    
    return (
        <div>
            <canvas ref={canvasRef} {...props}/>
        </div>
    )
}

export default Canvas

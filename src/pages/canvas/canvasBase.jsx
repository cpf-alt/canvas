import React, { useEffect } from 'react'
import './index.css'
export const CanvasBase = () => {

  useEffect(() => {
    init()
  }, [])

  const init = () => {
    let canvas = document.getElementById('canvas')
    if (canvas.getContext) {
      let ctx = canvas.getContext('2d')
      drawLine(ctx)
      drawTriangle(ctx)
      drawRectangle(ctx)
      drawFillRectangle(ctx)
      clearRect(ctx)
      drawArc(ctx)
      drawEllipse(ctx)
      drawText(ctx)
      drawImage(ctx)
    }
  }

  const drawLine = (ctx) => {
    ctx.beginPath()
    ctx.lineWidth = 5
    ctx.lineCap = 'round'
    ctx.strokeStyle = "rgba(0, 255, 0, .5)"
    ctx.moveTo(60, 60);
    ctx.lineTo(100, 100)
    ctx.stroke()
    ctx.closePath()
    ctx.beginPath()
    ctx.lineWidth = 10
    ctx.strokeStyle = "rgba(120, 120, 0, .2)"
    ctx.moveTo(60, 260);
    ctx.lineTo(100, 300)
    ctx.stroke()
    ctx.closePath()
    ctx.beginPath()
    ctx.lineWidth = 1
    ctx.moveTo(260, 60);
    ctx.lineTo(300, 100)
    ctx.stroke()
    ctx.closePath()
  }

  const drawTriangle = (ctx) => {
    ctx.beginPath()
    ctx.moveTo(500, 50)
    ctx.lineTo(300, 200)
    ctx.lineTo(400, 100)
    ctx.lineTo(500, 50)
    ctx.stroke()
    ctx.closePath()
  }

  const drawRectangle = (ctx) => {
    ctx.strokeRect(60, 60, 200, 200)
  }

  const drawFillRectangle = (ctx) => {
    ctx.fillRect(100, 100, 200, 200)
  }

  const clearRect = (ctx) => {
    ctx.clearRect(150, 150, 50, 50)
  }

  const drawArc = (ctx) => {
    ctx.beginPath()
    ctx.arc(500, 500, 50, Math.PI * 2, false)
    ctx.stroke()
    ctx.closePath()
    ctx.beginPath()
    ctx.arc(550, 550, 50, 0, Math.PI / 2, false)
    ctx.fill()
    ctx.closePath()
  }

  const drawEllipse = (ctx) => {
    ctx.beginPath()
    ctx.ellipse(600, 200, 50, 100, 0, 0, Math.PI * 2)
    ctx.stroke()
    ctx.closePath()
    ctx.beginPath()
    ctx.ellipse(600, 400, 50, 100, Math.PI / 4, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath()
  }

  const drawText = (ctx) => {
    ctx.font = "50px serif"
    ctx.strokeStyle = 'rgba(0, 0, 0, .7)'
    ctx.strokeText('canvas详解', 700, 50)

  }

  const drawImage = (ctx) => {
    let img = new Image;
    img.src = 'https://img0.baidu.com/it/u=1705694933,4002952892&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1675184400&t=f370e5b7fdf470eb6cf6906a1efeffdb'
    img.onload = function () {
      ctx.drawImage(img, 600, 200, 400, 200)
    }
  }

  return (
    <canvas id="canvas" width={1000} height={600}>当前浏览器不支持canvas元素，请升级或更换浏览器</canvas>
  )


}
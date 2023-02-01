import React, { useEffect } from 'react';
import './index.css'

export const CanvasSnow = () => {
  let ctx = null
  let snowAry = []
  useEffect(() => {
    const canvas = document.getElementById('canvasSnow')
    canvas.width = window.innerWidth - 50
    canvas.height = window.innerHeight - 50
    ctx = canvas.getContext('2d')
    ctx.globalCompositeOperation = 'destination-over'
    creatSnow()
    requestAnimationFrame(drawAnimate)
  }, [])

  const creatSnow = () => {
    for (let i = 0; i < 300; i++) {
      const x = Math.random() * (window.innerWidth - 50);
      const y = Math.random() * (window.innerHeight - 50)
      const radius = Math.random() * 5 + 1
      snowAry.push({ x, y, radius })
    }
  }

  const drawSnow = () => {
    snowAry?.map((item) => {
      ctx.beginPath();
      ctx.strokeStyle = '#fff'
      ctx.fillStyle = 'rgba(255, 255, 255, .8)'
      ctx.arc(item?.x, item?.y, item?.radius, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.closePath()
    })
  }

  const drawAnimate = () => {
    ctx.clearRect(0, 0, window.innerWidth - 50, window.innerHeight - 50)
    drawSnow()
    snowAry?.map((item) => {
      item.x = item.x + Math.random() + 0.001
      item.y = item.y + Math.random() + 0.001
      if (item.x > window.innerWidth - 50) {
        item.x = 0
      }
      if (item.y > window.innerHeight - 50) {
        item.y = 0
      }
      return item;
    })

    requestAnimationFrame(drawAnimate)
  }

  return (
    <canvas id='canvasSnow'>当前浏览器不支持canvas元素，请升级或更换浏览器</canvas>
  )
}
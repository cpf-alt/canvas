import React, { useEffect } from 'react';
import earth from '../../img/earth.png'
import sun from '../../img/sun.png'
import moon from '../../img/moon.png'
import './index.css'

export const CanvasAnimation = () => {
  let num = 0
  let ctx = null
  let img
  let sunImg = new Image
  let earthImg = new Image
  let moonImg = new Image
  const ball = {
    x: 50,
    y: 50,
    ax: 0.001,
    radius: 20,
    vx: 1,
    vy: 3,
    draw: () => {
      ctx.beginPath()
      // ctx.strokeStyle = "green"
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false)
      ctx.closePath()
      ctx.fillStyle = "green"
      ctx.fill()
    }


  }

  useEffect(() => {
    const canvas = document.getElementById('canvas1')
    ctx = canvas.getContext('2d')
    ctx.globalCompositeOperation = 'destination-over'
    init()

  }, [])

  const init = () => {
    // canvasSun()
    requestAnimationFrame(drawBall)
  }

  const drawBall = () => {
    ctx.clearRect(0, 0, 500, 500); // 清除画布
    ball.draw()
    ball.x += ball.vx;
    ball.y += ball.vy;
    ball.vx = ball.vx - ball.ax // x轴逐渐减速为0
    if (Math.abs(ball.vx - ball.ax) < 0.001) {
      ball.vx = 0;
      ball.ax = 0
    }
    ball.vy = ball.vy + 0.25; // 给定y轴加速度
    if ((ball.x + ball.vx + ball.radius) > 500 || ball.x + ball.vx - ball.radius < 0) { //边界碰撞速度减少
      ball.vx = -ball.vx * 0.6
      ball.ax = -ball.ax
    }
    if ((ball.y + ball.vy + ball.radius) > 500 || ball.y + ball.vy - ball.radius < 0) {
      ball.vy = -ball.vy * 0.6
    }
    requestAnimationFrame(drawBall)
  }

  const canvasSun = () => {
    sunImg.src = sun;
    earthImg.src = earth
    moonImg.src = moon
    requestAnimationFrame(drawSun)
  }

  const drawSun = () => {
    num += 0.005;
    ctx.clearRect(0, 0, 500, 500)
    ctx.strokeStyle = '#ccc'

    ctx.save();
    ctx.translate(250, 250);
    ctx.rotate(num)
    ctx.translate(200, 0)
    ctx.rotate(num)
    ctx.drawImage(earthImg, -20, -20, 40, 40)
    ctx.save();
    ctx.rotate(num * 2);
    ctx.restore()

    ctx.save();
    ctx.rotate(num * 3);
    ctx.translate(0, 40)
    ctx.drawImage(moonImg, -7.5, -7.5, 15, 15)
    ctx.restore();
    ctx.restore()

    ctx.beginPath();
    ctx.arc(250, 250, 200, 0, Math.PI * 2, false);
    ctx.stroke()

    ctx.drawImage(sunImg, 0, 0, 500, 500)
    requestAnimationFrame(drawSun)
  }

  return (
    <canvas id="canvas1" width={500} height={500}>当前浏览器不支持canvas元素，请升级或更换浏览器</canvas>
  )
}
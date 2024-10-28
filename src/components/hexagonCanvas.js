"use client"; // Указание на клиентский компонент

import React, { useEffect } from 'react';
import '../styles/hexagonCanvas.css';

const HexagonCanvas = () => {
  useEffect(() => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let hexagons = [];
    let mouse = { x: null, y: null };

    window.addEventListener('mousemove', (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    });

    function drawHexagon(x, y, radius) {
      const numberOfSides = 6;
      const step = 2 * Math.PI / numberOfSides;
      const shift = Math.PI / 6;

      ctx.beginPath();
      for (let i = 0; i <= numberOfSides; i++) {
        const curStep = i * step + shift;
        const curX = x + radius * Math.cos(curStep);
        const curY = y + radius * Math.sin(curStep);
        ctx.lineTo(curX, curY);
      }
      ctx.closePath();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    class Hexagon {
      constructor(x, y, xVel, yVel, radius) {
        this.x = x;
        this.y = y;
        this.xVel = xVel;
        this.yVel = yVel;
        this.radius = radius;
      }

      update() {
        this.x += this.xVel;
        this.y += this.yVel;

        if (this.x > canvas.width || this.x < 0) {
          this.xVel *= -1;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.yVel *= -1;
        }
      }

      draw() {
        drawHexagon(this.x, this.y, this.radius);
      }
    }

    function initHexagons(quantity) {
      for (let i = 0; i < quantity; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const xVel = (Math.random() - 0.5) * 1;
        const yVel = (Math.random() - 0.5) * 1;
        const radius = Math.random() * 15 + 10;
        hexagons.push(new Hexagon(x, y, xVel, yVel, radius));
      }
    }

    function drawLines() {
      const maxDistance = 150;

      for (let i = 0; i < hexagons.length; i++) {
        for (let j = i + 1; j < hexagons.length; j++) {
          const distance = Math.sqrt(
            (hexagons[i].x - hexagons[j].x) ** 2 + (hexagons[i].y - hexagons[j].y) ** 2
          );

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(hexagons[i].x, hexagons[i].y);
            ctx.lineTo(hexagons[j].x, hexagons[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance + 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.closePath();
          }
        }

        const distanceToMouse = Math.sqrt(
          (hexagons[i].x - mouse.x) ** 2 + (hexagons[i].y - mouse.y) ** 2
        );

        if (distanceToMouse < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(hexagons[i].x, hexagons[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distanceToMouse / maxDistance + 0.2})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
          ctx.closePath();
        }
      }
    }

    initHexagons(80);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < hexagons.length; i++) {
        hexagons[i].update();
        hexagons[i].draw();
      }

      drawLines();

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', () => {});
    };
  }, []);

  return <canvas className="hexagon-canvas"></canvas>;
};

export default HexagonCanvas;

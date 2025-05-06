import React, { useEffect, useRef } from 'react';

const AstronautAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 280;
    canvas.height = 280;

    const stars = [];
    let astronautX = canvas.width / 2;
    let astronautY = canvas.height / 2;
    let astronautRotation = 0;
    let astronautRotationDir = 0.01;

    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.8 + 0.2
      });
    }

    function drawAstronaut(x, y, rotation) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      ctx.fillStyle = '#e0e0e0';
      ctx.beginPath();
      ctx.arc(0, 0, 20, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#7dabff';
      ctx.beginPath();
      ctx.arc(0, -5, 12, 0, Math.PI, false);
      ctx.fill();

      ctx.fillStyle = '#c0c0c0';
      ctx.fillRect(-15, -15, 10, 30);

      ctx.strokeStyle = '#d0d0d0';
      ctx.lineWidth = 5;

      // Arms
      ctx.beginPath();
      ctx.moveTo(0, 5);
      ctx.lineTo(25, -5);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, 5);
      ctx.lineTo(-25, -5);
      ctx.stroke();

      // Legs
      ctx.beginPath();
      ctx.moveTo(0, 20);
      ctx.lineTo(15, 40);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, 20);
      ctx.lineTo(-15, 40);
      ctx.stroke();

      ctx.restore();
    }

    function drawStars() {
      stars.forEach(star => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawStars();

      astronautX += Math.sin(Date.now() * 0.001) * 0.5;
      astronautY += Math.cos(Date.now() * 0.001) * 0.3;

      astronautRotation += astronautRotationDir;
      if (astronautRotation > 0.2 || astronautRotation < -0.2) {
        astronautRotationDir = -astronautRotationDir;
      }

      drawAstronaut(astronautX, astronautY, astronautRotation);

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="flex justify-center">
      <canvas
        ref={canvasRef}
        className="rounded-full bg-slate-800"
        style={{ width: '280px', height: '280px' }}
      />
    </div>
  );
};

export default AstronautAnimation;


'use client';

import { useEffect, useRef } from 'react';

export default function CyberCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = 0, h = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // 3D projection
    const project = (x: number, y: number, z: number, cx: number, cy: number, rY: number, rX: number) => {
      const cosY = Math.cos(rY), sinY = Math.sin(rY);
      let x1 = x * cosY - z * sinY;
      let z1 = x * sinY + z * cosY;
      const cosX = Math.cos(rX), sinX = Math.sin(rX);
      let y1 = y * cosX - z1 * sinX;
      let z2 = y * sinX + z1 * cosX;
      const perspective = 600;
      const scale = perspective / (perspective + z2);
      return { x: cx + x1 * scale, y: cy + y1 * scale, z: z2, s: scale };
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);
      const t = time * 0.001;

      const cx = w > 768 ? w * 0.62 : w * 0.5;
      const cy = h * 0.48;
      const R = Math.min(w > 768 ? 300 : 180, h * 0.38);
      const rotY = t * 0.12;
      const rotX = 0.35;

      // --- LATITUDE LINES ---
      for (let lat = -4; lat <= 4; lat++) {
        const phi = (Math.PI / 9) * lat;
        const r = R * Math.cos(phi);
        const yOff = R * Math.sin(phi);
        ctx.beginPath();
        for (let i = 0; i <= 60; i++) {
          const theta = (Math.PI * 2 / 60) * i;
          const p = project(r * Math.cos(theta), yOff, r * Math.sin(theta), cx, cy, rotY, rotX);
          if (p.z < -R * 0.5) continue;
          if (i === 0 || p.z < -R * 0.3) { ctx.moveTo(p.x, p.y); } else { ctx.lineTo(p.x, p.y); }
        }
        ctx.strokeStyle = `rgba(10, 74, 138, ${0.18 + Math.abs(lat) * 0.02})`;
        ctx.lineWidth = lat === 0 ? 1.2 : 0.7;
        ctx.stroke();
      }

      // --- LONGITUDE LINES ---
      for (let lon = 0; lon < 18; lon++) {
        const theta = (Math.PI * 2 / 18) * lon;
        ctx.beginPath();
        let started = false;
        for (let i = 0; i <= 60; i++) {
          const phi = (Math.PI / 60) * i - Math.PI / 2;
          const r = R * Math.cos(phi);
          const yOff = R * Math.sin(phi);
          const p = project(r * Math.cos(theta), yOff, r * Math.sin(theta), cx, cy, rotY, rotX);
          if (p.z < -R * 0.5) { started = false; continue; }
          if (!started) { ctx.moveTo(p.x, p.y); started = true; } else { ctx.lineTo(p.x, p.y); }
        }
        ctx.strokeStyle = `rgba(10, 74, 138, 0.15)`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      // --- NODE DOTS at intersections ---
      for (let lat = -4; lat <= 4; lat += 1) {
        const phi = (Math.PI / 9) * lat;
        const r = R * Math.cos(phi);
        const yOff = R * Math.sin(phi);
        for (let lon = 0; lon < 18; lon += 1) {
          const theta = (Math.PI * 2 / 18) * lon;
          const p = project(r * Math.cos(theta), yOff, r * Math.sin(theta), cx, cy, rotY, rotX);
          if (p.z < -R * 0.2) continue;
          const alpha = 0.3 + p.s * 0.3;

          // Dot
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2 * p.s, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(10, 74, 138, ${alpha})`;
          ctx.fill();

          // Pulse glow on selected nodes
          if ((lat + lon + Math.floor(t)) % 7 === 0) {
            const glowR = 8 + Math.sin(t * 3 + lat + lon) * 3;
            ctx.beginPath();
            ctx.arc(p.x, p.y, glowR * p.s, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(10, 100, 188, ${0.08 + Math.sin(t * 2) * 0.04})`;
            ctx.fill();
          }
        }
      }

      // --- Data stream arcs (animated paths on the globe) ---
      for (let s = 0; s < 3; s++) {
        const startLon = (t * 0.3 + s * 2.1) % (Math.PI * 2);
        ctx.beginPath();
        for (let i = 0; i <= 20; i++) {
          const frac = i / 20;
          const phi = Math.sin(frac * Math.PI) * 0.8 - 0.2;
          const theta = startLon + frac * 1.5;
          const r = R * Math.cos(phi);
          const yOff = R * Math.sin(phi);
          const p = project(r * Math.cos(theta), yOff, r * Math.sin(theta), cx, cy, rotY, rotX);
          if (p.z < -R * 0.3) { ctx.moveTo(p.x, p.y); } else {
            if (i === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
          }
        }
        ctx.strokeStyle = `rgba(6, 182, 212, ${0.25 + Math.sin(t + s) * 0.1})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // --- Outer orbit ring ---
      ctx.beginPath();
      for (let i = 0; i <= 80; i++) {
        const angle = (Math.PI * 2 / 80) * i;
        const orbitR = R * 1.25;
        const p = project(orbitR * Math.cos(angle), 0, orbitR * Math.sin(angle), cx, cy, rotY, rotX + 0.5);
        if (i === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
      }
      ctx.strokeStyle = 'rgba(10, 74, 138, 0.08)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 8]);
      ctx.stroke();
      ctx.setLineDash([]);

      // --- Satellite dot on orbit ---
      const satAngle = t * 0.4;
      const satP = project(R * 1.25 * Math.cos(satAngle), 0, R * 1.25 * Math.sin(satAngle), cx, cy, rotY, rotX + 0.5);
      ctx.beginPath();
      ctx.arc(satP.x, satP.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(6, 182, 212, 0.6)';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(satP.x, satP.y, 10, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(6, 182, 212, 0.1)';
      ctx.fill();

      animId = requestAnimationFrame(draw);
    };

    resize();
    animId = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

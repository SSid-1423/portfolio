import { useEffect, useRef, useCallback } from "react";

const CursorGlow = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const smoothMouseRef = useRef({ x: -1000, y: -1000 });
  const animRef = useRef<number>(0);

  const lerp = useCallback((a: number, b: number, t: number) => a + (b - a) * t, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Precompute hex geometry
    const hexSize = 28;
    const hexWidth = Math.sqrt(3) * hexSize;
    const vertDist = hexSize * 1.5;
    const horizDist = hexWidth;
    const radius = 220;
    const radiusSq = radius * radius;

    // Precompute hex corner offsets
    const hexOffsets: [number, number][] = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      hexOffsets.push([hexSize * Math.cos(angle), hexSize * Math.sin(angle)]);
    }

    const drawHex = (cx: number, cy: number, alpha: number) => {
      ctx.beginPath();
      ctx.moveTo(cx + hexOffsets[0][0], cy + hexOffsets[0][1]);
      for (let i = 1; i < 6; i++) {
        ctx.lineTo(cx + hexOffsets[i][0], cy + hexOffsets[i][1]);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(45,212,191,${alpha * 0.4})`;
      ctx.lineWidth = 0.6;
      ctx.stroke();
      ctx.fillStyle = `rgba(45,212,191,${alpha * 0.04})`;
      ctx.fill();
    };

    let lastTime = 0;
    const targetFps = 30;
    const frameInterval = 1000 / targetFps;

    const draw = (timestamp: number) => {
      animRef.current = requestAnimationFrame(draw);

      const delta = timestamp - lastTime;
      if (delta < frameInterval) return;
      lastTime = timestamp - (delta % frameInterval);

      // Smooth interpolation
      smoothMouseRef.current.x = lerp(smoothMouseRef.current.x, mouseRef.current.x, 0.15);
      smoothMouseRef.current.y = lerp(smoothMouseRef.current.y, mouseRef.current.y, 0.15);

      const mx = smoothMouseRef.current.x;
      const my = smoothMouseRef.current.y;
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      const startCol = Math.max(0, Math.floor((mx - radius) / horizDist) - 1);
      const endCol = Math.min(Math.ceil(w / horizDist) + 1, Math.ceil((mx + radius) / horizDist) + 1);
      const startRow = Math.max(0, Math.floor((my - radius) / vertDist) - 1);
      const endRow = Math.min(Math.ceil(h / vertDist) + 1, Math.ceil((my + radius) / vertDist) + 1);

      for (let row = startRow; row <= endRow; row++) {
        for (let col = startCol; col <= endCol; col++) {
          const offsetX = row % 2 === 0 ? 0 : horizDist / 2;
          const cx = col * horizDist + offsetX;
          const cy = row * vertDist;

          const dx = cx - mx;
          const dy = cy - my;
          const distSq = dx * dx + dy * dy;

          if (distSq < radiusSq) {
            const dist = Math.sqrt(distSq);
            const alpha = 1 - dist / radius;
            drawHex(cx, cy, alpha * alpha);
          }
        }
      }
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, [lerp]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] hidden lg:block"
    />
  );
};

export default CursorGlow;

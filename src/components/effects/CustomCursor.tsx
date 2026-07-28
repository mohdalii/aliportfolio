import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
      const t = e.target as HTMLElement;
      const hover = t.closest('a, button, [data-hover]');
      ring.style.width = hover ? '54px' : '36px';
      ring.style.height = hover ? '54px' : '36px';
      ring.style.background = hover ? 'rgba(37,99,235,0.15)' : 'transparent';
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener('mousemove', move);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  );
}

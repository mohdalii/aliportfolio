import { useEffect } from 'react';

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export function RippleFX() {
  useEffect(() => {
    let id = 0;
    const onClick = (e: MouseEvent) => {
      const ripple: Ripple = { x: e.clientX, y: e.clientY, id: id++ };
      const el = document.createElement('span');
      el.style.cssText = `position:fixed;left:${ripple.x}px;top:${ripple.y}px;width:8px;height:8px;border-radius:999px;background:rgba(37,99,235,0.5);transform:translate(-50%,-50%);pointer-events:none;z-index:9998;`;
      document.body.appendChild(el);
      el.animate(
        [
          { width: '8px', height: '8px', opacity: 0.6 },
          { width: '220px', height: '220px', opacity: 0 },
        ],
        { duration: 600, easing: 'ease-out' }
      ).onfinish = () => el.remove();
    };
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);
  return null;
}

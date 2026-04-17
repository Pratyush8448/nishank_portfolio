import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/spaceship.json";

const TRAIL_LENGTH = 10;

export default function Spaceship() {
  const containerRef = useRef(null);
  const trailRefs = useRef([]);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const posX = useRef(0);
  const posY = useRef(0);
  const trail = useRef(Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 })));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const move = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    document.addEventListener("mousemove", move);

    let rafId;

    function animate() {
      // Smooth lerp follow
      posX.current += (mouseX.current - posX.current) * 0.08;
      posY.current += (mouseY.current - posY.current) * 0.08;

      const dx = mouseX.current - posX.current;
      const dy = mouseY.current - posY.current;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      // Update spaceship position
      if (containerRef.current) {
        containerRef.current.style.left = posX.current + "px";
        containerRef.current.style.top = posY.current + "px";
        containerRef.current.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      }

      // Shift trail positions
      for (let i = TRAIL_LENGTH - 1; i > 0; i--) {
        trail.current[i].x = trail.current[i - 1].x;
        trail.current[i].y = trail.current[i - 1].y;
      }
      trail.current[0].x = posX.current;
      trail.current[0].y = posY.current;

      // Update trail dots
      trailRefs.current.forEach((dot, i) => {
        if (!dot) return;
        const t = trail.current[i];
        const progress = 1 - i / TRAIL_LENGTH; // 1 = front, 0 = tail
        dot.style.left = t.x + "px";
        dot.style.top = t.y + "px";
        dot.style.opacity = (progress * 0.55).toFixed(3);
        const size = Math.max(3, progress * 10);
        dot.style.width = size + "px";
        dot.style.height = size + "px";
      });

      rafId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      document.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Trail dots */}
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          style={{
            position: "fixed",
            pointerEvents: "none",
            zIndex: 9998,
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, #c084fc, #7c3aed)",
            boxShadow: "0 0 6px #a855f7",
            transition: "opacity 0.05s",
            width: "8px",
            height: "8px",
            top: 0,
            left: 0,
          }}
        />
      ))}

      {/* Spaceship */}
      <div
        ref={containerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "90px",
          pointerEvents: "none",
          zIndex: 9999,
          filter: "drop-shadow(0 0 4px #a855f766) drop-shadow(0 0 8px #7c3aed33)",
        }}
      >
        <Lottie animationData={animationData} loop={true} />
      </div>
    </>
  );
}
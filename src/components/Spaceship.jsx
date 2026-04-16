import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/spaceship.json";

export default function Spaceship() {
  const containerRef = useRef(null);

  let mouseX = 0;
  let mouseY = 0;
  let posX = 0;
  let posY = 0;

  useEffect(() => {
    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", move);

    function animate() {
      // smooth follow (lerp)
      posX += (mouseX - posX) * 0.08;
      posY += (mouseY - posY) * 0.08;

      // rotation angle
      const dx = mouseX - posX;
      const dy = mouseY - posY;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      if (containerRef.current) {
        containerRef.current.style.left = posX + "px";
        containerRef.current.style.top = posY + "px";
        containerRef.current.style.transform =
          `translate(-50%, -50%) rotate(${angle}deg)`;
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => document.removeEventListener("mousemove", move);
  }, []);

  // disable on mobile
  if (window.innerWidth < 768) return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "80px",
        pointerEvents: "none",
        zIndex: 9999
      }}
    >
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X, Award } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Data Science Foundations",
    issuer: "IIT Madras",
    date: "September 2024",
    image: "/foundation-certificate.png",
  },
  {
    id: 2,
    title: "Data Science, ML & Deep Learning",
    issuer: "Syllogistek Systems Pvt Ltd",
    date: "June – July 2024",
    image: "/Datascience-syllogistek.png",
  },
  {
    id: 3,
    title: "The Joy of Computing using Python",
    issuer: "NPTEL",
    date: "July – October 2025",
    image: "/NPTEL-python.png",
  },
  {
    id: 4,
    title: "DevOps Masters",
    issuer: "Ingenious-tech",
    date: "June – July 2025",
    image: "/devops-certificate.png",
  },
  {
    id: 5,
    title: "Understanding Incubation and Entrepreneurship",
    issuer: "NPTEL",
    date: "January – April 2026",
    image: "/nptel-incubation.png",
  },
];

/* ── useWindowWidth ── */
function useWindowWidth() {
  const [w, setW] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return w;
}

export default function Certificate() {
  const [current, setCurrent]   = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [hovered, setHovered]   = useState(false);
  const [isDark, setIsDark]     = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  /* unified pointer tracking for both mouse and touch */
  const touchStart  = useRef(null);   // { x, y }
  const touchMoved  = useRef(false);
  const isScrolling = useRef(null);   // true = vertical scroll, false = horizontal swipe

  const winW = useWindowWidth();

  /* ── responsive breakpoints ── */
  const isMobile = winW < 640;
  const isTablet = winW >= 640 && winW < 1024;

  /* card dimensions computed from viewport */
  const CARD_W = isMobile
    ? Math.min(winW - 48, 340)          // mobile: nearly full width
    : isTablet
      ? Math.min(winW - 160, 480)       // tablet
      : Math.min(winW - 320, 640);      // desktop

  const CARD_H = isMobile ? 260 : isTablet ? 340 : 420;

  /* side peek — hidden on mobile (no room), small on tablet */
  const SIDE_W    = isMobile ? 0 : isTablet ? 80 : 180;
  const SIDE_SCALE = 0.8;
  const GAP        = isMobile ? 0 : 20;

  /* track width = center card + both peeks + gaps */
  const TRACK_W = CARD_W + SIDE_W * 2 + GAP * 2;

  useEffect(() => {
    const obs = new MutationObserver(() =>
      setIsDark(document.documentElement.classList.contains("dark"))
    );
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const total = certificates.length;
  const next  = useCallback(() => setCurrent(c => (c + 1) % total), [total]);
  const prev  = useCallback(() => setCurrent(c => (c === 0 ? total - 1 : c - 1)), [total]);
  const goTo  = (i) => setCurrent(i);

  /* keyboard */
  useEffect(() => {
    const h = (e) => {
      if (lightbox  && e.key === "Escape")     setLightbox(false);
      if (!lightbox && e.key === "ArrowLeft")  prev();
      if (!lightbox && e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [current, lightbox, next, prev]);

  /* auto-advance — pause on hover/touch */
  useEffect(() => {
    if (hovered || lightbox) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [current, hovered, lightbox, next]);

  /* ── Unified touch + mouse handlers ── */
  const getClientX = (e) =>
    e.touches ? e.touches[0].clientX : e.clientX;
  const getClientY = (e) =>
    e.touches ? e.touches[0].clientY : e.clientY;

  const onDragStart = (e) => {
    touchStart.current  = { x: getClientX(e), y: getClientY(e) };
    touchMoved.current  = false;
    isScrolling.current = null;
    setHovered(true);
  };

  const onDragMove = (e) => {
    if (!touchStart.current) return;
    const dx = Math.abs(getClientX(e) - touchStart.current.x);
    const dy = Math.abs(getClientY(e) - touchStart.current.y);

    /* Determine intent once threshold passed */
    if (isScrolling.current === null && (dx > 6 || dy > 6)) {
      isScrolling.current = dy > dx; // true = scrolling vertically
    }

    /* If horizontal swipe, prevent page scroll */
    if (isScrolling.current === false) {
      e.preventDefault();
      if (dx > 8) touchMoved.current = true;
    }
  };

  const onDragEnd = (e) => {
    if (!touchStart.current) return;
    const endX = e.changedTouches
      ? e.changedTouches[0].clientX
      : e.clientX;
    const diff = touchStart.current.x - endX;

    if (isScrolling.current === false && Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
    }
    touchStart.current  = null;
    isScrolling.current = null;
    setHovered(false);
  };

  const d    = isDark;
  const cert = certificates[current];

  const accentLine  = "linear-gradient(90deg,#7c3aed,#ec4899)";
  const headingGrad = "linear-gradient(135deg,#7c3aed 0%,#a855f7 50%,#ec4899 100%)";
  const txt1 = d ? "#f1f5f9" : "#1a103a";
  const txt2 = d ? "#6b7280" : "#9ca3af";

  const getOffset = (idx) => {
    let off = idx - current;
    if (off > total / 2)  off -= total;
    if (off < -total / 2) off += total;
    return off;
  };

  const navBtnBase = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 30,
    width: isMobile ? 36 : 44,
    height: isMobile ? 36 : 44,
    borderRadius: "50%",
    background: d ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.95)",
    border: `1px solid ${d ? "rgba(255,255,255,0.12)" : "rgba(139,92,246,0.22)"}`,
    color: d ? "#c4b5fd" : "#7c3aed",
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer",
    boxShadow: d ? "0 4px 20px rgba(0,0,0,0.5)" : "0 4px 20px rgba(109,40,217,0.14)",
    backdropFilter: "blur(16px)",
    transition: "transform 0.18s, background 0.18s",
    flexShrink: 0,
  };

  return (
    <section
      id="certificates"
      style={{
        minHeight: "100vh",
        background: d ? "#06060e" : "#f2f1fa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "72px 0 60px" : "96px 0 80px",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.45s",
      }}
    >

      {/* ── bg glow ── */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute",
          width: isMobile ? 400 : 800,
          height: isMobile ? 400 : 800,
          borderRadius: "50%",
          background: d
            ? "radial-gradient(circle,rgba(109,40,217,0.09) 0%,transparent 62%)"
            : "radial-gradient(circle,rgba(139,92,246,0.08) 0%,transparent 62%)",
          top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        }} />
        <div style={{ position: "absolute", top: 0, left: 0, width: "40%", height: 2, background: "linear-gradient(90deg,rgba(124,58,237,0.35),transparent)" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, width: "40%", height: 2, background: "linear-gradient(270deg,rgba(236,72,153,0.25),transparent)" }} />
      </div>

      {/* ── Heading ── */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22,1,0.36,1] }}
        style={{
          textAlign: "center",
          marginBottom: isMobile ? 36 : 52,
          position: "relative", zIndex: 1,
          padding: "0 24px",
        }}
      >
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 10, fontWeight: 700, letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: d ? "#a78bfa" : "#7c3aed",
          marginBottom: 14,
          padding: "5px 14px", borderRadius: 99,
          border: `1px solid ${d ? "rgba(139,92,246,0.22)" : "rgba(139,92,246,0.2)"}`,
          background: d ? "rgba(139,92,246,0.07)" : "rgba(139,92,246,0.06)",
        }}>
          <Award size={11} />

        </div>

        <h2 style={{
          fontSize: isMobile ? "2.2rem" : "clamp(2.6rem,5vw,3.8rem)",
          fontWeight: 900,
          margin: "0 0 14px", lineHeight: 1.08,
          background: headingGrad,
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        }}>
          Certifications
        </h2>

        <div style={{ display: "flex", justifyContent: "center", gap: 5 }}>
          <div style={{ height: 2, width: 48, borderRadius: 99, background: accentLine }} />
          <div style={{ height: 2, width: 10, borderRadius: 99, background: d ? "rgba(168,85,247,0.3)" : "rgba(168,85,247,0.25)" }} />
          <div style={{ height: 2, width: 5,  borderRadius: 99, background: d ? "rgba(168,85,247,0.12)" : "rgba(168,85,247,0.12)" }} />
        </div>
      </motion.div>

      {/* ── Carousel ── */}
      <div
        style={{
          position: "relative", zIndex: 1,
          width: "100%",
          display: "flex", alignItems: "center", justifyContent: "center",
          /* on mobile put nav buttons inside as overlay since there's no side room */
          padding: isMobile ? "0" : `0 ${SIDE_W === 0 ? 48 : 52}px`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        /* mouse drag */
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        /* touch swipe */
        onTouchStart={onDragStart}
        onTouchMove={onDragMove}
        onTouchEnd={onDragEnd}
      >

        {/* ── Nav prev ── */}
        <button
          onClick={prev}
          aria-label="Previous certificate"
          style={{
            ...navBtnBase,
            left: isMobile ? 8 : -4,
            zIndex: 40,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            e.currentTarget.style.background = d ? "rgba(139,92,246,0.3)" : "rgba(139,92,246,0.12)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            e.currentTarget.style.background = d ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.95)";
          }}
        >
          <ChevronLeft size={isMobile ? 16 : 19} />
        </button>

        {/* ── Track ── */}
        <div style={{
          width: Math.min(TRACK_W, winW - (isMobile ? 0 : 80)),
          height: CARD_H + 90,
          position: "relative",
          overflow: "hidden",
          touchAction: "pan-y", /* allow vertical scroll, JS handles horizontal */
        }}>
          {certificates.map((c, idx) => {
            const off      = getOffset(idx);
            const isActive = off === 0;

            /* only render center + ±1 */
            if (Math.abs(off) > 1) return null;

            const trackCenter = Math.min(TRACK_W, winW - (isMobile ? 0 : 80)) / 2;
            let x;
            if (off === 0)       x = trackCenter - CARD_W / 2;
            else if (off === -1) x = trackCenter - CARD_W / 2 - SIDE_W - GAP;
            else                 x = trackCenter + CARD_W / 2 + GAP;

            return (
              <motion.div
                key={c.id}
                animate={{
                  x,
                  scale: isActive ? 1 : SIDE_SCALE,
                  opacity: isActive ? 1 : (isMobile ? 0 : 0.35),
                }}
                transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "absolute", top: 0, left: 0,
                  width: isActive ? CARD_W : SIDE_W,
                  transformOrigin: off < 0 ? "right center" : "left center",
                  cursor: isActive ? "default" : "pointer",
                  zIndex: isActive ? 10 : 5,
                  /* prevent text selection during swipe */
                  userSelect: "none",
                  WebkitUserSelect: "none",
                }}
                onClick={() => !isActive && goTo(idx)}
              >
                <div style={{
                  borderRadius: isMobile ? 14 : 18,
                  overflow: "hidden",
                  background: d ? "rgba(255,255,255,0.03)" : "#ffffff",
                  border: `1px solid ${isActive
                    ? (d ? "rgba(168,85,247,0.38)" : "rgba(139,92,246,0.28)")
                    : (d ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)")}`,
                  boxShadow: isActive
                    ? (d
                      ? "0 0 0 1px rgba(139,92,246,0.15), 0 24px 80px rgba(0,0,0,0.65)"
                      : "0 0 0 1px rgba(139,92,246,0.1),  0 16px 60px rgba(109,40,217,0.15)")
                    : "none",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}>
                  {/* top accent */}
                  <div style={{
                    height: 3,
                    background: isActive ? accentLine : (d ? "rgba(139,92,246,0.12)" : "rgba(139,92,246,0.08)"),
                  }} />

                  {/* ── Certificate image ── */}
                  <div
                    style={{
                      width: "100%", height: CARD_H,
                      background: d ? "#0c0c18" : "#f8f6ff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      overflow: "hidden", position: "relative",
                      cursor: isActive ? "zoom-in" : "pointer",
                    }}
                    onClick={() => isActive && !touchMoved.current && setLightbox(true)}
                  >
                    <img
                      src={c.image}
                      alt={c.title}
                      draggable={false}
                      style={{
                        maxWidth: "100%", maxHeight: "100%",
                        width: "100%", height: "100%",
                        objectFit: "contain",
                        display: "block",
                        padding: isMobile ? 8 : 12,
                        boxSizing: "border-box",
                        pointerEvents: "none",
                      }}
                    />

                    {/* Hover overlay — desktop active only */}
                    {isActive && !isMobile && (
                      <div
                        style={{
                          position: "absolute", inset: 0,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          background: "rgba(0,0,0,0)",
                          transition: "background 0.25s",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = "rgba(0,0,0,0.22)";
                          const p = e.currentTarget.querySelector(".view-pill");
                          if (p) { p.style.opacity = "1"; p.style.transform = "scale(1)"; }
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = "rgba(0,0,0,0)";
                          const p = e.currentTarget.querySelector(".view-pill");
                          if (p) { p.style.opacity = "0"; p.style.transform = "scale(0.87)"; }
                        }}
                      >
                        <div className="view-pill" style={{
                          opacity: 0, transform: "scale(0.87)",
                          transition: "opacity 0.22s, transform 0.22s",
                          display: "flex", alignItems: "center", gap: 7,
                          padding: "9px 22px", borderRadius: 99,
                          background: "rgba(0,0,0,0.58)", backdropFilter: "blur(10px)",
                          color: "#fff", fontSize: 13, fontWeight: 600,
                          border: "1px solid rgba(255,255,255,0.18)",
                          pointerEvents: "none",
                        }}>
                          <Maximize2 size={13} /> View full size
                        </div>
                        {/* corner expand icon */}
                        <div style={{
                          position: "absolute", top: 12, right: 12,
                          width: 30, height: 30, borderRadius: 8,
                          background: d ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.9)",
                          backdropFilter: "blur(12px)",
                          border: `1px solid ${d ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)"}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: d ? "#c4b5fd" : "#7c3aed",
                          pointerEvents: "none",
                        }}>
                          <Maximize2 size={12} />
                        </div>
                      </div>
                    )}

                    {/* Mobile tap hint */}
                    {isActive && isMobile && (
                      <div style={{
                        position: "absolute", bottom: 10, right: 10,
                        width: 28, height: 28, borderRadius: 7,
                        background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#fff", pointerEvents: "none",
                      }}>
                        <Maximize2 size={12} />
                      </div>
                    )}
                  </div>

                  {/* ── Info strip (active only) ── */}
                  {isActive && (
                    <div style={{
                      padding: isMobile ? "12px 16px 14px" : "14px 20px 16px",
                      background: d ? "rgba(255,255,255,0.025)" : "rgba(245,243,255,0.85)",
                      borderTop: `1px solid ${d ? "rgba(255,255,255,0.06)" : "rgba(139,92,246,0.1)"}`,
                      display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14,
                    }}>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <p style={{
                          margin: 0,
                          fontSize: isMobile ? 13 : 15,
                          fontWeight: 700, color: txt1,
                          letterSpacing: "-0.015em",
                          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                        }}>
                          {c.title}
                        </p>
                        <p style={{
                          margin: "4px 0 0", fontSize: isMobile ? 11 : 12,
                          color: txt2, display: "flex", alignItems: "center",
                          gap: 6, flexWrap: "wrap",
                        }}>
                          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: isMobile ? 120 : 220 }}>
                            {c.issuer}
                          </span>
                          <span style={{ width: 3, height: 3, borderRadius: "50%", background: d ? "#374151" : "#d1d5db", flexShrink: 0 }} />
                          <span style={{ whiteSpace: "nowrap" }}>{c.date}</span>
                        </p>
                      </div>

                      {/* dots */}
                      <div style={{ display: "flex", gap: 5, alignItems: "center", flexShrink: 0 }}>
                        {certificates.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => goTo(i)}
                            aria-label={`Certificate ${i + 1}`}
                            style={{
                              width: i === current ? (isMobile ? 20 : 24) : (isMobile ? 6 : 7),
                              height: isMobile ? 6 : 7,
                              borderRadius: 99, border: "none", padding: 0, cursor: "pointer",
                              background: i === current
                                ? "linear-gradient(90deg,#7c3aed,#ec4899)"
                                : d ? "rgba(255,255,255,0.14)" : "rgba(139,92,246,0.18)",
                              boxShadow: i === current ? "0 0 10px rgba(168,85,247,0.55)" : "none",
                              transition: "width 0.38s cubic-bezier(0.34,1.56,0.64,1), background 0.25s",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* bottom accent */}
                  {isActive && (
                    <div style={{ height: 2, background: d ? "rgba(139,92,246,0.15)" : "rgba(139,92,246,0.08)" }} />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Nav next ── */}
        <button
          onClick={next}
          aria-label="Next certificate"
          style={{
            ...navBtnBase,
            right: isMobile ? 8 : -4,
            zIndex: 40,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            e.currentTarget.style.background = d ? "rgba(139,92,246,0.3)" : "rgba(139,92,246,0.12)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            e.currentTarget.style.background = d ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.95)";
          }}
        >
          <ChevronRight size={isMobile ? 16 : 19} />
        </button>
      </div>

      {/* ── Counter + swipe hint ── */}
      <div style={{
        marginTop: 24, position: "relative", zIndex: 1,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
      }}>
        <p style={{ fontSize: 12, color: txt2, letterSpacing: "0.08em", margin: 0 }}>
          <span style={{ color: d ? "#a78bfa" : "#7c3aed", fontWeight: 700 }}>{current + 1}</span>
          <span style={{ margin: "0 4px" }}>/</span>
          {total}
        </p>
        {isMobile && (
          <p style={{ fontSize: 11, color: d ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.25)", margin: 0, letterSpacing: "0.04em" }}>
            Swipe to navigate
          </p>
        )}
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(false)}
            /* lightbox swipe */
            onTouchStart={onDragStart}
            onTouchMove={onDragMove}
            onTouchEnd={onDragEnd}
            style={{
              position: "fixed", inset: 0, zIndex: 9999,
              background: "rgba(0,0,0,0.95)",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: isMobile ? 16 : 32,
              backdropFilter: "blur(14px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22,1,0.36,1] }}
              onClick={e => e.stopPropagation()}
              style={{
                position: "relative", borderRadius: isMobile ? 12 : 16, overflow: "hidden",
                boxShadow: "0 40px 120px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.06)",
                maxWidth: isMobile ? "98vw" : "92vw",
                maxHeight: isMobile ? "88vh" : "92vh",
                display: "flex", flexDirection: "column",
                background: "#06060e",
              }}
            >
              <div style={{ height: 3, background: accentLine, flexShrink: 0 }} />

              <AnimatePresence mode="wait">
                <motion.img
                  key={cert.image}
                  src={cert.image}
                  alt={cert.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  style={{
                    display: "block",
                    maxWidth: isMobile ? "98vw" : "92vw",
                    maxHeight: isMobile ? "75vh" : "82vh",
                    objectFit: "contain",
                    background: "#06060e",
                  }}
                />
              </AnimatePresence>

              <div style={{
                padding: isMobile ? "11px 16px" : "14px 20px",
                background: "rgba(6,6,14,0.98)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                flexShrink: 0,
              }}>
                <p style={{ margin: 0, fontSize: isMobile ? 13 : 14, fontWeight: 700, color: "#f1f5f9" }}>
                  {cert.title}
                </p>
                <p style={{ margin: "3px 0 0", fontSize: 12, color: "#6b7280" }}>
                  {cert.issuer} · {cert.date}
                </p>
              </div>

              {/* Close */}
              <button
                onClick={() => setLightbox(false)}
                style={{
                  position: "absolute", top: 12, right: 12,
                  width: 34, height: 34, borderRadius: "50%",
                  background: "rgba(0,0,0,0.7)", border: "1px solid rgba(255,255,255,0.14)",
                  color: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", backdropFilter: "blur(8px)", transition: "background 0.15s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(139,92,246,0.65)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0.7)"}
              >
                <X size={15} />
              </button>

              {/* Lightbox nav arrows (hidden on small mobile — swipe works) */}
              {!isMobile && [
                { side: "left",  fn: prev, Icon: ChevronLeft  },
                { side: "right", fn: next, Icon: ChevronRight },
              ].map(({ side, fn, Icon }) => (
                <button
                  key={side}
                  onClick={(e) => { e.stopPropagation(); fn(); }}
                  style={{
                    position: "absolute", top: "50%", [side]: 14, transform: "translateY(-50%)",
                    width: 40, height: 40, borderRadius: "50%",
                    background: "rgba(0,0,0,0.65)", border: "1px solid rgba(255,255,255,0.1)",
                    color: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", backdropFilter: "blur(8px)",
                    transition: "background 0.15s, transform 0.15s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(109,40,217,0.6)"; e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(0,0,0,0.65)"; e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}
                >
                  <Icon size={18} />
                </button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
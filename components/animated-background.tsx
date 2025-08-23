"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    let W: number,
      H: number,
      pts: any[] = [],
      running = true

    /* ==== TUNABLE PERFORMANCE SETTINGS ==== */
    const MAX_FPS = 22
    const BASE_POINTS = 44
    const LINK_DIST = 130
    const NODE_SPEED = 0.35
    const NODE_RADIUS = 1.6
    const BG = "#0a0a0a" // Dark background for cyber theme
    const LINE_RGB = "0,255,136" // Green cyber lines
    const LINE_ALPHA_MAX = 0.16
    const PALETTE = ["#00C2FF", "#00B894", "#8A2BE2", "#FF6B6B", "#FFB200"]

    /* Reduce eye-candy on slow connections / data saver */
    const conn =
      (navigator as any).connection || (navigator as any).webkitConnection || (navigator as any).mozConnection
    const SAVE_MODE = conn && (conn.saveData || /2g/.test(conn.effectiveType || "")) ? true : false
    const FPS = SAVE_MODE ? 14 : MAX_FPS
    const SPEED = SAVE_MODE ? NODE_SPEED * 0.7 : NODE_SPEED
    const LINK = SAVE_MODE ? LINK_DIST * 0.9 : LINK_DIST

    /* Lower rendering resolution slightly for speed (keeps canvas visually crisp) */
    const DPR = Math.min(1.25, window.devicePixelRatio || 1)
    const SCALE_QUALITY = 0.9

    function randColor() {
      return PALETTE[(Math.random() * PALETTE.length) | 0]
    }

    function targetPoints() {
      const ref = 1280 * 720
      const area = window.innerWidth * window.innerHeight
      const factor = Math.sqrt(area / ref)
      const n = Math.round(BASE_POINTS * factor)
      return Math.max(24, Math.min(n, 72))
    }

    function resize() {
      W = Math.floor(window.innerWidth * SCALE_QUALITY)
      H = Math.floor(window.innerHeight * SCALE_QUALITY)
      canvas.width = Math.max(1, Math.floor(W * DPR))
      canvas.height = Math.max(1, Math.floor(H * DPR))
      canvas.style.width = window.innerWidth + "px"
      canvas.style.height = window.innerHeight + "px"

      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      ctx.imageSmoothingEnabled = true

      const count = targetPoints()
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        color: randColor(),
      }))
    }

    function step() {
      for (const p of pts) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
      }
    }

    function render() {
      ctx.fillStyle = BG
      ctx.fillRect(0, 0, W, H)

      // links (cyber green)
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i]
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j]
          const dx = a.x - b.x,
            dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < LINK * LINK) {
            const d = Math.sqrt(d2)
            const alpha = (1 - d / LINK) * LINE_ALPHA_MAX
            ctx.strokeStyle = `rgba(${LINE_RGB},${alpha.toFixed(3)})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // nodes
      for (const p of pts) {
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, NODE_RADIUS, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    let last = 0
    const FRAME_MS = 1000 / FPS

    function loop(ts: number) {
      if (!running) return
      if (ts - last < FRAME_MS) {
        requestAnimationFrame(loop)
        return
      }
      last = ts

      step()
      render()
      requestAnimationFrame(loop)
    }

    const handleResize = () => resize()
    const handleVisibilityChange = () => {
      running = !document.hidden
      if (running) requestAnimationFrame(loop)
    }

    window.addEventListener("resize", handleResize, { passive: true })
    document.addEventListener("visibilitychange", handleVisibilityChange, { passive: true })

    resize()
    requestAnimationFrame(loop)

    return () => {
      running = false
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: "#0a0a0a",
        filter: "contrast(102%)",
      }}
      aria-hidden="true"
    />
  )
}

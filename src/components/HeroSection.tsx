import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TOTAL_FRAMES = 8
const frames = Array.from({ length: TOTAL_FRAMES }, (_, i) => `/hero/frame-${i}.jpg?v=exec`)

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const currentFrameRef = useRef(0)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let loadedCount = 0
    imagesRef.current = frames.map((src) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        loadedCount++
        if (loadedCount === TOTAL_FRAMES) {
          setLoaded(true)
          drawFrame(0)
        }
      }
      img.onerror = () => {
        loadedCount++
        if (loadedCount === TOTAL_FRAMES) setLoaded(true)
      }
      return img
    })
  }, [])

  const getDrawDimensions = (img: HTMLImageElement, W: number, H: number) => {
    const isMobile = W < 768
    const maxH = isMobile ? H * 0.72 : H * 0.85
    const maxW = isMobile ? W * 0.92 : W * 0.52
    const scale = Math.min(maxH / img.naturalHeight, maxW / img.naturalWidth)
    const drawW = img.naturalWidth * scale
    const drawH = img.naturalHeight * scale
    const drawX = (W - drawW) / 2
    const drawY = (H - drawH) / 2 + (isMobile ? 35 : 18)
    return { drawW, drawH, drawX, drawY }
  }

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const frameIndex = Math.round(index) % TOTAL_FRAMES
    const img = imagesRef.current[frameIndex]
    if (!img || !img.complete || !img.naturalWidth) return

    const W = canvas.width
    const H = canvas.height
    const { drawW, drawH, drawX, drawY } = getDrawDimensions(img, W, H)

    ctx.clearRect(0, 0, W, H)
    ctx.fillStyle = '#0D0D0D'
    ctx.fillRect(0, 0, W, H)
    ctx.drawImage(img, drawX, drawY, drawW, drawH)
  }

  useEffect(() => {
    if (!loaded) return
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return

    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawFrame(currentFrameRef.current)
    }
    setSize()
    window.addEventListener('resize', setSize)

    drawFrame(0)

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=400%',
      pin: true,
      pinSpacing: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress
        const rawFrame = progress * (TOTAL_FRAMES - 0.001)
        const frameIndex = Math.floor(rawFrame) % TOTAL_FRAMES

        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex
          drawFrame(frameIndex)
        }

        const alpha = rawFrame - Math.floor(rawFrame)
        if (alpha > 0.05 && imagesRef.current[frameIndex] && imagesRef.current[(frameIndex + 1) % TOTAL_FRAMES]) {
          blendFrames(frameIndex, (frameIndex + 1) % TOTAL_FRAMES, alpha)
        }

        if (scrollIndicatorRef.current) {
          scrollIndicatorRef.current.style.opacity = String(Math.max(0, 1 - progress * 8))
        }
      },
    })

    if (textRef.current) {
      gsap.fromTo(
        textRef.current.querySelectorAll('.anim-in'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.3 }
      )
    }

    return () => {
      trigger.kill()
      window.removeEventListener('resize', setSize)
    }
  }, [loaded])

  const blendFrames = (frameA: number, frameB: number, alpha: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const imgA = imagesRef.current[frameA]
    const imgB = imagesRef.current[frameB]
    if (!imgA?.complete || !imgB?.complete) return

    const W = canvas.width
    const H = canvas.height

    ctx.clearRect(0, 0, W, H)
    ctx.fillStyle = '#0D0D0D'
    ctx.fillRect(0, 0, W, H)

    ctx.globalAlpha = 1 - alpha
    const a = getDrawDimensions(imgA, W, H)
    ctx.drawImage(imgA, a.drawX, a.drawY, a.drawW, a.drawH)

    ctx.globalAlpha = alpha
    const b = getDrawDimensions(imgB, W, H)
    ctx.drawImage(imgB, b.drawX, b.drawY, b.drawW, b.drawH)

    ctx.globalAlpha = 1
  }

  return (
    <section ref={sectionRef} className="hero-section" style={{ height: '100vh' }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block',
        }}
        aria-label="Portrait of Mohan Manjunadha Reddy Gopireddy"
        role="img"
      />

      {!loaded && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0D0D0D'
        }}>
          <div style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '4rem',
            color: '#F5F0E8',
            opacity: 0.3
          }}>MMR</div>
        </div>
      )}

      {/* Subtle vignette for depth */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 35%, rgba(13,13,13,0.7) 100%)',
        pointerEvents: 'none',
        zIndex: 5,
      }} />

      {/* Hero Text Overlay */}
      <div ref={textRef} className="hero-text-overlay">
        {/* Top Left */}
        <div className="hero-top-left">
          <div className="anim-in" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.625rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#C9A96E',
            background: 'rgba(201, 169, 110, 0.08)',
            border: '1px solid rgba(201, 169, 110, 0.25)',
            padding: '0.35rem 0.85rem',
            borderRadius: '100px',
            marginBottom: '0.75rem',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9A96E', display: 'inline-block' }} />
            AI Engineer &amp; Automation
          </div>
          <h1 className="anim-in" style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.5rem, 3.2vw, 2.35rem)',
            fontWeight: 500,
            color: '#F5F0E8',
            lineHeight: 1.2,
            maxWidth: '340px',
          }}>
            Mohan Manjunadha<br />
            <em style={{ fontStyle: 'italic', color: '#C9A96E' }}>Reddy Gopireddy</em>
          </h1>
          <div className="anim-in" style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            color: 'rgba(245,240,232,0.6)',
            marginTop: '0.5rem',
          }}>
            Parul University · Vadodara, India
          </div>
        </div>

        {/* Bottom Right */}
        <div className="hero-bottom-right">
          <div className="anim-in" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.6rem',
            letterSpacing: '0.15em',
            color: '#C9A96E',
            marginBottom: '0.5rem',
          }}>
            <span>✦ ORACLE CERTIFIED GENAI PROFESSIONAL</span>
          </div>

          <p className="anim-in" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.875rem',
            lineHeight: 1.7,
            color: 'rgba(245,240,232,0.7)',
            maxWidth: '360px',
            textAlign: 'right',
          }}>
            Engineering AI agent automation workflows, Python LLM systems, and high-impact web architectures. Co-Founder at MediaManager4U &amp; AI Engineer Intern at Nulfinity Technologies.
          </p>

          <div className="hero-cta-group anim-in">
            <a
              href="#work"
              className="btn-ghost"
              onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Selected Work
            </a>
            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div ref={scrollIndicatorRef} className="scroll-indicator">
        <div className="scroll-arrow" />
        <div className="scroll-indicator-text">Scroll to Explore</div>
      </div>
    </section>
  )
}

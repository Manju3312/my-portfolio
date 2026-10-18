import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState('')
  const [expanded, setExpanded] = useState(false)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const rafId = useRef<number>(0)
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches

  useEffect(() => {
    if (isMobile) return

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.left = pos.current.x + 'px'
        dotRef.current.style.top = pos.current.y + 'px'
      }
      // Lerp ring position
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + 'px'
        ringRef.current.style.top = ringPos.current.y + 'px'
      }
      if (labelRef.current) {
        labelRef.current.style.left = pos.current.x + 'px'
        labelRef.current.style.top = pos.current.y + 'px'
      }
      rafId.current = requestAnimationFrame(animate)
    }

    const onEnterProject = (e: Event) => {
      const el = e.currentTarget as HTMLElement
      setLabel(el.dataset.cursorLabel || 'VIEW')
      setExpanded(true)
    }

    const onLeaveProject = () => {
      setLabel('')
      setExpanded(false)
    }

    const onEnterImage = () => {
      setLabel('EXPLORE')
      setExpanded(true)
    }

    window.addEventListener('mousemove', onMove)
    rafId.current = requestAnimationFrame(animate)

    // Attach to project items
    document.querySelectorAll('[data-cursor="project"]').forEach(el => {
      el.addEventListener('mouseenter', onEnterProject)
      el.addEventListener('mouseleave', onLeaveProject)
    })

    document.querySelectorAll('[data-cursor="image"]').forEach(el => {
      el.addEventListener('mouseenter', onEnterImage)
      el.addEventListener('mouseleave', onLeaveProject)
    })

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => setExpanded(true))
      el.addEventListener('mouseleave', () => { setExpanded(false); setLabel('') })
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId.current)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ display: label ? 'none' : 'block' }} />
      <div ref={ringRef} className={`cursor-ring ${expanded ? 'expanded' : ''}`} />
      <div
        ref={labelRef}
        className={`cursor-label ${label ? 'visible' : ''}`}
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        {label}
      </div>
    </>
  )
}

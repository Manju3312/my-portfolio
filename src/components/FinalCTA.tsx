import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo(
      section.querySelectorAll('.cta-anim'),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 75%' },
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="final-cta-section"
      style={{
        padding: '9rem 2rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2.5rem',
      }}
    >
      <div className="cta-anim" style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.7rem',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: 'rgba(13,13,13,0.5)',
      }}>
        Open for AI Engineering Roles &amp; High-Impact Collaborations
      </div>

      <h2 className="cta-anim" style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
        fontWeight: 500,
        color: '#0D0D0D',
        lineHeight: 1.05,
        maxWidth: '850px',
      }}>
        Ready to build the<br />
        <em style={{ fontStyle: 'italic' }}>next generation of AI?</em>
      </h2>

      <div className="cta-anim" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.8125rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#F5F0E8',
            background: '#0D0D0D',
            padding: '1.1rem 2.75rem',
            textDecoration: 'none',
            borderRadius: '4px',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#262626' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#0D0D0D' }}
        >
          Contact Mohan
          <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
            <path d="M0 4H14M11 1L14 4L11 7" stroke="#F5F0E8" strokeWidth="1" />
          </svg>
        </a>

        <a
          href="mailto:manjugopireddy78@gmail.com"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.8125rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#0D0D0D',
            background: 'transparent',
            border: '1px solid rgba(13,13,13,0.3)',
            padding: '1.1rem 2.75rem',
            textDecoration: 'none',
            borderRadius: '4px',
            transition: 'border-color 0.2s, background 0.2s',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = '#0D0D0D'
            ;(e.currentTarget as HTMLElement).style.background = 'rgba(13,13,13,0.05)'
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(13,13,13,0.3)'
            ;(e.currentTarget as HTMLElement).style.background = 'transparent'
          }}
        >
          Send Email
        </a>
      </div>
    </section>
  )
}

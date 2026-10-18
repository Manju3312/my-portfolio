import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CommunitySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo(
      section.querySelectorAll('.community-anim'),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 75%' },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: '#111111' }}>
      <div className="container">
        <div className="section-label community-anim">07 — Community</div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}>
          <div>
            <h2 className="community-anim" style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
              fontWeight: 500,
              color: '#F5F0E8',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}>
              Building beyond<br />
              <em style={{ color: 'rgba(245,240,232,0.6)', fontStyle: 'italic' }}>code.</em>
            </h2>
            <p className="community-anim" style={{
              fontSize: '0.9375rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.6)',
              marginBottom: '2rem',
            }}>
              Beyond the code editor, I build community. Sri Tech is a growing platform where I share knowledge around development, careers, resumes, GitHub, AI and full-stack development — reaching 40K+ people.
            </p>
            <div className="community-anim" style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '3rem',
              color: '#C9A96E',
              fontWeight: 500,
              marginBottom: '0.5rem',
            }}>
              40K+
            </div>
            <div className="community-anim" style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#6B6B6B',
            }}>
              Community Members
            </div>
          </div>

          <div>
            <div className="community-anim" style={{
              borderTop: '1px solid rgba(245,240,232,0.08)',
              paddingTop: '2rem',
              marginBottom: '2rem',
            }}>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.625rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C9A96E',
                marginBottom: '1rem',
              }}>
                Content Topics
              </div>
              {[
                'Full-Stack Development',
                'Career Guidance & Resumes',
                'GitHub for Developers',
                'AI Tools & Products',
                'Open Source & Projects',
              ].map((topic) => (
                <div key={topic} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(245,240,232,0.05)',
                  fontSize: '0.875rem',
                  color: 'rgba(245,240,232,0.65)',
                }}>
                  <span style={{ width: '4px', height: '4px', background: '#C9A96E', borderRadius: '50%', flexShrink: 0 }} />
                  {topic}
                </div>
              ))}
            </div>

            <div className="community-anim" style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.625rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#6B6B6B',
              marginBottom: '1rem',
            }}>
              Platform: Sri Tech
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { number: 'OCI 2025', label: 'Certified GenAI Professional' },
  { number: '3', label: 'Industry & Founder Roles' },
  { number: '9.05', label: 'Intermediate CGPA (MPC)' },
  { number: '7.19', label: 'Parul Univ B.Tech CSE' },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const els = section.querySelectorAll('.about-anim')
    gsap.fromTo(
      els,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
        },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} id="about" className="section-padding" style={{ background: '#0D0D0D' }}>
      <div className="container">
        <div className="section-label about-anim">01 — About Mohan</div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
          marginBottom: '4rem',
        }}>
          {/* Left Column: Heading, Narrative & Core Philosophy */}
          <div>
            <h2 className="about-anim" style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
              fontWeight: 500,
              color: '#F5F0E8',
              lineHeight: 1.15,
              marginBottom: '2rem',
            }}>
              Where Generative AI<br />
              <em style={{ color: '#C9A96E', fontStyle: 'italic' }}>meets autonomous systems.</em>
            </h2>

            <p className="about-anim" style={{
              fontSize: '0.95rem',
              lineHeight: 1.85,
              color: 'rgba(245,240,232,0.7)',
              marginBottom: '1.25rem',
            }}>
              I am an <strong style={{ color: '#F5F0E8', fontWeight: 500 }}>AI Engineer Intern at Nulfinity Technologies</strong> and a B.Tech Computer Science &amp; Engineering student at Parul University, Vadodara. Certified as an <strong style={{ color: '#C9A96E', fontWeight: 500 }}>Oracle Cloud Infrastructure 2025 Generative AI Professional</strong>, I specialize in building autonomous AI agent workflows, prompt engineering architectures, and production-grade LLM applications.
            </p>

            <p className="about-anim" style={{
              fontSize: '0.95rem',
              lineHeight: 1.85,
              color: 'rgba(245,240,232,0.65)',
              marginBottom: '1.25rem',
            }}>
              As Co-Founder and Automation Engineer at <strong style={{ color: '#F5F0E8', fontWeight: 500 }}>MediaManager4U</strong>, I deliver end-to-end n8n, AI agent, and Notion business automation systems for real-world clients, eliminating manual bottlenecks and accelerating digital product delivery.
            </p>

            <p className="about-anim" style={{
              fontSize: '0.95rem',
              lineHeight: 1.85,
              color: 'rgba(245,240,232,0.55)',
            }}>
              With strong roots in Data Structures &amp; Algorithms, Object-Oriented Programming, and Database Management Systems, I design solutions where engineering rigor and cutting-edge intelligence coalesce seamlessly.
            </p>

            <div className="about-anim" style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                background: 'rgba(201, 169, 110, 0.08)',
                border: '1px solid rgba(201, 169, 110, 0.2)',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                color: '#C9A96E',
              }}>
                <span>📍 Vadodara, Gujarat, India</span>
              </div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                background: 'rgba(245, 240, 232, 0.05)',
                border: '1px solid rgba(245, 240, 232, 0.1)',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                color: 'rgba(245, 240, 232, 0.8)',
              }}>
                <span>🎓 Parul University (2023 – 2027)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mohan Portrait & Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Mohan's Authentic Portrait Showcase */}
            <div className="about-anim" style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(201, 169, 110, 0.3)',
              background: '#141414',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            }}>
              <div style={{
                position: 'relative',
                aspectRatio: '4/4.8',
                overflow: 'hidden',
              }}>
                <img
                  src="/mohan-portrait.jpg?v=exec"
                  alt="Mohan Manjunadha Reddy Gopireddy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    filter: 'contrast(1.05) brightness(0.98)',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}
                />
                
                {/* Subtle vignette gradient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.2) 50%, transparent 100%)',
                  pointerEvents: 'none',
                }} />

                {/* Overlaid Floating Tag */}
                <div style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}>
                  <div>
                    <div style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.65rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#C9A96E',
                      marginBottom: '0.25rem',
                    }}>
                      AI Engineer &amp; Founder
                    </div>
                    <div style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.25rem',
                      color: '#F5F0E8',
                      fontWeight: 500,
                    }}>
                      Mohan Manjunadha Reddy
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    background: 'rgba(13,13,13,0.75)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(201,169,110,0.3)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '100px',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.625rem',
                    color: '#4ADE80',
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ADE80' }} />
                    Available
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
            }}>
              {stats.map((stat) => (
                <div key={stat.label} className="about-anim" style={{ borderTop: '1px solid rgba(245,240,232,0.1)', paddingTop: '1.25rem' }}>
                  <div className="stat-number" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Oracle Certified Spotlight Box */}
            <div className="about-anim" style={{
              background: 'linear-gradient(135deg, rgba(201,169,110,0.08) 0%, rgba(13,13,13,0.9) 100%)',
              border: '1px solid rgba(201,169,110,0.3)',
              borderRadius: '12px',
              padding: '1.75rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C9A96E',
                marginBottom: '0.6rem',
              }}>
                Verified Credential · Oracle University
              </div>

              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.2rem',
                color: '#F5F0E8',
                marginBottom: '0.5rem',
                lineHeight: 1.3,
              }}>
                Oracle Cloud Infrastructure 2025 Certified Generative AI Professional
              </h3>

              <p style={{
                fontSize: '0.825rem',
                lineHeight: 1.6,
                color: 'rgba(245,240,232,0.6)',
                marginBottom: '0.85rem',
              }}>
                Demonstrated mastery in OCI Generative AI, LLMs, fine-tuning, embeddings, vector databases, prompt engineering, and building resilient enterprise GenAI applications.
              </p>

              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.7rem',
                color: '#8A8A8A',
                display: 'flex',
                justifyContent: 'space-between',
                borderTop: '1px solid rgba(245,240,232,0.08)',
                paddingTop: '0.75rem',
              }}>
                <span>Issued: Oct 09, 2025</span>
                <span>Valid: Oct 09, 2027</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

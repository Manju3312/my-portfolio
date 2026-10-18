import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    number: '01',
    title: 'AI-Based Interview Preparation & Evaluation System',
    category: 'Generative AI & LLM Systems',
    description: 'An intelligent AI-powered evaluation engine that dynamically generates context-aware interview questions, parses candidate responses, and computes comprehensive automated scoring with tailored feedback to elevate interview readiness.',
    highlights: [
      'Engineered automated question generation pipelines with contextual difficulty scaling',
      'Designed response evaluation logic scoring tone, clarity, confidence, and relevance',
      'Delivered actionable feedback loops with recommendations based on the STAR method',
    ],
    tech: ['Python', 'LLM APIs', 'Prompt Engineering', 'Generative AI', 'React.js'],
    image: '/projects/interview_ai.jpg',
    link: 'https://github.com/Manju3312/AI-Based-Interview-Preparation-Evaluation-System',
    reverse: false,
  },
  {
    number: '02',
    title: 'MediaManager4U — AI Agent Automation Platform',
    category: 'Agent Orchestration & Workflow Automation',
    description: 'Autonomous multi-agent automation platform designed for media management and client operations. Integrates intelligent AI agents, n8n orchestration, and Notion CRM to automate complex business workflows end-to-end.',
    highlights: [
      'Multi-agent task distribution with error recovery and webhook synchronization',
      'Unified Notion database pipelines streamlining business operational efficiency',
      'Client-facing responsive web portals crafted for high performance',
    ],
    tech: ['AI Agents', 'n8n', 'Notion Workflows', 'Python', 'JavaScript', 'HTML5/CSS3'],
    image: '/projects/mediamanager_mockup.jpg',
    link: 'https://www.mediamanager4u.com/#/',
    reverse: true,
  },
  {
    number: '03',
    title: 'Unisys InfoTech — Corporate Website Frontend',
    category: 'Corporate Web Engineering',
    description: 'A responsive, high-performance multi-page corporate website frontend built for an IT consulting and staffing company, featuring seamless navigation, service portfolios, and talent acquisition showcases.',
    highlights: [
      'Multi-page architecture with smooth client routing and rapid load speeds',
      'Dedicated sections covering enterprise solutions, cloud advisory, and staffing metrics',
      'Strict adherence to accessibility, clean typography, and modern responsive layouts',
    ],
    tech: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive Design'],
    image: '/projects/unisys_mockup.jpg',
    link: 'https://www.unisysinfotech.com/',
    reverse: false,
  },
]

export default function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    section.querySelectorAll('.project-item').forEach((item) => {
      gsap.fromTo(
        item,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          },
        }
      )
    })
  }, [])

  return (
    <section ref={sectionRef} id="work" className="section-padding" style={{ background: '#0D0D0D' }}>
      <div className="container">
        <div className="section-label">03 — Featured Projects</div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '2rem',
          marginBottom: '4.5rem',
        }}>
          <div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
              fontWeight: 500,
              color: '#F5F0E8',
              lineHeight: 1.15,
            }}>
              Production systems built<br />
              <em style={{ color: '#C9A96E', fontStyle: 'italic' }}>for real-world impact.</em>
            </h2>
          </div>
          <p style={{
            fontSize: '0.9rem',
            color: 'rgba(245,240,232,0.6)',
            maxWidth: '380px',
            lineHeight: 1.7,
          }}>
            From AI interview evaluation algorithms and autonomous n8n workflows to enterprise web frontends and digital products.
          </p>
        </div>

        <div>
          {projects.map((project) => {
            const isExternal = project.link.startsWith('http')
            const isGitHub = project.link.includes('github.com')

            return (
              <div
                key={project.number}
                className="project-item"
                data-cursor="project"
                data-cursor-label={isGitHub ? 'GITHUB' : isExternal ? 'VISIT' : 'VIEW'}
                style={{
                  flexDirection: project.reverse ? 'row-reverse' : 'row',
                  marginBottom: '5rem',
                  borderBottom: '1px solid rgba(245, 240, 232, 0.06)',
                  paddingBottom: '4rem',
                }}
              >
                {/* Visual */}
                {isExternal ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-visual"
                    data-cursor="project"
                    data-cursor-label={isGitHub ? 'GITHUB' : 'VISIT'}
                    style={{ display: 'block', textDecoration: 'none', position: 'relative' }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '8px',
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to bottom, transparent 60%, rgba(13,13,13,0.5))',
                      pointerEvents: 'none',
                      borderRadius: '8px',
                    }} />
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(13,13,13,0.85)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(201,169,110,0.4)',
                      borderRadius: '20px',
                      padding: '0.35rem 0.8rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontSize: '0.7rem',
                      color: '#C9A96E',
                      fontFamily: 'JetBrains Mono, monospace',
                      letterSpacing: '0.05em',
                    }}>
                      {isGitHub ? (
                        <>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                          GitHub ↗
                        </>
                      ) : (
                        <>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                          Live Site ↗
                        </>
                      )}
                    </div>
                  </a>
                ) : (
                  <div className="project-visual" data-cursor="image">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '8px',
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to bottom, transparent 60%, rgba(13,13,13,0.4))',
                      pointerEvents: 'none',
                      borderRadius: '8px',
                    }} />
                  </div>
                )}

                {/* Info */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div className="project-number">{project.number}</div>
                  <h3 className="project-title" style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)' }}>
                    {isExternal ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A96E')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#F5F0E8')}
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <div className="project-category">{project.category}</div>
                  <p className="project-desc">{project.description}</p>
                  
                  {/* Key Points */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {project.highlights.map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8125rem', color: 'rgba(245,240,232,0.65)' }}>
                        <span style={{ color: '#C9A96E' }}>•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                    {isExternal ? (
                      <>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                          style={{
                            padding: '0.65rem 1.4rem',
                            fontSize: '0.75rem',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            fontWeight: 500,
                          }}
                        >
                          {isGitHub ? (
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                          ) : (
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10" />
                              <line x1="2" y1="12" x2="22" y2="12" />
                              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                          )}
                          <span>{isGitHub ? 'View GitHub Repo' : 'Visit Live Website'}</span>
                          <svg width="14" height="8" viewBox="0 0 16 8" fill="none">
                            <path d="M0 4H14M11 1L14 4L11 7" stroke="#0D0D0D" strokeWidth="1.2" />
                          </svg>
                        </a>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          style={{ fontSize: '0.75rem' }}
                        >
                          {isGitHub ? 'Source Code ↗' : 'Visit Website ↗'}
                        </a>
                      </>
                    ) : (
                      <span className="project-link" style={{ opacity: 0.5, cursor: 'default' }}>
                        Production / Confidential
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

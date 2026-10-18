import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    name: 'AI Agent & Workflow Automation',
    description: 'Autonomous multi-agent pipelines combining AI agents, n8n orchestration, and Notion CRM to automate complex client workflows end-to-end.',
    tech: 'AI Agents · n8n · Notion · Webhooks',
  },
  {
    name: 'Generative AI & LLM Applications',
    description: 'Production-ready LLM integrations, algorithmic evaluation engines, custom prompt architectures, and conversational AI features.',
    tech: 'Python · LLM APIs · Prompt Engineering · OCI',
  },
  {
    name: 'Modern Corporate Web Frontends',
    description: 'High-performance, multi-page corporate web applications with smooth client navigation, clean typography, and responsive component systems.',
    tech: 'React.js · JavaScript · HTML5 · CSS3',
  },
  {
    name: 'Business Digital Platforms',
    description: 'Tailored websites for businesses and catering ventures to showcase services, capture leads, and optimize customer digital journeys.',
    tech: 'Responsive Web Design · Modern UI · SEO',
  },
  {
    name: 'Database & Data Pipeline Design',
    description: 'Relational database schema modeling, optimized SQL queries, DBMS management, and clean data integrations for modern web systems.',
    tech: 'SQL · MySQL · DBMS · Schema Modeling',
  },
  {
    name: 'End-to-End Technical Delivery',
    description: 'Independent client scoping, iterative agile delivery, cross-browser debugging, and scalable architecture from whiteboard to production.',
    tech: 'Git · VS Code · Agile Sprints · Code Quality',
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo(
      section.querySelectorAll('.service-item'),
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 75%' },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} id="services" className="section-padding" style={{ background: '#111111' }}>
      <div className="container">
        <div className="section-label">06 — What I Build</div>

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
              Solutions engineered with<br />
              <em style={{ color: '#C9A96E', fontStyle: 'italic' }}>intelligence &amp; precision.</em>
            </h2>
          </div>
          <p style={{
            fontSize: '0.9rem',
            color: 'rgba(245,240,232,0.6)',
            maxWidth: '380px',
            lineHeight: 1.7,
          }}>
            Combining AI agent automation, Generative AI capabilities, and clean frontend engineering to deliver measurable impact.
          </p>
        </div>

        <div>
          {services.map((service, i) => (
            <div key={service.name} className="service-item">
              <div>
                <h3 className="service-name">{service.name}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.08em',
                color: 'rgba(245,240,232,0.45)',
                lineHeight: 1.8,
              }}>
                {service.tech.split(' · ').map((t) => (
                  <div key={t}>{t}</div>
                ))}
              </div>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                color: '#6B6B6B',
                textAlign: 'right',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

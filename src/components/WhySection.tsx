import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reasons = [
  {
    title: 'AI Native + Full-Stack Execution',
    desc: 'From fine-tuned LLM prompts and n8n autonomous agents to responsive React frontends, I build the complete system seamlessly.',
  },
  {
    title: 'Oracle Certified GenAI Standards',
    desc: 'Certified as an Oracle Cloud Infrastructure Generative AI Professional — bringing enterprise-grade principles, security, and precision.',
  },
  {
    title: 'Client-Facing Co-Founder Experience',
    desc: 'At MediaManager4U, I interact directly with clients, gather nuanced requirements, and deliver production automation that moves business metrics.',
  },
  {
    title: 'Rigorous Computer Science Core',
    desc: 'Grounded in Data Structures, Algorithms, DBMS, and OOP fundamentals from Parul University, writing scalable and maintainable code.',
  },
  {
    title: 'Automation First Mindset',
    desc: 'Whether building internal tools or client platforms, I look for leverage — using AI agents and webhooks to eliminate repetitive human friction.',
  },
  {
    title: 'Responsive & Pixel-Perfect Delivery',
    desc: 'Thoroughly tested across mobile, tablet, and desktop screens with disciplined debugging and component-based best practices.',
  },
]

export default function WhySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo(
      section.querySelectorAll('.why-item'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.07,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 75%' },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: '#0D0D0D' }}>
      <div className="container">
        <div className="section-label">07 — The Engineering Edge</div>

        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
          fontWeight: 500,
          color: '#F5F0E8',
          lineHeight: 1.15,
          marginBottom: '4rem',
        }}>
          Why work with<br />
          <em style={{ color: '#C9A96E', fontStyle: 'italic' }}>Mohan Manjunadha Reddy.</em>
        </h2>

        <div>
          {reasons.map((item, i) => (
            <div key={item.title} className="why-item">
              <div className="why-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="why-title">{item.title}</div>
              <div className="why-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

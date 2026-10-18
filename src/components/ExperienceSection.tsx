import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    role: 'AI Engineer Intern',
    company: 'Nulfinity Technologies',
    location: 'Hyderabad Office (Onsite)',
    period: 'July 2026 – Present',
    badge: 'Current Role',
    website: 'https://www.nulfinity.com',
    description: 'Working closely with engineering teams in an onsite capacity to design, develop, and integrate state-of-the-art AI-powered applications.',
    highlights: [
      'Build and integrate AI-powered solutions with the core engineering team in an onsite role.',
      'Apply Python, LLM APIs, and advanced prompt engineering techniques to develop AI features for real-world enterprise use cases.',
      'Architect robust data and prompt pipelines to ensure accurate, high-throughput model inference.',
    ],
    technologies: ['Python', 'LLM APIs', 'Prompt Engineering', 'Generative AI', 'Model Integration'],
  },
  {
    role: 'Automation Engineer & Co-Founder',
    company: 'MediaManager4U',
    location: 'Vadodara, India',
    period: 'Dec 2025 – Present',
    badge: 'Co-Founder',
    website: 'https://www.mediamanager4u.com/#/',
    description: 'Co-founded and engineered automated business solutions, creating intelligent autonomous workflows and digital client-facing products.',
    highlights: [
      'Designed and built end-to-end automation workflows combining autonomous AI agents, n8n, and Notion to streamline client operations and drive efficiency.',
      'Gathered business and client requirements, iterated on tailored solutions, and independently delivered mission-critical automation systems.',
      'Built responsive client-facing web pages using HTML5, CSS3, and JavaScript for a modern digital media platform.',
    ],
    technologies: ['AI Agents', 'n8n', 'Notion Workflows', 'JavaScript', 'HTML5', 'CSS3', 'Workflow Automation'],
  },
  {
    role: 'Web Development Intern',
    company: 'Elevate Labs',
    location: 'Remote',
    period: 'Sept 2025 – Nov 2025',
    badge: 'Completed',
    description: 'Contributed to front-end development, responsive web architectures, and UI/UX engineering according to industry-standard development cycles.',
    highlights: [
      'Developed modern, responsive web pages using HTML5, CSS3, and modern JavaScript following industry-standard code architectures.',
      'Enhanced cross-device mobile responsiveness and overall UI quality through structured debugging and component-based development methodologies.',
      'Collaborated within a distributed remote engineering team, adhering to version control and agile best practices.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Web Design', 'Git'],
  },
]

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo(
      section.querySelectorAll('.exp-card'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
        },
      }
    )
  }, [])


  return (
    <section ref={sectionRef} id="experience" className="section-padding" style={{ background: '#111111' }}>
      <div className="container">
        <div className="section-label">02 — Professional Experience</div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '2rem',
          marginBottom: '4rem',
        }}>
          <div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
              fontWeight: 500,
              color: '#F5F0E8',
              lineHeight: 1.15,
            }}>
              Engineering impact in<br />
              <em style={{ color: '#C9A96E', fontStyle: 'italic' }}>industry &amp; enterprise.</em>
            </h2>
          </div>
          <p style={{
            fontSize: '0.9rem',
            color: 'rgba(245,240,232,0.6)',
            maxWidth: '360px',
            lineHeight: 1.7,
          }}>
            From onsite AI integration at Nulfinity Technologies to co-founding MediaManager4U, delivering client automations and web platforms.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp, index) => (
            <div
              key={exp.company + exp.role}
              className="exp-card"
              style={{
                background: 'rgba(13, 13, 13, 0.6)',
                border: '1px solid rgba(245, 240, 232, 0.08)',
                borderRadius: '16px',
                padding: 'clamp(1.75rem, 3vw, 2.75rem)',
                transition: 'border-color 0.3s, transform 0.3s',
                position: 'relative',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201, 169, 110, 0.4)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(245, 240, 232, 0.08)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1.25rem',
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                    <span style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.7rem',
                      letterSpacing: '0.15em',
                      color: '#C9A96E',
                    }}>
                      0{index + 1}
                    </span>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                      color: '#F5F0E8',
                      fontWeight: 500,
                    }}>
                      {exp.role}
                    </h3>
                    <span style={{
                      fontSize: '0.65rem',
                      fontFamily: 'JetBrains Mono, monospace',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '100px',
                      background: exp.badge === 'Current Role' ? 'rgba(201, 169, 110, 0.15)' : 'rgba(245, 240, 232, 0.08)',
                      border: exp.badge === 'Current Role' ? '1px solid rgba(201, 169, 110, 0.3)' : '1px solid rgba(245, 240, 232, 0.1)',
                      color: exp.badge === 'Current Role' ? '#C9A96E' : 'rgba(245, 240, 232, 0.7)',
                    }}>
                      {exp.badge}
                    </span>
                  </div>

                  <div style={{
                    fontSize: '1rem',
                    color: '#C9A96E',
                    fontWeight: 400,
                  }}>
                    {exp.website ? (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#C9A96E', textDecoration: 'none' }}
                        onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                        onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                      >
                        {exp.company} ↗
                      </a>
                    ) : (
                      exp.company
                    )} <span style={{ color: 'rgba(245, 240, 232, 0.35)', margin: '0 0.5rem' }}>·</span> <span style={{ fontSize: '0.85rem', color: 'rgba(245, 240, 232, 0.6)' }}>{exp.location}</span>
                  </div>
                </div>

                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  color: 'rgba(245, 240, 232, 0.5)',
                  background: 'rgba(245, 240, 232, 0.04)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '6px',
                }}>
                  {exp.period}
                </div>
              </div>

              <p style={{
                fontSize: '0.9rem',
                lineHeight: 1.7,
                color: 'rgba(245, 240, 232, 0.65)',
                marginBottom: '1.25rem',
              }}>
                {exp.description}
              </p>

              {/* Highlights */}
              <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                marginBottom: '1.75rem',
              }}>
                {exp.highlights.map((point, pIdx) => (
                  <li key={pIdx} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    color: 'rgba(245, 240, 232, 0.75)',
                  }}>
                    <span style={{
                      color: '#C9A96E',
                      marginTop: '0.1rem',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.8rem',
                      flexShrink: 0,
                    }}>—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.7rem',
                      letterSpacing: '0.04em',
                      color: 'rgba(245, 240, 232, 0.7)',
                      background: 'rgba(245, 240, 232, 0.04)',
                      border: '1px solid rgba(245, 240, 232, 0.08)',
                      padding: '0.3rem 0.7rem',
                      borderRadius: '4px',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

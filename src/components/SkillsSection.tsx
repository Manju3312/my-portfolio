import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skillGroups = [
  {
    category: 'Specialized AI & Automation',
    featured: true,
    skills: [
      'Generative AI',
      'LLM APIs',
      'AI Agents',
      'Prompt Engineering',
      'Workflow Automation',
      'n8n Orchestration',
    ],
  },
  {
    category: 'Programming & Web Development',
    featured: false,
    skills: [
      'Python',
      'JavaScript (ES6+)',
      'React.js',
      'HTML5',
      'CSS3',
      'Responsive Web Design',
    ],
  },
  {
    category: 'Databases & Data Management',
    featured: false,
    skills: [
      'SQL',
      'MySQL',
      'Database Management Systems (DBMS)',
      'Relational Schema Design',
    ],
  },
  {
    category: 'Core Computer Science',
    featured: false,
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'Operating Systems',
      'Computer Networks',
    ],
  },
  {
    category: 'Cloud & Developer Tooling',
    featured: false,
    skills: [
      'Oracle Cloud Infrastructure (OCI)',
      'Git',
      'GitHub',
      'VS Code',
      'Notion Workflows',
    ],
  },
]

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo(
      section.querySelectorAll('.skill-group'),
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 75%' },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="section-padding" style={{ background: '#111111' }}>
      <div className="container">
        <div className="section-label">04 — Technical Skills</div>

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
              Core competencies &amp;<br />
              <em style={{ color: '#C9A96E', fontStyle: 'italic' }}>technical mastery.</em>
            </h2>
          </div>
          <p style={{
            fontSize: '0.9rem',
            color: 'rgba(245,240,232,0.6)',
            maxWidth: '380px',
            lineHeight: 1.7,
          }}>
            A solid computer science foundation paired with specialized capabilities in Generative AI, agentic workflows, and cloud engineering.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="skill-group"
              style={{
                background: group.featured ? 'rgba(201, 169, 110, 0.04)' : 'rgba(13, 13, 13, 0.5)',
                border: group.featured ? '1px solid rgba(201, 169, 110, 0.25)' : '1px solid rgba(245, 240, 232, 0.06)',
                borderRadius: '12px',
                padding: '1.75rem 2rem',
                transition: 'border-color 0.3s',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.25rem',
              }}>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.675rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: group.featured ? '#C9A96E' : 'rgba(245,240,232,0.6)',
                  fontWeight: 500,
                }}>
                  {group.category}
                </div>
                {group.featured && (
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#C9A96E',
                    background: 'rgba(201,169,110,0.15)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                  }}>
                    Primary Focus
                  </span>
                )}
              </div>

              <div className="skills-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="skill-item"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      color: group.featured ? '#F5F0E8' : 'rgba(245,240,232,0.85)',
                      background: group.featured ? 'rgba(201, 169, 110, 0.08)' : 'rgba(245,240,232,0.04)',
                      border: group.featured ? '1px solid rgba(201, 169, 110, 0.3)' : '1px solid rgba(245,240,232,0.08)',
                      padding: '0.6rem 1.25rem',
                      borderRadius: '8px',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#C9A96E'
                      e.currentTarget.style.color = '#C9A96E'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = group.featured ? 'rgba(201, 169, 110, 0.3)' : 'rgba(245,240,232,0.08)'
                      e.currentTarget.style.color = group.featured ? '#F5F0E8' : 'rgba(245,240,232,0.85)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo(
      section.querySelectorAll('.contact-anim'),
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated form submission with mailto fallback
    setSubmitted(true)
  }

  return (
    <section ref={sectionRef} id="contact" className="section-padding" style={{ background: '#111111' }}>
      <div className="container">
        <div className="section-label contact-anim">08 — Contact</div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '5rem',
          alignItems: 'start',
        }}>
          {/* Left: Contact Info */}
          <div>
            <h2 className="contact-anim" style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
              fontWeight: 500,
              color: '#F5F0E8',
              lineHeight: 1.15,
              marginBottom: '1.5rem',
            }}>
              Let's engineer<br />
              <em style={{ color: '#C9A96E', fontStyle: 'italic' }}>something exceptional.</em>
            </h2>

            <p className="contact-anim" style={{
              fontSize: '0.95rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.65)',
              marginBottom: '3rem',
              maxWidth: '420px',
            }}>
              Available for AI engineering internships, full-time engineering roles, client automation workflows, and collaborative technical projects.
            </p>

            {/* Direct Details */}
            <div className="contact-anim" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                {
                  label: 'Email',
                  value: 'manjugopireddy78@gmail.com',
                  href: 'mailto:manjugopireddy78@gmail.com',
                  note: 'Primary correspondence',
                },
                {
                  label: 'Phone / WhatsApp',
                  value: '+91-8555981298',
                  href: 'tel:+918555981298',
                  note: 'Direct line',
                },
                {
                  label: 'Location',
                  value: 'Vadodara, Gujarat, India',
                  href: '#',
                  note: 'Open to onsite & remote',
                },
                {
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/mohan-manjunadha-reddy',
                  href: 'https://linkedin.com',
                  note: 'Professional network',
                },
                {
                  label: 'GitHub',
                  value: 'github.com/Manju3312',
                  href: 'https://github.com/Manju3312',
                  note: 'Open source & code repositories',
                },
              ].map((link) => (
                <div key={link.label} style={{ borderBottom: '1px solid rgba(245,240,232,0.06)', paddingBottom: '1.25rem' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.35rem',
                  }}>
                    <span style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.65rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#C9A96E',
                    }}>
                      {link.label}
                    </span>
                    <span style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.65rem',
                      color: '#6B6B6B',
                    }}>
                      {link.note}
                    </span>
                  </div>

                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{
                      fontSize: '1rem',
                      color: '#F5F0E8',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A96E')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#F5F0E8')}
                  >
                    {link.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interactive Form */}
          <div className="contact-anim">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'rgba(13, 13, 13, 0.7)',
                  border: '1px solid rgba(245, 240, 232, 0.08)',
                  borderRadius: '16px',
                  padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.75rem',
                }}
              >
                <div style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.35rem',
                  color: '#F5F0E8',
                  marginBottom: '0.25rem',
                }}>
                  Send a Direct Message
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Satya Nadella"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      className="form-input"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="projectType">Inquiry Type</label>
                  <select
                    id="projectType"
                    className="form-select"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    required
                  >
                    <option value="" disabled>Select an inquiry</option>
                    <option value="ai-role">AI Engineer / Software Engineering Opportunity</option>
                    <option value="automation">AI Agent &amp; n8n Workflow Automation Project</option>
                    <option value="web">Full-Stack / Corporate Web Development</option>
                    <option value="llm">Generative AI &amp; LLM Consultation</option>
                    <option value="other">General Inquiries &amp; Collaboration</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="form-input"
                    placeholder="Tell Mohan about your requirements, project, or role..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <button type="submit" className="btn-primary" style={{ padding: '0.875rem 2rem', fontSize: '0.8125rem' }}>
                    Send Message
                    <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                      <path d="M0 4H14M11 1L14 4L11 7" stroke="#0D0D0D" strokeWidth="1" />
                    </svg>
                  </button>
                  <a
                    href="mailto:manjugopireddy78@gmail.com"
                    className="btn-ghost"
                    style={{ padding: '0.875rem 1.75rem', fontSize: '0.8125rem' }}
                  >
                    Direct Email
                  </a>
                </div>
              </form>
            ) : (
              <div style={{
                background: 'rgba(201, 169, 110, 0.05)',
                border: '1px solid rgba(201, 169, 110, 0.3)',
                borderRadius: '16px',
                padding: '3rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '1rem',
              }}>
                <div style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '2rem',
                  color: '#C9A96E',
                }}>
                  Message Received.
                </div>
                <p style={{ color: 'rgba(245,240,232,0.7)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Thank you for reaching out, {formData.name || 'friend'}. Mohan will review your message and reply to <strong style={{ color: '#F5F0E8' }}>{formData.email}</strong> promptly.
                </p>
                <a
                  href={`mailto:manjugopireddy78@gmail.com?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`}
                  className="btn-primary"
                  style={{ marginTop: '1rem' }}
                >
                  Also Send via Email Client
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

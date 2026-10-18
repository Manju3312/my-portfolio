import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Certificate {
  id: 'oracle' | 'cognizant'
  badge: string
  title: string
  subtitle?: string
  issuer: string
  credentialId: string
  issuedDate: string
  validity?: string
  status: string
  statusColor: string
  accentColor: string
  accentBg: string
  accentBorder: string
  cardGradient: string
  description: string
  image: string
  downloadPrimary: {
    url: string
    filename: string
    label: string
  }
  downloadSecondary?: {
    url: string
    filename: string
    label: string
  }
  signatories: string
}

const certificates: Certificate[] = [
  {
    id: 'oracle',
    badge: '★ Global Professional Certification',
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle University',
    credentialId: '102864448OCI25GAIOCP',
    issuedDate: 'October 09, 2025',
    validity: 'October 09, 2027',
    status: 'Active & Verified',
    statusColor: '#4ADE80',
    accentColor: '#C9A96E',
    accentBg: 'rgba(201, 169, 110, 0.12)',
    accentBorder: 'rgba(201, 169, 110, 0.35)',
    cardGradient: 'radial-gradient(ellipse at 15% 20%, rgba(201, 169, 110, 0.15) 0%, rgba(20, 20, 20, 0.95) 100%)',
    description: 'Certified in designing, developing, and deploying enterprise-grade Generative AI solutions on Oracle Cloud Infrastructure. Deep specialization in LLMs, foundation models, prompt engineering, Retrieval-Augmented Generation (RAG), and fine-tuning.',
    image: '/oracle-genai-certificate.jpg',
    downloadPrimary: {
      url: '/oracle-genai-certificate.jpg',
      filename: 'Mohan_Manjunadha_Reddy_Oracle_GenAI_Certificate.jpg',
      label: 'Download Certificate',
    },
    signatories: 'Damian Carey (Senior Vice President, Oracle University)',
  },
  {
    id: 'cognizant',
    badge: '★ Official Hackathon Honor',
    title: 'Cognizant ® Technoverse Hackathon 2026',
    subtitle: 'Certificate of Appreciation',
    issuer: 'Cognizant Technology Solutions',
    credentialId: 'SUPERSET-1E811-7A010',
    issuedDate: 'Technoverse 2026',
    status: 'Verified Participant',
    statusColor: '#38BDF8',
    accentColor: '#38BDF8',
    accentBg: 'rgba(56, 189, 248, 0.12)',
    accentBorder: 'rgba(56, 189, 248, 0.35)',
    cardGradient: 'radial-gradient(ellipse at 15% 20%, rgba(56, 189, 248, 0.13) 0%, rgba(20, 20, 20, 0.95) 100%)',
    description: 'Awarded in recognition of distinguished participation and technical problem-solving in the nationwide Cognizant ® Technoverse Hackathon 2026. Commended by Cognizant India leadership for innovative engineering approach and collaborative execution.',
    image: '/cognizant-technoverse-certificate.jpg',
    downloadPrimary: {
      url: '/cognizant-technoverse-certificate.pdf',
      filename: 'Mohan_Manjunadha_Reddy_Cognizant_Technoverse_Certificate.pdf',
      label: 'Download PDF',
    },
    signatories: 'Rajesh Varrier (President & MD, Cognizant India) · Atul Sahgal (SVP, Talent Acquisition)',
  },
]

const education = [
  {
    institution: 'Parul University',
    degree: 'Bachelor of Technology — Computer Science & Engineering',
    period: '2023 – 2027',
    location: 'Vadodara, Gujarat',
    metric: 'CGPA: 7.19',
    details: 'Focus on Artificial Intelligence, Database Management Systems, Data Structures & Algorithms, and Distributed Computing.',
  },
  {
    institution: 'Sri Pratibha Junior College',
    degree: 'Intermediate — MPC (Maths, Physics, Chemistry)',
    period: '2021 – 2023',
    location: 'Ongole, Andhra Pradesh',
    metric: 'CGPA: 9.05',
    details: 'Rigorous foundation in advanced analytical mathematics, calculus, physics, and scientific problem-solving.',
  },
  {
    institution: 'Q I S Public School',
    degree: 'Class X (CBSE)',
    period: '2021',
    location: 'Ongole, Andhra Pradesh',
    metric: 'Percentage: 71%',
    details: 'Foundational secondary school education under Central Board of Secondary Education with distinction in science and mathematics.',
  },
]

export default function CredentialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeCertId, setActiveCertId] = useState<'oracle' | 'cognizant' | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo(
      section.querySelectorAll('.cred-anim'),
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

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveCertId(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const selectedCert = certificates.find((c) => c.id === activeCertId) || certificates[0]

  return (
    <section ref={sectionRef} id="credentials" className="section-padding" style={{ background: '#0D0D0D' }}>
      <div className="container">
        <div className="section-label cred-anim">05 — Certifications &amp; Education</div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '2rem',
          marginBottom: '4rem',
        }}>
          <div>
            <h2 className="cred-anim" style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
              fontWeight: 500,
              color: '#F5F0E8',
              lineHeight: 1.15,
            }}>
              Credentials &amp;<br />
              <em style={{ color: '#C9A96E', fontStyle: 'italic' }}>industry accreditation.</em>
            </h2>
          </div>
          <p className="cred-anim" style={{
            fontSize: '0.9rem',
            color: 'rgba(245,240,232,0.6)',
            maxWidth: '420px',
            lineHeight: 1.7,
          }}>
            Internationally verified Oracle Cloud Infrastructure accreditation and premier industry hackathon recognition from Cognizant coupled with consistent academic discipline.
          </p>
        </div>

        {/* Featured Certifications Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))',
          gap: '2.5rem',
          marginBottom: '4.5rem',
        }}>
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="cred-anim"
              style={{
                background: cert.cardGradient,
                border: `1px solid ${cert.accentBorder}`,
                borderRadius: '16px',
                padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
            >
              <div>
                {/* Header Badge */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: cert.accentColor,
                    background: cert.accentBg,
                    border: `1px solid ${cert.accentBorder}`,
                    padding: '0.35rem 0.85rem',
                    borderRadius: '100px',
                  }}>
                    <span>{cert.badge}</span>
                  </div>

                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.7rem',
                    color: cert.statusColor,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}>
                    <span>●</span>
                    <span>{cert.status}</span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(1.35rem, 2.2vw, 1.85rem)',
                  color: '#F5F0E8',
                  lineHeight: 1.25,
                  marginBottom: '0.5rem',
                }}>
                  {cert.title}
                </h3>

                {cert.subtitle && (
                  <div style={{
                    fontFamily: 'Playfair Display, serif',
                    fontStyle: 'italic',
                    fontSize: '1rem',
                    color: cert.accentColor,
                    marginBottom: '0.75rem',
                  }}>
                    {cert.subtitle}
                  </div>
                )}

                {/* Issuer & ID */}
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.775rem',
                  color: cert.accentColor,
                  marginBottom: '1.25rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  alignItems: 'center',
                }}>
                  <span>Issuer: {cert.issuer}</span>
                  <span style={{ color: 'rgba(245,240,232,0.3)' }}>·</span>
                  <span style={{ color: 'rgba(245,240,232,0.7)' }}>ID: {cert.credentialId}</span>
                </div>

                {/* Visual Preview Card */}
                <div
                  onClick={() => setActiveCertId(cert.id)}
                  data-cursor="project"
                  data-cursor-label="PROOF"
                  style={{
                    position: 'relative',
                    width: '100%',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: `1px solid ${cert.accentBorder}`,
                    boxShadow: '0 12px 30px rgba(0,0,0,0.6)',
                    cursor: 'pointer',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s, box-shadow 0.4s',
                    background: '#141414',
                    marginBottom: '1.5rem',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.015)'
                    e.currentTarget.style.borderColor = cert.accentColor
                    e.currentTarget.style.boxShadow = `0 18px 40px rgba(0,0,0,0.8), 0 0 35px ${cert.accentBg}`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.borderColor = cert.accentBorder
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.6)'
                  }}
                >
                  <img
                    src={cert.image}
                    alt={`${cert.title} Proof`}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      aspectRatio: '16 / 10',
                      objectFit: 'cover',
                    }}
                  />

                  {/* Overlay prompt */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.15) 55%, transparent 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    padding: '1rem 1.25rem',
                  }}>
                    <div>
                      <div style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.625rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: cert.accentColor,
                      }}>
                        Official Credential
                      </div>
                      <div style={{
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        color: '#F5F0E8',
                      }}>
                        Click to Expand &amp; Verify
                      </div>
                    </div>

                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: cert.accentBg,
                      border: `1px solid ${cert.accentBorder}`,
                      color: cert.accentColor,
                      fontSize: '0.85rem',
                    }}>
                      ↗
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.65,
                  color: 'rgba(245, 240, 232, 0.72)',
                  marginBottom: '1.25rem',
                }}>
                  {cert.description}
                </p>

                {/* Metadata details row */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.25rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.725rem',
                  color: 'rgba(245, 240, 232, 0.55)',
                  marginBottom: '1.75rem',
                }}>
                  <div>
                    <span style={{ color: '#8A8A8A' }}>Issued: </span>
                    <span style={{ color: '#F5F0E8' }}>{cert.issuedDate}</span>
                  </div>
                  {cert.validity && (
                    <div>
                      <span style={{ color: '#8A8A8A' }}>Valid Until: </span>
                      <span style={{ color: '#F5F0E8' }}>{cert.validity}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '0.85rem',
                flexWrap: 'wrap',
                alignItems: 'center',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(245, 240, 232, 0.08)',
              }}>
                <a
                  href={cert.downloadPrimary.url}
                  download={cert.downloadPrimary.filename}
                  className="btn-primary"
                  style={{
                    padding: '0.65rem 1.35rem',
                    fontSize: '0.75rem',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontWeight: 500,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>{cert.downloadPrimary.label}</span>
                </a>

                {cert.downloadSecondary && (
                  <a
                    href={cert.downloadSecondary.url}
                    download={cert.downloadSecondary.filename}
                    className="btn-ghost"
                    style={{
                      padding: '0.65rem 1.15rem',
                      fontSize: '0.75rem',
                      textDecoration: 'none',
                      borderRadius: '4px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>{cert.downloadSecondary.label}</span>
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => setActiveCertId(cert.id)}
                  className="btn-ghost"
                  style={{
                    padding: '0.65rem 1.15rem',
                    fontSize: '0.75rem',
                    borderRadius: '4px',
                    background: 'transparent',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  <span>View Fullscreen</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {activeCertId !== null && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              background: 'rgba(10, 10, 10, 0.94)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
            onClick={() => setActiveCertId(null)}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '960px',
                width: '100%',
                background: '#141414',
                border: `1px solid ${selectedCert.accentBorder}`,
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: `0 25px 60px rgba(0,0,0,0.85), 0 0 60px ${selectedCert.accentBg}`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header bar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 1.75rem',
                borderBottom: '1px solid rgba(245, 240, 232, 0.08)',
                background: 'rgba(20, 20, 20, 0.95)',
                flexWrap: 'wrap',
                gap: '1rem',
              }}>
                <div>
                  <div style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.2rem',
                    color: '#F5F0E8',
                  }}>
                    {selectedCert.title}
                  </div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.6875rem',
                    color: selectedCert.accentColor,
                    letterSpacing: '0.08em',
                    marginTop: '0.2rem',
                  }}>
                    Credential ID: {selectedCert.credentialId} · {selectedCert.issuer}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <a
                    href={selectedCert.downloadPrimary.url}
                    download={selectedCert.downloadPrimary.filename}
                    className="btn-primary"
                    style={{
                      padding: '0.55rem 1.25rem',
                      fontSize: '0.75rem',
                      textDecoration: 'none',
                      borderRadius: '4px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    {selectedCert.downloadPrimary.label}
                  </a>

                  {selectedCert.downloadSecondary && (
                    <a
                      href={selectedCert.downloadSecondary.url}
                      download={selectedCert.downloadSecondary.filename}
                      className="btn-ghost"
                      style={{
                        padding: '0.55rem 1rem',
                        fontSize: '0.75rem',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      {selectedCert.downloadSecondary.label}
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveCertId(null)}
                    style={{
                      background: 'rgba(245, 240, 232, 0.06)',
                      border: '1px solid rgba(245, 240, 232, 0.15)',
                      borderRadius: '50%',
                      width: '36px',
                      height: '36px',
                      color: '#F5F0E8',
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = selectedCert.accentBg)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(245, 240, 232, 0.06)')}
                    aria-label="Close modal"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Certificate Tabs in Modal */}
              <div style={{
                display: 'flex',
                gap: '0.75rem',
                padding: '0.75rem 1.75rem',
                background: '#0D0D0D',
                borderBottom: '1px solid rgba(245, 240, 232, 0.06)',
                flexWrap: 'wrap',
              }}>
                {certificates.map((cert) => {
                  const isSelected = activeCertId === cert.id
                  return (
                    <button
                      key={cert.id}
                      type="button"
                      onClick={() => setActiveCertId(cert.id)}
                      style={{
                        background: isSelected ? cert.accentBg : 'transparent',
                        border: isSelected ? `1px solid ${cert.accentColor}` : '1px solid rgba(245, 240, 232, 0.15)',
                        color: isSelected ? cert.accentColor : 'rgba(245, 240, 232, 0.6)',
                        padding: '0.4rem 1rem',
                        borderRadius: '6px',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.725rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                      }}
                    >
                      <span>{cert.id === 'oracle' ? 'Oracle OCI GenAI' : 'Cognizant Technoverse'}</span>
                    </button>
                  )
                })}
              </div>

              {/* Certificate Image Viewport */}
              <div style={{
                padding: '1.5rem',
                background: '#0A0A0A',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                maxHeight: '66vh',
                overflow: 'auto',
              }}>
                <img
                  src={selectedCert.image}
                  alt={`${selectedCert.title} - Mohan Manjunadha Reddy Gopireddy`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '62vh',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 12px 35px rgba(0,0,0,0.7)',
                    background: selectedCert.id === 'cognizant' ? '#FFFFFF' : 'transparent',
                  }}
                />
              </div>

              {/* Footer details */}
              <div style={{
                padding: '0.875rem 1.75rem',
                borderTop: '1px solid rgba(245, 240, 232, 0.08)',
                background: 'rgba(20, 20, 20, 0.95)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.7rem',
                color: 'rgba(245, 240, 232, 0.65)',
              }}>
                <div>Candidate: <strong style={{ color: '#F5F0E8' }}>Mohan Manjunadha Reddy Gopireddy</strong></div>
                <div>Authority: <span style={{ color: selectedCert.accentColor }}>{selectedCert.signatories}</span></div>
              </div>
            </div>
          </div>
        )}

        {/* Education Timeline Cards */}
        <div>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.7rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#C9A96E',
            marginBottom: '2rem',
          }}>
            Academic Path
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {education.map((item, idx) => (
              <div
                key={item.institution}
                className="cred-anim"
                style={{
                  background: 'rgba(17, 17, 17, 0.7)',
                  border: '1px solid rgba(245, 240, 232, 0.08)',
                  borderRadius: '12px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color 0.3s, transform 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201, 169, 110, 0.3)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(245, 240, 232, 0.08)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                  }}>
                    <span style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.65rem',
                      color: '#C9A96E',
                      letterSpacing: '0.15em',
                    }}>
                      0{idx + 1}
                    </span>
                    <span style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.7rem',
                      color: 'rgba(245, 240, 232, 0.45)',
                    }}>
                      {item.period}
                    </span>
                  </div>

                  <h4 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.25rem',
                    color: '#F5F0E8',
                    marginBottom: '0.35rem',
                  }}>
                    {item.institution}
                  </h4>

                  <div style={{
                    fontSize: '0.85rem',
                    color: 'rgba(245, 240, 232, 0.65)',
                    lineHeight: 1.5,
                    marginBottom: '1rem',
                  }}>
                    {item.degree}
                  </div>

                  <p style={{
                    fontSize: '0.8rem',
                    lineHeight: 1.6,
                    color: 'rgba(245, 240, 232, 0.45)',
                    marginBottom: '1.5rem',
                  }}>
                    {item.details}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid rgba(245, 240, 232, 0.06)',
                  paddingTop: '1rem',
                }}>
                  <span style={{
                    fontSize: '0.75rem',
                    color: 'rgba(245, 240, 232, 0.4)',
                  }}>
                    {item.location}
                  </span>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: '#C9A96E',
                  }}>
                    {item.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

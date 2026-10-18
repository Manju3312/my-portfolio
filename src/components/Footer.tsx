export default function Footer() {
  const socials = [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'GitHub', href: 'https://github.com/Manju3312' },
    { label: 'Email', href: 'mailto:manjugopireddy78@gmail.com' },
    { label: 'Call', href: 'tel:+918555981298' },
  ]

  return (
    <footer className="footer" style={{ borderTop: '1px solid rgba(245, 240, 232, 0.08)', padding: '3.5rem 2rem 2.5rem' }}>
      {/* Left */}
      <div>
        <div style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.25rem',
          color: '#F5F0E8',
          letterSpacing: '0.02em',
          marginBottom: '0.35rem',
        }}>
          Mohan Manjunadha Reddy Gopireddy
        </div>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.675rem',
          letterSpacing: '0.1em',
          color: '#8A8A8A',
        }}>
          AI Engineer Intern · OCI GenAI Certified · Vadodara, India
        </div>
      </div>

      {/* Center */}
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.625rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#6B6B6B',
          marginBottom: '0.25rem',
        }}>
          Architecting Autonomous AI &amp; Web Systems
        </div>
        <div style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.75rem',
          color: 'rgba(245, 240, 232, 0.4)',
        }}>
          B.Tech CSE @ Parul University
        </div>
      </div>

      {/* Right */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#8A8A8A',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A96E')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8A8A')}
            >
              {s.label}
            </a>
          ))}
        </div>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.65rem',
          letterSpacing: '0.1em',
          color: 'rgba(107,107,107,0.7)',
        }}>
          © 2026 Mohan Manjunadha Reddy
        </div>
      </div>
    </footer>
  )
}

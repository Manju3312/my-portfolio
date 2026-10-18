import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = (href: string) => {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px',
            borderRadius: '6px',
            border: '1px solid rgba(201, 169, 110, 0.4)',
            color: '#C9A96E',
            fontSize: '0.75rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 500,
          }}>M</span>
          <span style={{ letterSpacing: '0.04em' }}>Mohan</span>
        </a>
        
        <ul className="navbar-links">
          {links.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className="navbar-link"
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href) }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="mailto:manjugopireddy78@gmail.com"
            className="btn-ghost navbar-cta"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.75rem', display: 'none', mdDisplay: 'inline-flex' } as any}
          >
            Email
          </a>
          <a
            href="#contact"
            className="btn-primary navbar-cta"
            onClick={(e) => { e.preventDefault(); handleLinkClick('#contact') }}
          >
            Get In Touch
          </a>
        </div>

        <button
          className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Full-screen Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="mobile-nav-link"
              onClick={(e) => { e.preventDefault(); handleLinkClick(link.href) }}
              style={{ transitionDelay: menuOpen ? `${i * 0.05}s` : '0s' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary"
            style={{ marginTop: '1rem', fontSize: '0.875rem', padding: '0.875rem 2rem' }}
            onClick={(e) => { e.preventDefault(); handleLinkClick('#contact') }}
          >
            Get In Touch
          </a>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.65rem',
          letterSpacing: '0.15em',
          color: '#6B6B6B',
          textAlign: 'center',
          width: '90%',
        }}>
          Mohan Manjunadha Reddy Gopireddy · Vadodara
        </div>
      </div>
    </>
  )
}

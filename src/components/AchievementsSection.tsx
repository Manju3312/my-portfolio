import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const achievements = [
  { icon: '💡', title: 'Cognizant Technoverse 2026', desc: 'Certificate of Appreciation for nationwide technical hackathon problem-solving.' },
  { icon: '🏆', title: 'Myntra WeForShe HackerRamp 2026', desc: 'Top 100 Team — National AI fashion hackathon by Myntra.' },
  { icon: '⚡', title: '400+ LeetCode Problems', desc: 'Consistent algorithmic problem-solving across all difficulty levels.' },
  { icon: '🎓', title: 'Algo University Fellowship', desc: 'Selected fellowship for exceptional algorithmic thinking and performance.' },
  { icon: '🌟', title: 'Internshala Student Partner', desc: 'Campus representative driving student-industry engagement.' },
  { icon: '🔥', title: 'GFG GeekStreak', desc: 'Sustained streak on GeeksForGeeks demonstrating consistency.' },
  { icon: '🥈', title: 'CodeChef Silver Badge', desc: 'Competitive programming recognition on CodeChef platform.' },
  { icon: '📜', title: 'NxtWave Leadership Certificate', desc: 'Recognition for leadership and community contributions.' },
  { icon: '🤖', title: 'Mega GEN AI Workshop', desc: 'Advanced generative AI workshop completion and certification.' },
]

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo(
      section.querySelectorAll('.achievement-item'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.06,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 75%' },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: '#0D0D0D' }}>
      <div className="container">
        <div className="section-label">06 — Achievements</div>

        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
          fontWeight: 500,
          color: '#F5F0E8',
          lineHeight: 1.1,
          marginBottom: '4rem',
        }}>
          Milestones that<br />
          <em style={{ color: 'rgba(245,240,232,0.6)', fontStyle: 'italic' }}>define the journey.</em>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0' }}>
          {achievements.map((item) => (
            <div key={item.title} className="achievement-item">
              <div className="achievement-icon">{item.icon}</div>
              <div>
                <div style={{
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  color: '#F5F0E8',
                  marginBottom: '0.35rem',
                  letterSpacing: '0.01em',
                }}>
                  {item.title}
                </div>
                <div style={{
                  fontSize: '0.8125rem',
                  color: 'rgba(245,240,232,0.45)',
                  lineHeight: 1.6,
                }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

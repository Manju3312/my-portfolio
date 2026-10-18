const items = [
  'Generative AI',
  'AI Agents & n8n Workflows',
  'Python & LLM APIs',
  'Prompt Engineering',
  'React.js & JavaScript',
  'Oracle Cloud Infrastructure (OCI)',
  'Autonomous Workflow Automation',
  'Data Structures & Algorithms',
  'Database Management & SQL',
]

export default function MarqueeSection() {
  const doubled = [...items, ...items]

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  )
}

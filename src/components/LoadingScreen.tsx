import { useState, useEffect } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Preload all hero frames
    const frames = Array.from({ length: 8 }, (_, i) => `/hero/frame-${i}.jpg?v=exec`)
    let loaded = 0

    const preload = (src: string) =>
      new Promise<void>((resolve) => {
        const img = new Image()
        img.onload = () => { loaded++; setProgress(Math.round((loaded / frames.length) * 100)); resolve() }
        img.onerror = () => { loaded++; setProgress(Math.round((loaded / frames.length) * 100)); resolve() }
        img.src = src
      })

    Promise.all(frames.map(preload)).then(() => {
      setTimeout(() => {
        setFadeOut(true)
        setTimeout(onComplete, 700)
      }, 400)
    })
  }, [onComplete])

  return (
    <div
      className="loading-screen"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.7s ease',
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      <div className="loading-logo">MMR</div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
        <div className="loading-bar-track">
          <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="loading-text">Loading experience...</div>
      </div>
    </div>
  )
}

import { Link } from 'react-router'
import { IconHandshake, IconFlask } from '../app/Icons'

// One entry per thing we are actually running. Add to this array as programs start.
const programs = [
  {
    num: '01',
    name: 'Industry Partnerships',
    tag: 'Active',
    Icon: IconHandshake,
    iconColor: '#5E8A8C',
    tagBg: '#5E8A8C',
    bg: 'linear-gradient(135deg, #F4F1E9, #E1E9E7)',
    border: 'rgba(94,138,140,0.2)',
    description: 'We work with neurotechnology companies in the Research Triangle and put students and partner organizations in front of them. Our first partnership is with Synaptive, built around expanding access to neuroscience across the RTP. In practice that runs both directions. Students and partner organizations get real exposure to companies building this technology, and those companies get student partners who can run testing for them.',
  },
]

export default function Programs() {
  return (
    <div style={{ background: '#fff' }}>
      <section style={{ padding: '5rem 2rem 7rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(94,138,140,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F4F1E9', border: '1px solid rgba(94,138,140,0.25)', borderRadius: 50, padding: '0.35rem 1rem 0.35rem 0.6rem', marginBottom: '2rem' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#5E8A8C' }} />
            <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', fontWeight: 700, color: '#48696C' }}>05 — Programs</span>
          </div>

          <h2 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 400, color: '#2C3A47', lineHeight: 1.15, margin: '0 0 1rem' }}>
            What We Are{' '}
            <span style={{ color: '#5E8A8C', fontStyle: 'italic' }}>Actually Doing</span>
          </h2>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1rem', fontWeight: 400, color: '#55656F', lineHeight: 1.85, margin: '0 0 1.25rem', maxWidth: 620 }}>
            The Research Triangle is full of companies building neurotechnology, and most students studying neuroscience here will never set foot in one of them. So that is the gap we started with, because it is the one we can close right now.
          </p>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1rem', fontWeight: 400, color: '#55656F', lineHeight: 1.85, margin: '0 0 4rem', maxWidth: 620 }}>
            We would rather show you one partnership we are running than a catalog of programs we have not started. This page will grow.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }} className="programs-grid">
            {programs.map((p, i) => (
              <div key={i} style={{ background: p.bg, border: `1.5px solid ${p.border}`, borderRadius: 24, padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', transition: 'transform 0.25s, box-shadow 0.25s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 30px rgba(94,138,140,0.12)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 16, background: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p.Icon size={22} color={p.iconColor} />
                  </div>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.7rem', fontWeight: 700, color: '#fff', background: p.tagBg, padding: '0.25rem 0.8rem', borderRadius: 50 }}>{p.tag}</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.65rem', fontWeight: 800, color: '#8B9A9C', letterSpacing: '0.15em', marginBottom: '0.3rem' }}>{p.num}</div>
                  <h3 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '1.4rem', fontWeight: 400, color: '#2C3A47', margin: '0 0 0.75rem' }}>{p.name}</h3>
                  <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.95rem', fontWeight: 400, color: '#55656F', lineHeight: 1.85, margin: 0 }}>{p.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.75rem 2rem', background: '#FAF8F3', border: '1.5px dashed rgba(94,138,140,0.3)', borderRadius: 20, marginBottom: '4rem', maxWidth: 780 }}>
            <div style={{ width: 38, height: 38, borderRadius: 12, background: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <IconFlask size={18} color="#5E8A8C" />
            </div>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.92rem', color: '#55656F', lineHeight: 1.8, margin: 0 }}>
              More is coming as we grow. If your organization wants a say in what we take on next, now is the useful time to talk to us.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/contact"
              style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg, #5E8A8C, #4A6B7C)', padding: '1rem 2.5rem', borderRadius: 50, textDecoration: 'none', display: 'inline-block', boxShadow: '0 6px 20px rgba(94,138,140,0.35)', transition: 'opacity 0.2s, transform 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
            >Work With Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

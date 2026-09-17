import { Link } from 'react-router'
import { partners } from '../app/partners'

export default function Partners() {
  return (
    <div style={{ background: '#fff' }}>
      <section style={{ padding: '5rem 2rem 7rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', right: '-5%', width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(94,138,140,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F4F1E9', border: '1px solid rgba(94,138,140,0.25)', borderRadius: 50, padding: '0.35rem 1rem 0.35rem 0.6rem', marginBottom: '2rem' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#5E8A8C' }} />
            <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', fontWeight: 700, color: '#48696C' }}>04 — Partnerships</span>
          </div>

          <h2 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 400, color: '#2C3A47', lineHeight: 1.15, margin: '0 0 1rem' }}>
            Building with the{' '}
            <span style={{ color: '#5E8A8C', fontStyle: 'italic' }}>Right Partners</span>
          </h2>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1rem', fontWeight: 400, color: '#55656F', lineHeight: 1.8, margin: '0 0 4rem', maxWidth: 520 }}>
            NAA's strength comes from its network. These partnerships connect our community to resources, expertise, and mission-aligned institutions.
          </p>

          {/* Logo wall — each card links to that organization's own page */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '4rem' }}>
            {partners.map(p => (
              <Link key={p.slug} to={`/partners/${p.slug}`}
                style={{ background: '#fff', border: '1.5px solid rgba(94,138,140,0.15)', borderRadius: 20, padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.1rem', minHeight: 190, boxShadow: '0 4px 20px rgba(94,138,140,0.06)', textDecoration: 'none', transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(94,138,140,0.14)'; e.currentTarget.style.borderColor = 'rgba(94,138,140,0.45)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(94,138,140,0.06)'; e.currentTarget.style.borderColor = 'rgba(94,138,140,0.15)' }}
              >
                <div style={{ height: 88, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                  <img src={p.logo} alt={p.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', display: 'block' }} />
                </div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.82rem', fontWeight: 700, color: '#55656F', textAlign: 'center' }}>{p.name}</div>
              </Link>
            ))}
          </div>

          <div style={{ padding: '3rem', background: 'linear-gradient(135deg, #F4F1E9, #EBE5D9)', border: '1.5px solid rgba(94,138,140,0.25)', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '1.6rem', color: '#2C3A47', marginBottom: '0.5rem' }}>Interested in partnering with NAA?</div>
              <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.92rem', color: '#55656F', margin: 0 }}>We're actively building our network of mission-aligned sponsors and institutional partners.</p>
            </div>
            <Link to="/contact"
              style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg, #5E8A8C, #4A6B7C)', padding: '0.85rem 2rem', borderRadius: 50, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0, boxShadow: '0 6px 20px rgba(94,138,140,0.35)', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >Become a Partner</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Link, useParams } from 'react-router'
import { findPartner } from '../app/partners'

export default function PartnerDetail() {
  const { slug } = useParams()
  const partner = findPartner(slug)

  if (!partner) {
    return (
      <div style={{ background: '#fff' }}>
        <section style={{ padding: '6rem 2rem 8rem', maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '2rem', fontWeight: 400, color: '#2C3A47', margin: '0 0 1.5rem' }}>Partner not found</h2>
          <Link to="/partners" style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.92rem', fontWeight: 700, color: '#5E8A8C', textDecoration: 'none' }}>Back to Partners</Link>
        </section>
      </div>
    )
  }

  return (
    <div style={{ background: '#fff' }}>
      <section style={{ padding: '5rem 2rem 7rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', right: '-5%', width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(94,138,140,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative' }}>
          <Link to="/partners"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontFamily: 'Nunito, sans-serif', fontSize: '0.82rem', fontWeight: 700, color: '#5E8A8C', textDecoration: 'none', marginBottom: '2.5rem' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M8.5 3L4.5 7l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Partners
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <div style={{ background: '#fff', border: '1.5px solid rgba(94,138,140,0.15)', borderRadius: 20, padding: '1.75rem', width: 200, height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 20px rgba(94,138,140,0.06)' }}>
              <img src={partner.logo} alt={partner.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', display: 'block' }} />
            </div>
            <h2 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 400, color: '#2C3A47', lineHeight: 1.2, margin: 0 }}>
              {partner.name}
            </h2>
          </div>

          {partner.blurb ? (
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1rem', fontWeight: 400, color: '#55656F', lineHeight: 1.85, margin: 0, maxWidth: 640 }}>
              {partner.blurb}
            </p>
          ) : (
            // Empty on purpose. Put this partnership's copy in `blurb` in
            // src/app/partners.ts and it renders here.
            <div style={{ border: '1.5px dashed rgba(94,138,140,0.3)', borderRadius: 20, minHeight: 200, background: '#FAF8F3' }} />
          )}
        </div>
      </section>
    </div>
  )
}

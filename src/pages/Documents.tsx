import { orgDocuments, orgFacts } from '../app/documents'
import { IconBook } from '../app/Icons'

export default function Documents() {
  const available = orgDocuments.filter(d => d.file)

  return (
    <div style={{ background: '#fff' }}>
      <section style={{ padding: '5rem 2rem 7rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', right: '-5%', width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(94,138,140,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F4F1E9', border: '1px solid rgba(94,138,140,0.25)', borderRadius: 50, padding: '0.35rem 1rem 0.35rem 0.6rem', marginBottom: '2rem' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#5E8A8C' }} />
            <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', fontWeight: 700, color: '#48696C' }}>07 — Documents</span>
          </div>

          <h2 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 400, color: '#2C3A47', lineHeight: 1.15, margin: '0 0 1rem' }}>
            Governance and{' '}
            <span style={{ color: '#5E8A8C', fontStyle: 'italic' }}>Transparency</span>
          </h2>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1rem', fontWeight: 400, color: '#55656F', lineHeight: 1.8, margin: '0 0 4rem', maxWidth: 560 }}>
            Our founding and governing documents, available to anyone who wants to review how the NeuroAccess Alliance is organized and run.
          </p>

          {/* Organization details, stated in plain text */}
          <div style={{ background: '#FAF8F3', border: '1.5px solid rgba(94,138,140,0.15)', borderRadius: 20, padding: '2rem 2.25rem', marginBottom: '2.5rem', maxWidth: 640 }}>
            {orgFacts.map(fact => (
              <div key={fact.label} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
                <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.8rem', fontWeight: 800, color: '#5E8A8C', letterSpacing: '0.04em', minWidth: 120 }}>{fact.label}</span>
                <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.88rem', color: '#55656F', fontWeight: 500 }}>{fact.value}</span>
              </div>
            ))}
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.8rem', color: '#8B9A9C', lineHeight: 1.7, margin: '1.25rem 0 0' }}>
              Our incorporation can be verified through the{' '}
              <a href="https://www.sosnc.gov/verification" target="_blank" rel="noopener noreferrer" style={{ color: '#5E8A8C', fontWeight: 700, textDecoration: 'none' }}>North Carolina Secretary of State</a>.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {available.map((doc, i) => (
              <a key={i} href={doc.file} target="_blank" rel="noopener noreferrer"
                style={{ background: '#fff', border: '1.5px solid rgba(94,138,140,0.15)', borderRadius: 20, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', textDecoration: 'none', boxShadow: '0 4px 20px rgba(94,138,140,0.06)', transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(94,138,140,0.14)'; e.currentTarget.style.borderColor = 'rgba(94,138,140,0.45)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(94,138,140,0.06)'; e.currentTarget.style.borderColor = 'rgba(94,138,140,0.15)' }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 14, background: '#F4F1E9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <IconBook size={20} color="#5E8A8C" />
                </div>
                <div>
                  <div style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '1.25rem', color: '#2C3A47', marginBottom: '0.4rem' }}>{doc.title}</div>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.85rem', color: '#55656F', lineHeight: 1.7 }}>{doc.note}</div>
                </div>
                <div style={{ marginTop: 'auto', paddingTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'Nunito, sans-serif', fontSize: '0.8rem', fontWeight: 700, color: '#5E8A8C' }}>
                  View PDF
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M4.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.88rem', color: '#8B9A9C', lineHeight: 1.8, margin: '3rem 0 0', maxWidth: 560 }}>
            Looking for a document that is not listed here? Email us at{' '}
            <a href="mailto:neuroaccessalliance@gmail.com" style={{ color: '#5E8A8C', fontWeight: 700, textDecoration: 'none' }}>neuroaccessalliance@gmail.com</a>
            {' '}and we will send it over.
          </p>
        </div>
      </section>
    </div>
  )
}

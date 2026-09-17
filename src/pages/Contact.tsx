import { Link } from 'react-router'
import { IconMail, IconMapPin, IconUsers } from '../app/Icons'

export default function Contact() {
  return (
    <div style={{ background: '#fff' }}>
      <section style={{ padding: '5rem 2rem 7rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 800, height: 400, borderRadius: '0 0 50% 50%', background: 'radial-gradient(ellipse, rgba(94,138,140,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F4F1E9', border: '1px solid rgba(94,138,140,0.25)', borderRadius: 50, padding: '0.35rem 1rem 0.35rem 0.6rem', marginBottom: '2rem' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#5E8A8C' }} />
            <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', fontWeight: 700, color: '#48696C' }}>06 — Contact</span>
          </div>

          <h2 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 400, color: '#2C3A47', lineHeight: 1.15, margin: '0 0 1rem' }}>
            Work With{' '}
            <span style={{ color: '#5E8A8C', fontStyle: 'italic' }}>Us</span>
          </h2>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1rem', fontWeight: 400, color: '#55656F', lineHeight: 1.85, margin: '0 0 3.5rem', maxWidth: 620 }}>
            Whether you are a company looking for student partners, an organization that wants to build something with us, or a student trying to get into this field, email us and we will get back to you. All donations are tax-deductible to the extent permitted by law.
          </p>

          {/* Primary contact */}
          <a href="mailto:neuroaccessalliance@gmail.com"
            style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '2.5rem', background: 'linear-gradient(135deg, #F4F1E9, #E1E9E7)', border: '1.5px solid rgba(94,138,140,0.25)', borderRadius: 24, textDecoration: 'none', marginBottom: '1.25rem', maxWidth: 720, transition: 'transform 0.25s, box-shadow 0.25s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(94,138,140,0.16)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            <div style={{ width: 56, height: 56, borderRadius: 18, background: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <IconMail size={24} color="#5E8A8C" />
            </div>
            <div>
              <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.7rem', fontWeight: 800, color: '#48696C', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.35rem' }}>Email us</div>
              <div style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: 'clamp(1.15rem, 2.4vw, 1.6rem)', color: '#2C3A47', lineHeight: 1.2, wordBreak: 'break-word' }}>neuroaccessalliance@gmail.com</div>
            </div>
          </a>

          {/* Secondary routes */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', maxWidth: 720 }}>
            <Link to="/board"
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem 1.75rem', background: '#FAF8F3', borderRadius: 20, border: '1.5px solid rgba(94,138,140,0.15)', textDecoration: 'none', transition: 'border-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(94,138,140,0.45)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(94,138,140,0.15)')}
            >
              <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(94,138,140,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <IconUsers size={18} color="#5E8A8C" />
              </div>
              <div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.7rem', fontWeight: 800, color: '#8B9A9C', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Reach us directly</div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.9rem', color: '#2C3A47', fontWeight: 600 }}>Our board on LinkedIn</div>
              </div>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem 1.75rem', background: '#FAF8F3', borderRadius: 20, border: '1.5px solid rgba(94,138,140,0.15)' }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(74,107,124,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <IconMapPin size={18} color="#4A6B7C" />
              </div>
              <div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.7rem', fontWeight: 800, color: '#8B9A9C', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Based in</div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.9rem', color: '#2C3A47', fontWeight: 600 }}>Raleigh, North Carolina</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

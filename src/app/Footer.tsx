import { NavLink } from 'react-router'

const nav = ['Mission', 'Story', 'Board', 'Partners', 'Programs', 'Contact']
const navPaths: Record<string, string> = { Mission: '/', Story: '/story', Board: '/board', Partners: '/partners', Programs: '/programs', Contact: '/contact' }

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(180deg, #EEF6FF 0%, #E0EFFF 100%)', borderTop: '1px solid rgba(110,198,245,0.25)', padding: '4rem 2rem 2.5rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }} className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <div style={{ width: 36, height: 36, borderRadius: 12, background: 'linear-gradient(135deg, #3AACF0, #5B8DEF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="3" fill="white" fillOpacity="0.9"/>
                  <circle cx="9" cy="3" r="1.5" fill="white" fillOpacity="0.6"/>
                  <circle cx="9" cy="15" r="1.5" fill="white" fillOpacity="0.6"/>
                  <circle cx="3" cy="9" r="1.5" fill="white" fillOpacity="0.6"/>
                  <circle cx="15" cy="9" r="1.5" fill="white" fillOpacity="0.6"/>
                  <line x1="9" y1="6" x2="9" y2="4.5" stroke="white" strokeWidth="1" strokeOpacity="0.5"/>
                  <line x1="9" y1="12" x2="9" y2="13.5" stroke="white" strokeWidth="1" strokeOpacity="0.5"/>
                  <line x1="6" y1="9" x2="4.5" y2="9" stroke="white" strokeWidth="1" strokeOpacity="0.5"/>
                  <line x1="12" y1="9" x2="13.5" y2="9" stroke="white" strokeWidth="1" strokeOpacity="0.5"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '1.1rem', color: '#1A2B3C', lineHeight: 1.1 }}>NeuroAccess</div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.55rem', fontWeight: 700, color: '#3AACF0', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Alliance</div>
              </div>
            </div>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.88rem', fontWeight: 400, color: '#4A6070', lineHeight: 1.8, margin: '0 0 1.5rem', maxWidth: 360 }}>
              Expanding equitable access to transformative neurotechnology and improving quality of life for individuals affected by neurological challenges.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {[['EIN', '88-XXXXXXX'], ['Registration', 'North Carolina Nonprofit Corporation'], ['Status', '501(c)(3) Tax-Exempt Organization']].map(([label, val]) => (
                <div key={label} style={{ display: 'flex', gap: '0.75rem', fontFamily: 'Nunito, sans-serif', fontSize: '0.8rem' }}>
                  <span style={{ color: '#3AACF0', fontWeight: 700, minWidth: 90 }}>{label}</span>
                  <span style={{ color: '#4A6070', fontWeight: 400 }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.7rem', fontWeight: 800, color: '#1A2B3C', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Navigate</div>
            {nav.map(item => (
              <NavLink key={item} to={navPaths[item]}
                style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontSize: '0.88rem', color: '#4A6070', textDecoration: 'none', marginBottom: '0.5rem', fontWeight: 600, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#3AACF0')}
                onMouseLeave={e => (e.currentTarget.style.color = '#4A6070')}
              >{item}</NavLink>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.7rem', fontWeight: 800, color: '#1A2B3C', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Partners</div>
            {['Neurotech at NC State', 'Neuroscience Club at NC State', 'Hilltop Home'].map(p => (
              <div key={p} style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.85rem', color: '#4A6070', fontWeight: 400, marginBottom: '0.5rem', lineHeight: 1.4 }}>{p}</div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(110,198,245,0.3)', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', color: '#7A9AB0', fontWeight: 400 }}>
            © 2025 NeuroAccess Alliance. All rights reserved. Donations are tax-deductible to the extent allowed by law.
          </div>
          <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', color: '#7A9AB0', fontWeight: 400 }}>Raleigh, North Carolina</div>
        </div>
      </div>
    </footer>
  )
}

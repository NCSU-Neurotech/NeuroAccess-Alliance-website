import { NavLink } from 'react-router'
import naaLogo from '../assets/naa-logo.png'

const nav = ['Mission', 'Story', 'Board', 'Partners', 'Programs', 'Contact']
const navPaths: Record<string, string> = { Mission: '/', Story: '/story', Board: '/board', Partners: '/partners', Programs: '/programs', Contact: '/contact' }

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(180deg, #F4F1E9 0%, #EBE5D9 100%)', borderTop: '1px solid rgba(138,165,167,0.25)', padding: '4rem 2rem 2.5rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }} className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.25rem' }}>
              <img src={naaLogo} alt="NeuroAccess Alliance" style={{ height: 46, width: 'auto', display: 'block' }} />
            </div>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.88rem', fontWeight: 400, color: '#55656F', lineHeight: 1.8, margin: '0 0 1.5rem', maxWidth: 360 }}>
              Expanding equitable access to transformative neurotechnology and improving quality of life for individuals affected by neurological challenges.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {[['EIN', '42-2695701'], ['Registration', 'North Carolina Nonprofit Corporation'], ['Status', '501(c)(3) Tax-Exempt Organization']].map(([label, val]) => (
                <div key={label} style={{ display: 'flex', gap: '0.75rem', fontFamily: 'Nunito, sans-serif', fontSize: '0.8rem' }}>
                  <span style={{ color: '#5E8A8C', fontWeight: 700, minWidth: 90 }}>{label}</span>
                  <span style={{ color: '#55656F', fontWeight: 400 }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.7rem', fontWeight: 800, color: '#2C3A47', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Navigate</div>
            {nav.map(item => (
              <NavLink key={item} to={navPaths[item]}
                style={{ display: 'block', fontFamily: 'Nunito, sans-serif', fontSize: '0.88rem', color: '#55656F', textDecoration: 'none', marginBottom: '0.5rem', fontWeight: 600, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#5E8A8C')}
                onMouseLeave={e => (e.currentTarget.style.color = '#55656F')}
              >{item}</NavLink>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.7rem', fontWeight: 800, color: '#2C3A47', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Partners</div>
            {['Neurotech at NC State', 'Neuroscience Club at NC State', 'Synaptive'].map(p => (
              <div key={p} style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.85rem', color: '#55656F', fontWeight: 400, marginBottom: '0.5rem', lineHeight: 1.4 }}>{p}</div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(138,165,167,0.3)', paddingTop: '1.5rem' }}>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', color: '#8B9A9C', fontWeight: 400, lineHeight: 1.75, margin: '0 0 1rem', maxWidth: 760 }}>
            NeuroAccess Alliance is a 501(c)(3) tax-exempt nonprofit corporation incorporated in North Carolina. EIN: 42-2695701. All donations are tax-deductible to the extent permitted by law.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', color: '#8B9A9C', fontWeight: 400 }}>
              © {new Date().getFullYear()} NeuroAccess Alliance. All rights reserved.
            </div>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', color: '#8B9A9C', fontWeight: 400 }}>Raleigh, North Carolina</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

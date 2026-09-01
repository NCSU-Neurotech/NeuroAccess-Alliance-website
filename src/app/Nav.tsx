import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router'

const links = [
  { label: 'Mission', to: '/' },
  { label: 'Story', to: '/story' },
  { label: 'Board', to: '/board' },
  { label: 'Partners', to: '/partners' },
  { label: 'Programs', to: '/programs' },
  { label: 'Contact', to: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'background 0.3s, box-shadow 0.3s',
      background: scrolled ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0.85)',
      boxShadow: scrolled ? '0 2px 20px rgba(30,100,200,0.08)' : 'none',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(110,198,245,0.2)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        <NavLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: 36, height: 36, borderRadius: 12, background: 'linear-gradient(135deg, #3AACF0, #5B8DEF)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(58,172,240,0.3)' }}>
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
            <div style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '1.05rem', fontWeight: 400, color: '#1A2B3C', lineHeight: 1.1 }}>NeuroAccess</div>
            <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.55rem', fontWeight: 700, color: '#3AACF0', letterSpacing: '0.2em', textTransform: 'uppercase', lineHeight: 1 }}>Alliance</div>
          </div>
        </NavLink>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              style={({ isActive }) => ({
                fontFamily: 'Nunito, sans-serif', fontSize: '0.88rem', fontWeight: isActive ? 700 : 600,
                color: isActive ? '#3AACF0' : '#4A6070',
                textDecoration: 'none', transition: 'color 0.2s',
              })}
            >{l.label}</NavLink>
          ))}
          <NavLink to="/contact"
            style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.88rem', fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg, #3AACF0, #5B8DEF)', padding: '0.55rem 1.3rem', borderRadius: 50, textDecoration: 'none', boxShadow: '0 4px 14px rgba(58,172,240,0.35)', transition: 'opacity 0.2s, transform 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
          >Partner With Us</NavLink>
        </div>

        <button onClick={() => setMenuOpen(m => !m)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: '#3AACF0' }} className="show-mobile">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen
              ? <><line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/><line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></>
              : <><line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/><line x1="3" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/><line x1="3" y1="17" x2="19" y2="17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></>
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: 'rgba(255,255,255,0.98)', borderTop: '1px solid rgba(110,198,245,0.2)', padding: '1rem 2rem 1.5rem' }}>
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              style={({ isActive }) => ({ display: 'block', fontFamily: 'Nunito, sans-serif', fontSize: '0.95rem', fontWeight: isActive ? 700 : 600, color: isActive ? '#3AACF0' : '#4A6070', padding: '0.7rem 0', textDecoration: 'none', borderBottom: '1px solid rgba(110,198,245,0.15)' })}
            >{l.label}</NavLink>
          ))}
          <NavLink to="/contact"
            style={{ display: 'inline-block', marginTop: '1rem', fontFamily: 'Nunito, sans-serif', fontSize: '0.9rem', fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg, #3AACF0, #5B8DEF)', padding: '0.6rem 1.5rem', borderRadius: 50, textDecoration: 'none' }}
          >Partner With Us</NavLink>
        </div>
      )}
    </nav>
  )
}

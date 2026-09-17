import { Link } from 'react-router'
import { IconGraduate, IconShield, IconMapPin, IconBook, IconUsers, IconFlask, IconGlobe } from '../app/Icons'

export default function Home() {
  return (
    <div style={{ background: '#fff' }}>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '5rem 2rem 6rem' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(94,138,140,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,107,124,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #F4F1E9, #EBE5D9)', border: '1px solid rgba(94,138,140,0.3)', borderRadius: 50, padding: '0.35rem 1rem 0.35rem 0.6rem', marginBottom: '2rem' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#5E8A8C' }} />
                <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', fontWeight: 700, color: '#48696C', letterSpacing: '0.04em' }}>Expanding Neurotechnology Access</span>
              </div>

              <h1 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: 'clamp(2.6rem, 5vw, 4rem)', fontWeight: 400, color: '#2C3A47', lineHeight: 1.12, margin: '0 0 1.5rem', letterSpacing: '-0.01em' }}>
                Empowering the Next Generation of{' '}
                <span style={{ color: '#5E8A8C', fontStyle: 'italic' }}>Neuroscience Innovators</span>
              </h1>

              <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1.05rem', fontWeight: 400, color: '#55656F', lineHeight: 1.8, margin: '0 0 2.5rem', maxWidth: 500 }}>
                The NeuroAccess Alliance is a nonprofit dedicated to expanding equitable access to transformative neurotechnology and improving quality of life for individuals affected by neurological challenges.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/story"
                  style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg, #5E8A8C, #4A6B7C)', padding: '0.85rem 2rem', borderRadius: 50, textDecoration: 'none', boxShadow: '0 6px 20px rgba(94,138,140,0.35)', transition: 'opacity 0.2s, transform 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
                >Our Story</Link>
                <Link to="/contact"
                  style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: '#5E8A8C', background: 'transparent', padding: '0.85rem 2rem', borderRadius: 50, textDecoration: 'none', border: '2px solid rgba(94,138,140,0.4)', transition: 'border-color 0.2s, background 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#5E8A8C'; e.currentTarget.style.background = 'rgba(94,138,140,0.06)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(94,138,140,0.4)'; e.currentTarget.style.background = 'transparent' }}
                >Become a Sponsor</Link>
              </div>
            </div>

            {/* Stats panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { num: '3', label: 'University Partnerships', sub: 'NC State and regional institutions', Icon: IconGraduate, grad: 'linear-gradient(135deg, #F4F1E9, #E1E9E7)', iconColor: '#5E8A8C' },
                { num: '501(c)(3)', label: 'Federal Tax-Exempt Status', sub: 'North Carolina registered nonprofit', Icon: IconShield, grad: 'linear-gradient(135deg, #EFF3EE, #DCE8DC)', iconColor: '#5F8A6E' },
                { num: '2026', label: 'Founded in Raleigh, NC', sub: 'Mission-driven from day one', Icon: IconMapPin, grad: 'linear-gradient(135deg, #FBF5E8, #F2E4CA)', iconColor: '#C4924A' },
              ].map((stat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.5rem 1.75rem', background: stat.grad, borderRadius: 20, border: '1px solid rgba(94,138,140,0.12)', transition: 'transform 0.2s, box-shadow 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(94,138,140,0.12)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none' }}
                >
                  <div style={{ width: 44, height: 44, borderRadius: 14, background: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <stat.Icon size={20} color={stat.iconColor} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '1.6rem', color: '#2C3A47', lineHeight: 1 }}>{stat.num}</div>
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.88rem', fontWeight: 700, color: '#2C3A47', marginTop: '0.2rem' }}>{stat.label}</div>
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.75rem', color: '#8B9A9C', fontWeight: 500 }}>{stat.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick nav cards */}
      <section style={{ padding: '0 2rem 6rem', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }} className="programs-grid">
            {[
              { label: 'Our Story', sub: 'Why we exist', to: '/story', Icon: IconBook, color: '#4A6B7C' },
              { label: 'Board', sub: 'Meet our leadership', to: '/board', Icon: IconUsers, color: '#5E8A8C' },
              { label: 'Programs', sub: 'What we do', to: '/programs', Icon: IconFlask, color: '#4A6B7C' },
              { label: 'Partners', sub: 'Our network', to: '/partners', Icon: IconGlobe, color: '#5E8A8C' },
            ].map((card, i) => (
              <Link key={i} to={card.to} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', padding: '2rem 1rem', background: '#FAF8F3', borderRadius: 20, border: '1.5px solid rgba(74,107,124,0.12)', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s', textAlign: 'center' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 10px 28px rgba(94,138,140,0.15)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = card.color + '55' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(74,107,124,0.12)' }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 16, background: card.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <card.Icon size={22} color={card.color} />
                </div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.95rem', fontWeight: 800, color: '#2C3A47' }}>{card.label}</div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', fontWeight: 500, color: '#8B9A9C' }}>{card.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

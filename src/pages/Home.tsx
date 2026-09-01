import { Link } from 'react-router'
import { IconGraduate, IconShield, IconMapPin, IconBook, IconUsers, IconFlask, IconGlobe } from '../app/Icons'

export default function Home() {
  return (
    <div style={{ background: '#fff' }}>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '5rem 2rem 6rem' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(58,172,240,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,141,239,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #EEF6FF, #E0EFFF)', border: '1px solid rgba(58,172,240,0.3)', borderRadius: 50, padding: '0.35rem 1rem 0.35rem 0.6rem', marginBottom: '2rem' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#3AACF0' }} />
                <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', fontWeight: 700, color: '#2880C0', letterSpacing: '0.04em' }}>Expanding Neurotechnology Access</span>
              </div>

              <h1 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: 'clamp(2.6rem, 5vw, 4rem)', fontWeight: 400, color: '#1A2B3C', lineHeight: 1.12, margin: '0 0 1.5rem', letterSpacing: '-0.01em' }}>
                Empowering the Next Generation of{' '}
                <span style={{ color: '#3AACF0', fontStyle: 'italic' }}>Neuroscience Innovators</span>
              </h1>

              <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1.05rem', fontWeight: 400, color: '#4A6070', lineHeight: 1.8, margin: '0 0 2.5rem', maxWidth: 500 }}>
                The NeuroAccess Alliance is a nonprofit dedicated to expanding equitable access to transformative neurotechnology and improving quality of life for individuals affected by neurological challenges.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/story"
                  style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg, #3AACF0, #5B8DEF)', padding: '0.85rem 2rem', borderRadius: 50, textDecoration: 'none', boxShadow: '0 6px 20px rgba(58,172,240,0.35)', transition: 'opacity 0.2s, transform 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
                >Our Story</Link>
                <Link to="/contact"
                  style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: '#3AACF0', background: 'transparent', padding: '0.85rem 2rem', borderRadius: 50, textDecoration: 'none', border: '2px solid rgba(58,172,240,0.4)', transition: 'border-color 0.2s, background 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#3AACF0'; e.currentTarget.style.background = 'rgba(58,172,240,0.06)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(58,172,240,0.4)'; e.currentTarget.style.background = 'transparent' }}
                >Become a Sponsor</Link>
              </div>
            </div>

            {/* Stats panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { num: '3', label: 'University Partnerships', sub: 'NC State and regional institutions', Icon: IconGraduate, grad: 'linear-gradient(135deg, #EEF6FF, #D6EEFF)', iconColor: '#3AACF0' },
                { num: '501(c)(3)', label: 'Federal Tax-Exempt Status', sub: 'North Carolina registered nonprofit', Icon: IconShield, grad: 'linear-gradient(135deg, #F0FFF4, #D6F5E3)', iconColor: '#28A870' },
                { num: '2025', label: 'Founded in Raleigh, NC', sub: 'Mission-driven from day one', Icon: IconMapPin, grad: 'linear-gradient(135deg, #FFF8EE, #FFEBD6)', iconColor: '#E8A838' },
              ].map((stat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.5rem 1.75rem', background: stat.grad, borderRadius: 20, border: '1px solid rgba(58,172,240,0.12)', transition: 'transform 0.2s, box-shadow 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(58,172,240,0.12)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none' }}
                >
                  <div style={{ width: 44, height: 44, borderRadius: 14, background: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <stat.Icon size={20} color={stat.iconColor} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '1.6rem', color: '#1A2B3C', lineHeight: 1 }}>{stat.num}</div>
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.88rem', fontWeight: 700, color: '#1A2B3C', marginTop: '0.2rem' }}>{stat.label}</div>
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.75rem', color: '#7A9AB0', fontWeight: 500 }}>{stat.sub}</div>
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
              { label: 'Our Story', sub: 'Why we exist', to: '/story', Icon: IconBook, color: '#5B8DEF' },
              { label: 'Board', sub: 'Meet our leadership', to: '/board', Icon: IconUsers, color: '#3AACF0' },
              { label: 'Programs', sub: 'What we do', to: '/programs', Icon: IconFlask, color: '#5B8DEF' },
              { label: 'Partners', sub: 'Our network', to: '/partners', Icon: IconGlobe, color: '#3AACF0' },
            ].map((card, i) => (
              <Link key={i} to={card.to} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', padding: '2rem 1rem', background: '#F7FBFF', borderRadius: 20, border: '1.5px solid rgba(91,141,239,0.12)', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s', textAlign: 'center' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 10px 28px rgba(58,172,240,0.15)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = card.color + '55' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(91,141,239,0.12)' }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 16, background: card.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <card.Icon size={22} color={card.color} />
                </div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.95rem', fontWeight: 800, color: '#1A2B3C' }}>{card.label}</div>
                <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', fontWeight: 500, color: '#7A9AB0' }}>{card.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

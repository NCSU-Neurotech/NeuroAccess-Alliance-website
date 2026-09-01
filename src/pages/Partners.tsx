import { Link } from 'react-router'
import { IconFlask, IconGlobe, IconHome } from '../app/Icons'

const partners = [
  {
    name: 'Neurotech at NC State',
    type: 'Academic Organization',
    description: 'Neurotech at NC State is a student-led engineering organization focused on developing brain-computer interface technology. Our partnership provides NAA members with access to hardware resources, workshops, and mentorship from students actively building in the neurotech space.',
    Icon: IconFlask,
    bg: 'linear-gradient(135deg, #FFF0F0, #FFE5E5)',
    border: 'rgba(204,0,0,0.15)',
    badge: '#CC0000',
    iconColor: '#CC0000',
  },
  {
    name: 'Neuroscience Club at NC State',
    type: 'Academic Organization',
    description: 'The Neuroscience Club at NC State brings together undergraduate and graduate students passionate about brain science. Through our partnership, NAA co-hosts research seminars, journal clubs, and networking events that bridge the gap between academic neuroscience and applied neurotechnology.',
    Icon: IconGlobe,
    bg: 'linear-gradient(135deg, #F0F5FF, #E5EFFF)',
    border: 'rgba(91,141,239,0.2)',
    badge: '#5B8DEF',
    iconColor: '#5B8DEF',
  },
  {
    name: 'Hilltop Home',
    type: 'Community Partner',
    description: "Hilltop Home provides residential care and support for individuals with neurological and developmental disabilities in North Carolina. This partnership grounds NAA's work in real patient needs, ensuring our programs serve the community members who stand to benefit most from emerging neurotechnology.",
    Icon: IconHome,
    bg: 'linear-gradient(135deg, #F0FFF8, #E5FFF0)',
    border: 'rgba(40,168,112,0.2)',
    badge: '#28A870',
    iconColor: '#28A870',
  },
]

export default function Partners() {
  return (
    <div style={{ background: '#fff' }}>
      <section style={{ padding: '5rem 2rem 7rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', right: '-5%', width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(58,172,240,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#EEF6FF', border: '1px solid rgba(58,172,240,0.25)', borderRadius: 50, padding: '0.35rem 1rem 0.35rem 0.6rem', marginBottom: '2rem' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#3AACF0' }} />
            <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', fontWeight: 700, color: '#2880C0' }}>04 — Partnerships</span>
          </div>

          <h2 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 400, color: '#1A2B3C', lineHeight: 1.15, margin: '0 0 1rem' }}>
            Building with the{' '}
            <span style={{ color: '#3AACF0', fontStyle: 'italic' }}>Right Partners</span>
          </h2>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1rem', fontWeight: 400, color: '#4A6070', lineHeight: 1.8, margin: '0 0 4rem', maxWidth: 520 }}>
            NAA's strength comes from its network. These partnerships connect our community to resources, expertise, and mission-aligned institutions.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '4rem' }}>
            {partners.map((p, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '280px 1fr', background: p.bg, border: `1.5px solid ${p.border}`, borderRadius: 24, overflow: 'hidden' }} className="partner-row">
                <div style={{ padding: '2.5rem 2rem', borderRight: `1.5px solid ${p.border}`, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.7rem' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 16, background: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.1rem' }}>
                    <p.Icon size={22} color={p.iconColor} />
                  </div>
                  <div style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '1.1rem', color: '#1A2B3C', lineHeight: 1.3 }}>{p.name}</div>
                  <span style={{ display: 'inline-block', fontFamily: 'Nunito, sans-serif', fontSize: '0.7rem', fontWeight: 700, color: '#fff', background: p.badge, padding: '0.25rem 0.75rem', borderRadius: 50, width: 'fit-content' }}>{p.type}</span>
                </div>
                <div style={{ padding: '2.5rem 2.5rem', display: 'flex', alignItems: 'center' }}>
                  <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.95rem', fontWeight: 400, color: '#4A6070', lineHeight: 1.8, margin: 0 }}>{p.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ padding: '3rem', background: 'linear-gradient(135deg, #EEF6FF, #E0EFFF)', border: '1.5px solid rgba(58,172,240,0.25)', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '1.6rem', color: '#1A2B3C', marginBottom: '0.5rem' }}>Interested in partnering with NAA?</div>
              <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.92rem', color: '#4A6070', margin: 0 }}>We're actively building our network of mission-aligned sponsors and institutional partners.</p>
            </div>
            <Link to="/contact"
              style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg, #3AACF0, #5B8DEF)', padding: '0.85rem 2rem', borderRadius: 50, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0, boxShadow: '0 6px 20px rgba(58,172,240,0.35)', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >Become a Partner</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

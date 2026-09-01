import { Link } from 'react-router'
import { IconGraduate, IconPlug, IconLightbulb, IconHandshake, IconCalendar, IconHeart } from '../app/Icons'

const programs = [
  {
    num: '01',
    name: 'NeuroReach Workshops',
    tag: 'Education',
    Icon: IconGraduate,
    iconColor: '#3AACF0',
    tagBg: '#3AACF0',
    bg: 'linear-gradient(135deg, #EEF6FF, #DCF0FF)',
    border: 'rgba(58,172,240,0.2)',
    description: 'Hands-on workshops introducing students and community members to neurotechnology concepts, tools, and career pathways. Sessions cover EEG fundamentals, BCI software, and ethical considerations in neural data.',
    impact: 'Your sponsorship funds workshop kits, facilitator training, and scholarships for underrepresented participants.',
    status: 'Planned — Launch 2025',
  },
  {
    num: '02',
    name: 'Hardware Access Program',
    tag: 'Equipment',
    Icon: IconPlug,
    iconColor: '#E8A838',
    tagBg: '#E8A838',
    bg: 'linear-gradient(135deg, #FFF8EE, #FFEBD6)',
    border: 'rgba(232,164,56,0.2)',
    description: 'A lending library of consumer neurotechnology hardware — EEG headsets, EMG sensors, and related devices — available to students, researchers, and individuals at no cost. The first of its kind in the Triangle.',
    impact: 'Each sponsored device kit enables up to 12 students per semester to run real neural data experiments without personal cost.',
    status: 'Planned — Q3 2025',
  },
  {
    num: '03',
    name: 'Research Seed Grants',
    tag: 'Funding',
    Icon: IconLightbulb,
    iconColor: '#5B8DEF',
    tagBg: '#5B8DEF',
    bg: 'linear-gradient(135deg, #F0F5FF, #E5EFFF)',
    border: 'rgba(91,141,239,0.2)',
    description: 'Micro-grants of $500–$2,500 for undergraduate and early-graduate researchers pursuing neuroscience projects with translational or community relevance. Priority given to first-generation students and underrepresented groups.',
    impact: 'A $5,000 sponsorship funds two complete research grants plus program administration for a full academic year.',
    status: 'Planned — AY 2025–26',
  },
  {
    num: '04',
    name: 'Clinical Community Bridge',
    tag: 'Outreach',
    Icon: IconHandshake,
    iconColor: '#28A870',
    tagBg: '#28A870',
    bg: 'linear-gradient(135deg, #F0FFF8, #E5FFF0)',
    border: 'rgba(40,168,112,0.2)',
    description: 'Connecting NAA members with patients and caregivers at Hilltop Home and partner facilities to understand lived neurological experience. Includes facilitated roundtables, assistive technology demonstrations, and co-design sessions.',
    impact: 'Sponsorship funds facilitator stipends, accessible materials, and transportation for community participants.',
    status: 'Planned — Pilot 2025',
  },
]

export default function Programs() {
  return (
    <div style={{ background: '#fff' }}>
      <section style={{ padding: '5rem 2rem 7rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(58,172,240,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#EEF6FF', border: '1px solid rgba(58,172,240,0.25)', borderRadius: 50, padding: '0.35rem 1rem 0.35rem 0.6rem', marginBottom: '2rem' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#3AACF0' }} />
            <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', fontWeight: 700, color: '#2880C0' }}>05 — Programs</span>
          </div>

          <h2 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 400, color: '#1A2B3C', lineHeight: 1.15, margin: '0 0 1rem' }}>
            What Your Support{' '}
            <span style={{ color: '#3AACF0', fontStyle: 'italic' }}>Makes Possible</span>
          </h2>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1rem', fontWeight: 400, color: '#4A6070', lineHeight: 1.8, margin: '0 0 4rem', maxWidth: 520 }}>
            Our programs are designed to create tangible, measurable access to neuroscience education, equipment, and funding for those who need it most.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '4rem' }} className="programs-grid">
            {programs.map((p, i) => (
              <div key={i} style={{ background: p.bg, border: `1.5px solid ${p.border}`, borderRadius: 24, padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', transition: 'transform 0.25s, box-shadow 0.25s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 30px rgba(58,172,240,0.12)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 16, background: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p.Icon size={22} color={p.iconColor} />
                  </div>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.7rem', fontWeight: 700, color: '#fff', background: p.tagBg, padding: '0.25rem 0.8rem', borderRadius: 50 }}>{p.tag}</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.65rem', fontWeight: 800, color: '#7A9AB0', letterSpacing: '0.15em', marginBottom: '0.3rem' }}>{p.num}</div>
                  <h3 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '1.4rem', fontWeight: 400, color: '#1A2B3C', margin: '0 0 0.75rem' }}>{p.name}</h3>
                  <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.9rem', fontWeight: 400, color: '#4A6070', lineHeight: 1.8, margin: 0 }}>{p.description}</p>
                </div>
                <div style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.7)', borderRadius: 16, marginTop: 'auto', border: '1px solid rgba(255,255,255,0.9)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                    <IconHeart size={13} color="#3AACF0" />
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.68rem', fontWeight: 800, color: '#3AACF0', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Sponsor Impact</div>
                  </div>
                  <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.85rem', color: '#4A6070', lineHeight: 1.7, margin: 0 }}>{p.impact}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <IconCalendar size={13} color="#7A9AB0" />
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.75rem', color: '#7A9AB0', fontWeight: 600 }}>{p.status}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/contact"
              style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg, #3AACF0, #5B8DEF)', padding: '1rem 2.5rem', borderRadius: 50, textDecoration: 'none', display: 'inline-block', boxShadow: '0 6px 20px rgba(58,172,240,0.35)', transition: 'opacity 0.2s, transform 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
            >Fund a Program</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

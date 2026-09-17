import { useState } from 'react'
import { IconSeedling, IconRocket, IconStar, IconMail, IconMapPin, IconCheck, IconParty } from '../app/Icons'

const tiers = [
  {
    name: 'Seed',
    amount: '$500',
    Icon: IconSeedling,
    iconColor: '#8B9A9C',
    grad: 'linear-gradient(135deg, #FAF8F3, #F4F1E9)',
    border: 'rgba(94,138,140,0.2)',
    dotColor: '#8B9A9C',
    highlight: false,
    benefits: ['Logo on NAA website', 'Recognition at events', 'Annual impact report'],
    funds: 'Workshop materials for 10 students',
  },
  {
    name: 'Pioneer',
    amount: '$2,500',
    Icon: IconRocket,
    iconColor: '#5E8A8C',
    grad: 'linear-gradient(135deg, #F4F1E9, #E1E9E7)',
    border: 'rgba(94,138,140,0.4)',
    dotColor: '#5E8A8C',
    highlight: true,
    benefits: ['All Seed benefits', 'Named program component', 'Social media feature', 'Partner spotlight newsletter'],
    funds: 'Full hardware lending kit + semester administration',
  },
  {
    name: 'Vanguard',
    amount: '$10,000+',
    Icon: IconStar,
    iconColor: '#C4924A',
    grad: 'linear-gradient(135deg, #FBF5E8, #F2E4CA)',
    border: 'rgba(196,146,74,0.3)',
    dotColor: '#C4924A',
    highlight: false,
    benefits: ['All Pioneer benefits', 'Board advisory seat', 'Co-branded programming', 'Annual research briefing', 'Custom impact reporting'],
    funds: 'Research grant cohort + full program year',
  },
]

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.85rem 1.1rem',
  background: '#FAF8F3',
  border: '1.5px solid rgba(94,138,140,0.2)',
  borderRadius: 14,
  color: '#2C3A47',
  fontFamily: 'Nunito, sans-serif',
  fontSize: '0.92rem',
  fontWeight: 500,
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  boxSizing: 'border-box',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', org: '', tier: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ background: '#fff' }}>
      <section style={{ padding: '5rem 2rem 7rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 800, height: 400, borderRadius: '0 0 50% 50%', background: 'radial-gradient(ellipse, rgba(94,138,140,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F4F1E9', border: '1px solid rgba(94,138,140,0.25)', borderRadius: 50, padding: '0.35rem 1rem 0.35rem 0.6rem', marginBottom: '2rem' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#5E8A8C' }} />
            <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', fontWeight: 700, color: '#48696C' }}>06 — Partner With Us</span>
          </div>

          <h2 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 400, color: '#2C3A47', lineHeight: 1.15, margin: '0 0 1rem' }}>
            Invest in the Future of{' '}
            <span style={{ color: '#5E8A8C', fontStyle: 'italic' }}>Neuroscience Access</span>
          </h2>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1rem', fontWeight: 400, color: '#55656F', lineHeight: 1.8, margin: '0 0 4rem', maxWidth: 520 }}>
            Partnership with NAA is a direct investment in students, researchers, and patients across North Carolina. All contributions are tax-deductible under our 501(c)(3) status.
          </p>

          {/* Tiers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginBottom: '5rem' }} className="tiers-grid">
            {tiers.map((t, i) => (
              <div key={i} style={{ background: t.grad, border: `1.5px solid ${t.border}`, borderRadius: 24, padding: '2.5rem 2rem', position: 'relative', display: 'flex', flexDirection: 'column', gap: '1.25rem', boxShadow: t.highlight ? '0 8px 30px rgba(94,138,140,0.18)' : 'none', transition: 'transform 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'}
              >
                {t.highlight && (
                  <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #5E8A8C, #4A6B7C)', color: '#fff', fontFamily: 'Nunito, sans-serif', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', padding: '0.3rem 1rem', borderRadius: 50, whiteSpace: 'nowrap' }}>Most Popular</div>
                )}
                <div>
                  <div style={{ width: 44, height: 44, borderRadius: 14, background: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                    <t.Icon size={22} color={t.iconColor} />
                  </div>
                  <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.75rem', fontWeight: 800, color: t.dotColor, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{t.name}</div>
                  <div style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '2.2rem', color: '#2C3A47' }}>{t.amount}</div>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {t.benefits.map((b, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'Nunito, sans-serif', fontSize: '0.88rem', color: '#55656F', fontWeight: 500 }}>
                      <div style={{ width: 18, height: 18, borderRadius: '50%', background: t.dotColor + '22', border: `1.5px solid ${t.dotColor}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <IconCheck size={10} color={t.dotColor} strokeWidth={2.5} />
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1.5px solid rgba(255,255,255,0.7)', fontFamily: 'Nunito, sans-serif', fontSize: '0.82rem', color: '#55656F', lineHeight: 1.6 }}>
                  <span style={{ color: t.dotColor, fontWeight: 700 }}>Funds: </span>{t.funds}
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="contact-grid">
            <div>
              <h3 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '2rem', fontWeight: 400, color: '#2C3A47', margin: '0 0 1rem' }}>Get in Touch</h3>
              <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.95rem', color: '#55656F', lineHeight: 1.8, margin: '0 0 2rem', fontWeight: 400 }}>
                Ready to explore a partnership? Fill out the form and a member of our team will respond within 48 hours. Custom arrangements are available for institutional partners.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { Icon: IconMail, label: 'Email', value: 'neuroaccessalliance@gmail.com', color: '#5E8A8C' },
                  { Icon: IconMapPin, label: 'Location', value: 'Raleigh, North Carolina', color: '#4A6B7C' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', background: '#FAF8F3', borderRadius: 16, border: '1.5px solid rgba(94,138,140,0.15)' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: item.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <item.Icon size={18} color={item.color} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.7rem', fontWeight: 800, color: '#8B9A9C', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.label}</div>
                      <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.92rem', color: '#2C3A47', fontWeight: 600 }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {submitted ? (
              <div style={{ padding: '3rem', background: 'linear-gradient(135deg, #F4F1E9, #E1E9E7)', border: '1.5px solid rgba(94,138,140,0.3)', borderRadius: 24, textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg, #5E8A8C, #4A6B7C)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <IconParty size={26} color="#fff" />
                </div>
                <div style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '1.6rem', color: '#2C3A47', marginBottom: '0.75rem' }}>Message Received!</div>
                <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.95rem', color: '#55656F', lineHeight: 1.75, margin: 0 }}>Thank you for your interest in partnering with the NeuroAccess Alliance. We'll be in touch within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: '#FAF8F3', padding: '2.5rem', borderRadius: 24, border: '1.5px solid rgba(94,138,140,0.15)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.75rem', fontWeight: 800, color: '#55656F', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Name *</label>
                    <input required style={inputStyle} placeholder="Full name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      onFocus={e => { e.target.style.borderColor = '#5E8A8C'; e.target.style.boxShadow = '0 0 0 3px rgba(94,138,140,0.12)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(94,138,140,0.2)'; e.target.style.boxShadow = 'none' }} />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.75rem', fontWeight: 800, color: '#55656F', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Email *</label>
                    <input required type="email" style={inputStyle} placeholder="you@org.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      onFocus={e => { e.target.style.borderColor = '#5E8A8C'; e.target.style.boxShadow = '0 0 0 3px rgba(94,138,140,0.12)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(94,138,140,0.2)'; e.target.style.boxShadow = 'none' }} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.75rem', fontWeight: 800, color: '#55656F', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Phone</label>
                    <input style={inputStyle} placeholder="(555) 000-0000" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      onFocus={e => { e.target.style.borderColor = '#5E8A8C'; e.target.style.boxShadow = '0 0 0 3px rgba(94,138,140,0.12)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(94,138,140,0.2)'; e.target.style.boxShadow = 'none' }} />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.75rem', fontWeight: 800, color: '#55656F', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Organization</label>
                    <input style={inputStyle} placeholder="Company or institution" value={form.org} onChange={e => setForm(f => ({ ...f, org: e.target.value }))}
                      onFocus={e => { e.target.style.borderColor = '#5E8A8C'; e.target.style.boxShadow = '0 0 0 3px rgba(94,138,140,0.12)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(94,138,140,0.2)'; e.target.style.boxShadow = 'none' }} />
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.75rem', fontWeight: 800, color: '#55656F', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Partnership Tier</label>
                  <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.tier} onChange={e => setForm(f => ({ ...f, tier: e.target.value }))}
                    onFocus={e => { e.target.style.borderColor = '#5E8A8C'; e.target.style.boxShadow = '0 0 0 3px rgba(94,138,140,0.12)' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(94,138,140,0.2)'; e.target.style.boxShadow = 'none' }}>
                    <option value="">Select a tier...</option>
                    <option value="seed">Seed — $500</option>
                    <option value="pioneer">Pioneer — $2,500</option>
                    <option value="vanguard">Vanguard — $10,000+</option>
                    <option value="custom">Custom / Institutional</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.75rem', fontWeight: 800, color: '#55656F', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Message</label>
                  <textarea rows={4} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Tell us about your organization and partnership goals..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    onFocus={e => { e.target.style.borderColor = '#5E8A8C'; e.target.style.boxShadow = '0 0 0 3px rgba(94,138,140,0.12)' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(94,138,140,0.2)'; e.target.style.boxShadow = 'none' }} />
                </div>
                <button type="submit"
                  style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg, #5E8A8C, #4A6B7C)', padding: '1rem 2rem', borderRadius: 50, border: 'none', cursor: 'pointer', letterSpacing: '0.03em', boxShadow: '0 6px 20px rgba(94,138,140,0.35)', transition: 'opacity 0.2s, transform 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
                >Become a Sponsor</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

import { IconTarget, IconStar, IconHeart } from '../app/Icons'

export default function Story() {
  return (
    <div style={{ background: '#fff' }}>
      <section style={{ padding: '5rem 2rem 7rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(58,172,240,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#EEF6FF', border: '1px solid rgba(58,172,240,0.25)', borderRadius: 50, padding: '0.35rem 1rem 0.35rem 0.6rem', marginBottom: '2rem' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#3AACF0' }} />
            <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', fontWeight: 700, color: '#2880C0' }}>02 — Our Story</span>
          </div>

          <h2 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 400, color: '#1A2B3C', lineHeight: 1.15, margin: '0 0 3.5rem', letterSpacing: '-0.01em' }}>
            Why NAA, Why Now,{' '}
            <span style={{ color: '#3AACF0', fontStyle: 'italic' }}>Why North Carolina</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="story-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                "Neurotechnology is advancing at an extraordinary pace — BCI devices, neural prosthetics, and neuroimaging tools are transforming what's possible for patients with ALS, spinal injuries, epilepsy, and dozens of other conditions. But the students who might lead this field, and the patients who stand to benefit most, are too often shut out.",
                'NAA was founded in Raleigh because North Carolina sits at a unique intersection: a world-class research university ecosystem, a growing medtech corridor, and communities that have historically lacked access to cutting-edge medical innovation.',
                "We believe the solution is a connected hub — one that links researchers, funders, clinicians, and students in service of a shared goal: making the neurological breakthroughs of today the standard of care for everyone, tomorrow.",
              ].map((text, i) => (
                <p key={i} style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1rem', fontWeight: 400, color: '#4A6070', lineHeight: 1.85, margin: 0 }}>{text}</p>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                {
                  label: 'Mission', Icon: IconTarget, iconColor: '#3AACF0',
                  bg: 'linear-gradient(135deg, #EEF6FF, #DCF0FF)',
                  border: 'rgba(58,172,240,0.25)', labelColor: '#2880C0',
                  text: '"Our mission at NAA is to connect the neuroscience community — students, researchers, clinicians, and funders — around shared resources, shared purpose, and shared commitment to equitable access."',
                  serif: true,
                },
                {
                  label: 'Vision', Icon: IconStar, iconColor: '#5B8DEF',
                  bg: 'linear-gradient(135deg, #F0F8FF, #E8F4FF)',
                  border: 'rgba(91,141,239,0.25)', labelColor: '#3A60CF',
                  text: 'A future where neurological condition is not a barrier to participation in society — and where the next generation of neurotech leaders reflects the full diversity of the patients they serve.',
                  serif: false,
                },
                {
                  label: 'Why Access Matters', Icon: IconHeart, iconColor: '#3AACF0',
                  bg: 'linear-gradient(135deg, #F7FBFF, #EEF6FF)',
                  border: 'rgba(58,172,240,0.15)', labelColor: '#4A6070',
                  text: 'Over 1 billion people worldwide live with a neurological disorder. The tools to help them exist — but remain locked behind cost barriers, geographic gaps, and institutional silos. Access is the intervention.',
                  serif: false,
                },
              ].map((card, i) => (
                <div key={i} style={{ padding: '1.75rem 2rem', background: card.bg, border: `1.5px solid ${card.border}`, borderRadius: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: 28, height: 28, borderRadius: 9, background: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <card.Icon size={15} color={card.iconColor} />
                    </div>
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 800, color: card.labelColor, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{card.label}</div>
                  </div>
                  <p style={{ fontFamily: card.serif ? 'DM Serif Display, Georgia, serif' : 'Nunito, sans-serif', fontSize: card.serif ? '1.05rem' : '0.92rem', color: '#1A2B3C', lineHeight: 1.7, margin: 0, fontStyle: card.serif ? 'italic' : 'normal', fontWeight: 400 }}>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

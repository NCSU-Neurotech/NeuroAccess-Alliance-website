const boardMembers = [
  {
    name: 'Andrew Oliver',
    title: 'Board Member',
    credentials: '',
    affiliation: 'NeuroAccess Alliance',
    expertise: ['Nonprofit strategy', 'Neuroscience advocacy', 'Community outreach'],
    bio: 'Andrew co-founded the NeuroAccess Alliance with a vision of making neurotechnology accessible to students and patients across North Carolina. His work bridges the gap between research institutions and underserved communities.',
    initials: 'AO',
    grad: 'linear-gradient(135deg, #3AACF0, #5B8DEF)',
    shadow: 'rgba(58,172,240,0.3)',
  },
  {
    name: 'Emery Meyer',
    title: 'Caldwell Fellow',
    credentials: 'Board Member',
    affiliation: 'NC State University',
    expertise: ['Leadership development', 'Interdisciplinary collaboration', 'Higher education'],
    bio: "Emery brings exceptional leadership experience through the Caldwell Fellowship, NC State's most selective leadership program. Their work at NAA focuses on building sustainable institutional partnerships.",
    initials: 'EM',
    grad: 'linear-gradient(135deg, #5B8DEF, #7B6FE8)',
    shadow: 'rgba(91,141,239,0.3)',
  },
  {
    name: 'Sam Wychowski',
    title: 'Partner',
    credentials: 'Board Member',
    affiliation: '',
    expertise: ['Strategic partnerships', 'Organizational development', 'Funding strategy'],
    bio: "Sam serves as a key strategic partner to the NeuroAccess Alliance, advising on organizational structure and partnership development. Their experience in building mission-driven organizations informs NAA's growth strategy.",
    initials: 'SW',
    grad: 'linear-gradient(135deg, #3AACF0, #50CDD6)',
    shadow: 'rgba(58,172,240,0.3)',
  },
]

export default function Board() {
  return (
    <div style={{ background: '#fff' }}>
      <section style={{ padding: '5rem 2rem 7rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', left: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,141,239,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#EEF6FF', border: '1px solid rgba(58,172,240,0.25)', borderRadius: 50, padding: '0.35rem 1rem 0.35rem 0.6rem', marginBottom: '2rem' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#3AACF0' }} />
            <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', fontWeight: 700, color: '#2880C0' }}>03 — Board & Leadership</span>
          </div>

          <h2 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 400, color: '#1A2B3C', lineHeight: 1.15, margin: '0 0 1rem' }}>
            Led by Practitioners,{' '}
            <span style={{ color: '#3AACF0', fontStyle: 'italic' }}>Driven by Purpose</span>
          </h2>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1rem', fontWeight: 400, color: '#4A6070', lineHeight: 1.8, margin: '0 0 4rem', maxWidth: 520 }}>
            Our board combines academic rigor, leadership training, and strategic expertise to govern NAA with transparency and genuine care for the communities we serve.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="board-grid">
            {boardMembers.map((m, i) => (
              <div key={i} style={{ background: '#fff', border: '1.5px solid rgba(58,172,240,0.12)', borderRadius: 24, padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', boxShadow: '0 4px 20px rgba(58,172,240,0.06)', transition: 'transform 0.25s, box-shadow 0.25s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 36px ${m.shadow}` }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(58,172,240,0.06)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: 60, height: 60, borderRadius: '50%', background: m.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 6px 16px ${m.shadow}` }}>
                    <span style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '1.2rem', fontWeight: 400, color: '#fff' }}>{m.initials}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '1.2rem', color: '#1A2B3C', lineHeight: 1.2 }}>{m.name}</div>
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.8rem', fontWeight: 700, color: '#3AACF0', marginTop: 2 }}>
                      {m.title}{m.credentials ? ` · ${m.credentials}` : ''}
                    </div>
                    {m.affiliation && <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', color: '#7A9AB0', marginTop: 2 }}>{m.affiliation}</div>}
                  </div>
                </div>

                <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.88rem', fontWeight: 400, color: '#4A6070', lineHeight: 1.75, margin: 0 }}>{m.bio}</p>

                <div style={{ paddingTop: '1rem', borderTop: '1.5px solid #EEF6FF' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {m.expertise.map((tag, j) => (
                      <span key={j} style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', fontWeight: 700, color: '#3AACF0', background: '#EEF6FF', padding: '0.25rem 0.7rem', borderRadius: 50, border: '1px solid rgba(58,172,240,0.2)' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

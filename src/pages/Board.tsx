import { IconLinkedIn } from '../app/Icons'
import andrewPhoto from '../assets/board/andrew.jpg'
import emeryPhoto from '../assets/board/emery.jpg'
import samPhoto from '../assets/board/sam.jpg'
import asaPhoto from '../assets/board/asa.jpg'

const boardMembers = [
  {
    name: 'Andrew Oliver',
    linkedin: 'https://www.linkedin.com/in/andrew-oliver-951666271/',
    title: 'President',
    credentials: 'Co-Founder',
    affiliation: 'NC State University',
    photo: andrewPhoto,
    bio: "Andrew is a Junior at NC State University pursuing a degree in integrative physiology and neurobiology. He is actively working as a lab assistant in the Neuromuscular Rehabilitation Engineering Laboratory (NREL), and serves as the scholarship chair for his fraternity. As an executive officer for both the Neurotech and Neuroscience Clubs at NC State, he is dedicated to expanding opportunities for the local Neuroscience Community. After noticing a gap in North Carolina's neuroscience initiatives, he co-founded the NeuroAccess Alliance in June of 2026.",
    initials: 'AO',
    grad: 'linear-gradient(135deg, #5E8A8C, #4A6B7C)',
    shadow: 'rgba(94,138,140,0.3)',
  },
  {
    name: 'Emery Meyer',
    linkedin: 'https://www.linkedin.com/in/emery-meyer-50bb81273',
    title: 'Treasurer',
    credentials: 'Co-Founder',
    affiliation: 'NC State University',
    photo: emeryPhoto,
    bio: "Emery is a Senior at NC State pursuing a degree in Molecular and Structural Biochemistry and a Caldwell Fellow. He conducted research in both the Goller Lab and the Mishra Lab, focused on chemical neuroscience. With two years of research experience, Emery has been dedicated to expanding scientific opportunity in neuroscience throughout his time at NC State. That dedication led him to build a visual reconstruction pipeline for neural decoding, as well as a functional head movement cursor for people with limited mobility, and to co-found Neurotech at NCSU in August 2025 and NeuroAccess Alliance in June 2026.",
    initials: 'EM',
    grad: 'linear-gradient(135deg, #4A6B7C, #5D6B8A)',
    shadow: 'rgba(74,107,124,0.3)',
  },
  {
    name: 'Sam Wychowski',
    linkedin: 'https://www.linkedin.com/in/samuel-wychowski-08b374392/',
    title: 'Secretary',
    credentials: 'Founding Member',
    affiliation: 'NC State University',
    photo: samPhoto,
    bio: "Samuel is currently a Sophomore at NC State pursuing a bachelor's degree in human biology. He is currently volunteering as a member of NC State athletics nutrition and is conducting sports science research with NC State faculty over the course of the 2026 Fall semester. Sam serves as one of the founding members of the NeuroAccess Alliance and wants to help it grow as a major force in Neuroscience technology, research, and aid right in the heart of North Carolina. He sees his involvement in the NeuroAccess Alliance as a way to continue the push to advance neuroscience innovation while also fostering the betterment of the human race.",
    initials: 'SW',
    grad: 'linear-gradient(135deg, #5E8A8C, #6E9B9E)',
    shadow: 'rgba(94,138,140,0.3)',
  },
  {
    name: 'Asa Beale',
    linkedin: 'https://www.linkedin.com/in/asa-beale-416aa332b/',
    title: 'Board Member',
    credentials: 'Ph.D. Student',
    affiliation: 'NC State University',
    photo: asaPhoto,
    bio: "Asa Beale is a Ph.D. student in Industrial-Organizational Psychology at NC State University, where he earned his B.A. in Psychology with a minor in Business Administration. He has conducted research in NC State's Psychometrics Lab, developing a keen eye for research design and dissemination. As a former member of NC State's Neuroscience Club, Asa developed a strong interest in neuroscience research. He hopes to advance The NeuroAccess Alliance's mission by reviewing promising neuroscience research in order to connect it with the funding needed to make it possible.",
    initials: 'AB',
    grad: 'linear-gradient(135deg, #6E9B9E, #5E8A8C)',
    shadow: 'rgba(110,155,158,0.3)',
  },
]

export default function Board() {
  return (
    <div style={{ background: '#fff' }}>
      <section style={{ padding: '5rem 2rem 7rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', left: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,107,124,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F4F1E9', border: '1px solid rgba(94,138,140,0.25)', borderRadius: 50, padding: '0.35rem 1rem 0.35rem 0.6rem', marginBottom: '2rem' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#5E8A8C' }} />
            <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', fontWeight: 700, color: '#48696C' }}>03 — Board & Leadership</span>
          </div>

          <h2 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 400, color: '#2C3A47', lineHeight: 1.15, margin: '0 0 1rem' }}>
            Led by Practitioners,{' '}
            <span style={{ color: '#5E8A8C', fontStyle: 'italic' }}>Driven by Purpose</span>
          </h2>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1rem', fontWeight: 400, color: '#55656F', lineHeight: 1.8, margin: '0 0 4rem', maxWidth: 520 }}>
            Our board combines academic rigor, leadership training, and strategic expertise to govern NAA with transparency and genuine care for the communities we serve.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '1.5rem' }} className="board-grid">
            {boardMembers.map((m, i) => (
              <div key={i} style={{ background: '#fff', border: '1.5px solid rgba(94,138,140,0.12)', borderRadius: 24, padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', boxShadow: '0 4px 20px rgba(94,138,140,0.06)', transition: 'transform 0.25s, box-shadow 0.25s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 36px ${m.shadow}` }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(94,138,140,0.06)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem' }}>
                  {m.photo ? (
                    <img src={m.photo} alt={m.name}
                      style={{ width: 76, height: 76, borderRadius: '50%', objectFit: 'cover', flexShrink: 0, boxShadow: `0 6px 16px ${m.shadow}`, border: '3px solid #fff', outline: `2px solid ${m.shadow}` }} />
                  ) : (
                    <div style={{ width: 76, height: 76, borderRadius: '50%', background: m.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 6px 16px ${m.shadow}` }}>
                      <span style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '1.4rem', fontWeight: 400, color: '#fff' }}>{m.initials}</span>
                    </div>
                  )}
                  <div>
                    <div style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '1.2rem', color: '#2C3A47', lineHeight: 1.2 }}>{m.name}</div>
                    <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.8rem', fontWeight: 700, color: '#5E8A8C', marginTop: 2 }}>
                      {m.title}{m.credentials ? ` · ${m.credentials}` : ''}
                    </div>
                    {m.affiliation && <div style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', color: '#8B9A9C', marginTop: 2 }}>{m.affiliation}</div>}
                  </div>
                </div>

                <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.88rem', fontWeight: 400, color: '#55656F', lineHeight: 1.75, margin: 0 }}>{m.bio}</p>

                {m.linkedin && (
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'Nunito, sans-serif', fontSize: '0.82rem', fontWeight: 700, color: '#5E8A8C', textDecoration: 'none', marginTop: 'auto', paddingTop: '0.25rem', width: 'fit-content', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    <IconLinkedIn size={15} color="#5E8A8C" />
                    Connect on LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

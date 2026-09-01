import { Outlet } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'

const responsiveStyles = `
  @media (max-width: 1000px) {
    .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
    .story-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
    .board-grid { grid-template-columns: 1fr !important; }
    .programs-grid { grid-template-columns: 1fr !important; }
    .tiers-grid { grid-template-columns: 1fr !important; }
    .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
    .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
    .partner-row { grid-template-columns: 1fr !important; }
    .hidden-mobile { display: none !important; }
    .show-mobile { display: block !important; }
  }
  @media (min-width: 1001px) {
    .show-mobile { display: none !important; }
  }
`

export default function Root() {
  return (
    <>
      <style>{responsiveStyles}</style>
      <Nav />
      <main style={{ paddingTop: 68, minHeight: 'calc(100vh - 68px)', background: '#fff' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

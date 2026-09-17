import neurotechLogo from '../assets/partners/neurotech.png'
import neuroscienceClubLogo from '../assets/partners/neuroscience-club.png'
import synaptiveLogo from '../assets/partners/synaptive.png'

// Partners and sponsors shown on /partners, each with its own page at
// /partners/<slug>. Add an entry here to put another organization on the site.
// `blurb` is intentionally empty: fill it in and the detail page picks it up.
export type Partner = {
  slug: string
  name: string
  logo: string
  blurb: string
}

export const partners: Partner[] = [
  { slug: 'neurotech-nc-state', name: 'Neurotech at NC State', logo: neurotechLogo, blurb: '' },
  { slug: 'neuroscience-club-nc-state', name: 'Neuroscience Club at NC State', logo: neuroscienceClubLogo, blurb: '' },
  { slug: 'synaptive', name: 'Synaptive', logo: synaptiveLogo, blurb: '' },
]

export function findPartner(slug: string | undefined): Partner | undefined {
  return partners.find(p => p.slug === slug)
}

// Public governance documents, listed on /documents.
//
// To publish one: drop the PDF in public/documents/ and put its path in
// `file` (paths are served from the site root, e.g. '/documents/name.pdf').
// An entry with an empty `file` is simply not shown on the page yet.
export type OrgDocument = {
  title: string
  note: string
  file: string
}

// The Articles of Incorporation and the IRS CP 575 notice are deliberately not
// posted here: both carry board members' home addresses. The Articles are on
// public file with the NC Secretary of State for anyone who needs them, and the
// EIN is stated in text on the page instead.
export const orgDocuments: OrgDocument[] = [
  {
    title: 'Bylaws',
    note: 'Governing bylaws of the NeuroAccess Alliance.',
    file: '/documents/neuroaccess-alliance-bylaws.pdf',
  },
]

// Shown as plain text on the documents page.
export const orgFacts = [
  { label: 'EIN', value: '42-2695701' },
  { label: 'Incorporated', value: 'North Carolina, June 16, 2026' },
  { label: 'Federal status', value: '501(c)(3) tax-exempt organization' },
]

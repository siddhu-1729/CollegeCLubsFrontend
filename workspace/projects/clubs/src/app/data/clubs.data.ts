export interface ClubEvent {
  id: string;
  title: string;
  date: string;
  venue: string;
  description: string;
}

export interface ClubInfo {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  color: string;
  contacts: {
    email: string;
    phone: string;
  };
  credentials: {
    username: string;
    password: string;
  };
  events: ClubEvent[];
}

export const CLUBS: ClubInfo[] = [
  {
    id: 'codingclub',
    name: 'Coding Club',
    shortName: 'CC',
    tagline: 'Build. Break. Learn. Repeat.',
    description: 'Community for coding practice, hackathons, open-source, and technical mentorship.',
    color: '#0ea5e9',
    contacts: { email: 'codingclub@srkr.edu', phone: '+91 90000 10001' },
    credentials: { username: 'codingclub-admin', password: 'SRKR@cc' },
    events: [
      { id: 'cc-1', title: 'HackOverflow Sprint', date: '2026-03-20', venue: 'CSE Seminar Hall', description: '24-hour product and coding sprint for first to final year students.' },
      { id: 'cc-2', title: 'DSA Drill Session', date: '2026-03-28', venue: 'Lab 4', description: 'Mock interview and problem-solving workshop.' }
    ]
  },
  {
    id: 'csi',
    name: 'CSI',
    shortName: 'CSI',
    tagline: 'Technology with purpose.',
    description: 'Computer Society of India student chapter focusing on practical tech learning.',
    color: '#14b8a6',
    contacts: { email: 'csi@srkr.edu', phone: '+91 90000 10002' },
    credentials: { username: 'csi-admin', password: 'SRKR@csi' },
    events: [
      { id: 'csi-1', title: 'TechFleet 2026', date: '2026-04-03', venue: 'IT Block Auditorium', description: 'National level symposium with workshops and contests.' }
    ]
  },
  {
    id: 'ace',
    name: 'ACE',
    shortName: 'ACE',
    tagline: 'Engineer tomorrow.',
    description: 'Association of Computer Engineers for innovation, project culture and mentorship.',
    color: '#f59e0b',
    contacts: { email: 'ace@srkr.edu', phone: '+91 90000 10003' },
    credentials: { username: 'ace-admin', password: 'SRKR@ace' },
    events: [
      { id: 'ace-1', title: 'Prajwalan Kickoff', date: '2026-04-10', venue: 'Main Auditorium', description: 'Announcement and registration drive for annual hackathon.' }
    ]
  },
  {
    id: 'lolo',
    name: 'LoLo Club',
    shortName: 'LOLO',
    tagline: 'Learn beyond books.',
    description: 'Club for creativity, communication and collaborative campus activities.',
    color: '#22c55e',
    contacts: { email: 'lolo@srkr.edu', phone: '+91 90000 10004' },
    credentials: { username: 'lolo-admin', password: 'SRKR@lolo' },
    events: [
      { id: 'lolo-1', title: 'Campus Culture Day', date: '2026-03-23', venue: 'Open Air Theatre', description: 'Interactive activities and performance showcase.' }
    ]
  },
  {
    id: 'iste',
    name: 'ISTE',
    shortName: 'ISTE',
    tagline: 'Professional growth for engineers.',
    description: 'Indian Society for Technical Education student chapter activities.',
    color: '#f97316',
    contacts: { email: 'iste@srkr.edu', phone: '+91 90000 10005' },
    credentials: { username: 'iste-admin', password: 'SRKR@iste' },
    events: [
      { id: 'iste-1', title: 'NIPUNA Orientation', date: '2026-03-18', venue: 'Mechanical Block Hall', description: 'Overview session for technical and managerial competitions.' }
    ]
  },
  {
    id: 'iete',
    name: 'IETE',
    shortName: 'IETE',
    tagline: 'Electronics and communication excellence.',
    description: 'Workshops and events around electronics, communication and embedded systems.',
    color: '#ef4444',
    contacts: { email: 'iete@srkr.edu', phone: '+91 90000 10006' },
    credentials: { username: 'iete-admin', password: 'SRKR@iete' },
    events: [
      { id: 'iete-1', title: 'Embedded Bootcamp', date: '2026-03-29', venue: 'ECE Lab', description: 'Hands-on bootcamp on microcontrollers and IoT basics.' }
    ]
  },
  {
    id: 'iei',
    name: 'IEI',
    shortName: 'IEI',
    tagline: 'Institutional engineering community.',
    description: 'Industry aligned engineering sessions, talks and networking events.',
    color: '#8b5cf6',
    contacts: { email: 'iei@srkr.edu', phone: '+91 90000 10007' },
    credentials: { username: 'iei-admin', password: 'SRKR@iei' },
    events: [
      { id: 'iei-1', title: 'Industry Connect Talk', date: '2026-04-01', venue: 'EEE Seminar Hall', description: 'Talk by industry mentors on current engineering trends.' }
    ]
  },
  {
    id: 'ame',
    name: 'AME',
    shortName: 'AME',
    tagline: 'Mechanical minds in action.',
    description: 'Association of Mechanical Engineers for design, prototyping and symposiums.',
    color: '#06b6d4',
    contacts: { email: 'ame@srkr.edu', phone: '+91 90000 10008' },
    credentials: { username: 'ame-admin', password: 'SRKR@ame' },
    events: [
      { id: 'ame-1', title: 'Sanketa Prelims', date: '2026-03-27', venue: 'Mechanical CAD Lab', description: 'Preliminary rounds for national-level symposium participation.' }
    ]
  },
  {
    id: 'amc',
    name: 'Automotive Club',
    shortName: 'AMC',
    tagline: 'Design. Fabricate. Race.',
    description: 'Hands-on club focused on vehicle design, fabrication and race readiness.',
    color: '#eab308',
    contacts: { email: 'automotive@srkr.edu', phone: '+91 90000 10009' },
    credentials: { username: 'amc-admin', password: 'SRKR@amc' },
    events: [
      { id: 'amc-1', title: 'Go-Kart Build Review', date: '2026-04-05', venue: 'Workshop Yard', description: 'Mid-build review for kart chassis and safety systems.' }
    ]
  },
  {
    id: 'ieee',
    name: 'IEEE',
    shortName: 'IEEE',
    tagline: 'Advance technology for humanity.',
    description: 'Global professional chapter activities in innovation and standards.',
    color: '#3b82f6',
    contacts: { email: 'ieee@srkr.edu', phone: '+91 90000 10010' },
    credentials: { username: 'ieee-admin', password: 'SRKR@ieee' },
    events: [
      { id: 'ieee-1', title: 'Circuit Design Challenge', date: '2026-04-07', venue: 'EEE Labs', description: 'Team-based analog and digital circuit design challenge.' }
    ]
  },
  {
    id: 'paiecell',
    name: 'PAIE Cell',
    shortName: 'PAIE',
    tagline: 'Placement, aptitude and innovation.',
    description: 'Career preparation, soft skills and campus readiness initiatives.',
    color: '#ec4899',
    contacts: { email: 'paie@srkr.edu', phone: '+91 90000 10011' },
    credentials: { username: 'paiecell-admin', password: 'SRKR@paie' },
    events: [
      { id: 'paie-1', title: 'Aptitude Masterclass', date: '2026-03-22', venue: 'Placement Hall', description: 'Aptitude and interview training for pre-final year students.' }
    ]
  },
  {
    id: 'cine',
    name: 'Cine Club',
    shortName: 'CINE',
    tagline: 'Cinema, storytelling and craft.',
    description: 'Film appreciation, short-film production and media creativity.',
    color: '#a855f7',
    contacts: { email: 'cineclub@srkr.edu', phone: '+91 90000 10012' },
    credentials: { username: 'cine-admin', password: 'SRKR@cine' },
    events: [
      { id: 'cine-1', title: 'Short Film Showcase', date: '2026-04-12', venue: 'Mini Auditorium', description: 'Screening and jury feedback for student short films.' }
    ]
  }
];

export const CLUB_MAP: Record<string, ClubInfo> = Object.fromEntries(CLUBS.map((club) => [club.id, club]));

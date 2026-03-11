export interface ClubEvent {
  id: string;
  title: string;
  date: string;
  venue: string;
  description: string;
}

export interface ClubEventImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ClubAchievement {
  id: string;
  title: string;
  year: string;
  category: string;
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
  eventGallery: ClubEventImage[];
  achievements: ClubAchievement[];
}

const ASSET_POOL = {
  hackathon: 'assets/Hackathon.jpg',
  overflow: 'assets/Hackoverflow.png',
  campus: 'assets/image-1.jpg',
  team: 'assets/team.jpg',
  csi: 'assets/csilogo.jpg',
  auto: 'assets/gokarting.jpg',
  logo: 'assets/logo.jpg'
} as const;

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
    ],
    eventGallery: [
      { src: ASSET_POOL.overflow, alt: 'Coding Club hackathon poster', caption: 'HackOverflow sprint night and product demos.' },
      { src: ASSET_POOL.hackathon, alt: 'Students participating in a coding event', caption: 'Rapid coding rounds, mentors, and debugging bays.' },
      { src: ASSET_POOL.team, alt: 'Student team collaborating', caption: 'Peer learning circles and open-source contribution teams.' }
    ],
    achievements: [
      { id: 'cca-1', title: 'National Hackathon Finalists', year: '2025', category: 'Achievement', description: 'Club teams reached final rounds in multiple inter-college hackathons.' }
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
    ],
    eventGallery: [
      { src: ASSET_POOL.csi, alt: 'CSI club branding', caption: 'TechFleet symposium branding and chapter identity.' },
      { src: ASSET_POOL.team, alt: 'CSI student team at an event', caption: 'Student chapter volunteers coordinating technical sessions.' },
      { src: ASSET_POOL.campus, alt: 'Campus event space', caption: 'Forum space for talks, coding contests, and networking.' }
    ],
    achievements: [
      { id: 'csia-1', title: 'Campus Tech Symposium Host', year: '2025', category: 'Performance', description: 'Successfully coordinated a high-attendance student technology symposium.' }
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
    ],
    eventGallery: [
      { src: ASSET_POOL.hackathon, alt: 'ACE hackathon crowd', caption: 'Annual hackathon launch and student idea pitches.' },
      { src: ASSET_POOL.team, alt: 'ACE mentors guiding students', caption: 'Mentorship pods for projects, prototypes, and reviews.' },
      { src: ASSET_POOL.logo, alt: 'Engineering club visual', caption: 'Technical chapter posters and event staging.' }
    ],
    achievements: [
      { id: 'acea-1', title: 'Mentorship Track Launch', year: '2025', category: 'Achievement', description: 'Started a project mentorship cycle connecting juniors with senior developers.' }
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
    ],
    eventGallery: [
      { src: ASSET_POOL.campus, alt: 'Campus culture event area', caption: 'Open-air events, student interactions, and expressive showcases.' },
      { src: ASSET_POOL.team, alt: 'Students working together', caption: 'Creative team exercises and communication workshops.' },
      { src: ASSET_POOL.logo, alt: 'Club creative poster', caption: 'Club-led activity walls and collaborative pop-up spaces.' }
    ],
    achievements: [
      { id: 'loloa-1', title: 'Cultural Showcase Winners', year: '2025', category: 'Performance', description: 'Club performances received top recognition during the annual cultural fest.' }
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
    ],
    eventGallery: [
      { src: ASSET_POOL.campus, alt: 'ISTE orientation setup', caption: 'Orientation sessions for technical, design, and leadership tracks.' },
      { src: ASSET_POOL.team, alt: 'Students in a professional workshop', caption: 'Professional development groups and technical chapter activities.' },
      { src: ASSET_POOL.logo, alt: 'Engineering professional chapter display', caption: 'Project exhibitions and chapter-led competitions.' }
    ],
    achievements: [
      { id: 'istea-1', title: 'Technical Chapter Excellence', year: '2025', category: 'Achievement', description: 'Expanded participation across workshops and engineering contests.' }
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
    ],
    eventGallery: [
      { src: ASSET_POOL.logo, alt: 'Electronics event poster', caption: 'Embedded systems showcases and electronics workshops.' },
      { src: ASSET_POOL.team, alt: 'Electronics students collaborating', caption: 'Hands-on circuit labs and mentor-guided build sessions.' },
      { src: ASSET_POOL.campus, alt: 'Technical event venue', caption: 'Demo counters for communication and IoT prototypes.' }
    ],
    achievements: [
      { id: 'ietea-1', title: 'Embedded Systems Demo Day', year: '2025', category: 'Performance', description: 'Student teams showcased working embedded prototypes to faculty and peers.' }
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
    ],
    eventGallery: [
      { src: ASSET_POOL.team, alt: 'Industry interaction session', caption: 'Guest speakers, alumni networking, and idea exchange.' },
      { src: ASSET_POOL.campus, alt: 'Seminar venue for engineering talk', caption: 'Industry trend sessions and engineering leadership panels.' },
      { src: ASSET_POOL.logo, alt: 'Engineering institute chapter visual', caption: 'Professional networking and expert lecture events.' }
    ],
    achievements: [
      { id: 'ieia-1', title: 'Industry Interaction Series', year: '2025', category: 'Achievement', description: 'Completed a strong lineup of alumni and industry expert sessions.' }
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
    ],
    eventGallery: [
      { src: ASSET_POOL.team, alt: 'Mechanical engineering team review', caption: 'Design reviews, CAD sessions, and student build critiques.' },
      { src: ASSET_POOL.campus, alt: 'Mechanical department event space', caption: 'Prototype displays and symposium pre-selection rounds.' },
      { src: ASSET_POOL.logo, alt: 'Mechanical association event poster', caption: 'Club workshops on fabrication, design, and analysis.' }
    ],
    achievements: [
      { id: 'amea-1', title: 'Design Challenge Shortlist', year: '2025', category: 'Achievement', description: 'Mechanical project teams qualified for external design challenge rounds.' }
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
    ],
    eventGallery: [
      { src: ASSET_POOL.auto, alt: 'Automotive club go-kart', caption: 'Workshop review of chassis, steering, and race systems.' },
      { src: ASSET_POOL.team, alt: 'Automotive team collaborating', caption: 'Build crews working on fabrication, wiring, and safety checks.' },
      { src: ASSET_POOL.campus, alt: 'Vehicle demo area', caption: 'Prototype rollout space and performance test briefings.' }
    ],
    achievements: [
      { id: 'amca-1', title: 'Go-Kart Prototype Rollout', year: '2025', category: 'Performance', description: 'Completed a successful live demonstration of the student-built kart.' }
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
    ],
    eventGallery: [
      { src: ASSET_POOL.logo, alt: 'IEEE event backdrop', caption: 'Technology showcases, circuit demos, and chapter briefings.' },
      { src: ASSET_POOL.team, alt: 'IEEE student volunteers', caption: 'Volunteers coordinating engineering challenges and reviews.' },
      { src: ASSET_POOL.campus, alt: 'Engineering exhibition area', caption: 'Project stalls and applied engineering demonstrations.' }
    ],
    achievements: [
      { id: 'ieeea-1', title: 'Innovation Project Showcase', year: '2025', category: 'Achievement', description: 'IEEE members presented applied engineering projects at chapter events.' }
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
    ],
    eventGallery: [
      { src: ASSET_POOL.campus, alt: 'Placement readiness session venue', caption: 'Mock interview bays, aptitude training, and resume clinics.' },
      { src: ASSET_POOL.team, alt: 'Students during career workshop', caption: 'Career prep teams practicing group discussions and interviews.' },
      { src: ASSET_POOL.logo, alt: 'Career development event poster', caption: 'Campus readiness drives and innovation-focused workshops.' }
    ],
    achievements: [
      { id: 'paiea-1', title: 'Placement Readiness Drive', year: '2025', category: 'Performance', description: 'Delivered interview and aptitude support programs across multiple departments.' }
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
    ],
    eventGallery: [
      { src: ASSET_POOL.campus, alt: 'Cinema club screening setup', caption: 'Screening nights, student productions, and audience feedback.' },
      { src: ASSET_POOL.team, alt: 'Media team collaboration', caption: 'Shot planning, editing rooms, and storytelling workshops.' },
      { src: ASSET_POOL.logo, alt: 'Film club poster wall', caption: 'Festival visuals, jury sessions, and short-film showcases.' }
    ],
    achievements: [
      { id: 'cinea-1', title: 'Campus Short Film Awards', year: '2025', category: 'Achievement', description: 'Club productions and members earned recognition in student film contests.' }
    ]
  }
];

export const CLUB_MAP: Record<string, ClubInfo> = Object.fromEntries(CLUBS.map((club) => [club.id, club]));

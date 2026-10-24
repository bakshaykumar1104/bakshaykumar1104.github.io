/* ===============================================================
   BHANDARI AKSHAY KUMAR - IT PORTFOLIO
   Focus: IT Infrastructure Program Management, PMO,
   Project Governance, Technical Coordination, and Coding
   =============================================================== */


/* ---------------------------------------------------------------
   1. IDENTITY
   --------------------------------------------------------------- */

export const SITE = {
  titleLine1: 'AKSHAY',
  titleLine2: 'KUMAR',

  subtitle: 'IT Program Manager',

  metaTitle:
    'Bhandari Akshay Kumar - IT Infrastructure Program Manager',

  metaDescription:
    'Portfolio of Bhandari Akshay Kumar, a project and program management professional with six years of experience in governance, cross-functional delivery, requirements management, document control, issue tracking, and technical coordination.',

  quoteLine1: 'Turning complex programs',
  quoteLine2: 'into controlled delivery.',
  quoteAuthor: 'Akshay Kumar',

  tagline: [
    'Program Governance',
    'Cross-Functional Delivery',
    'IT Infrastructure'
  ],

  avatarLetter: 'A',

  // Decorative game-interface value, not a salary or financial claim.
  moneyTarget: 1000000
};


/* ---------------------------------------------------------------
   2. WEBSITE SCREENS
   --------------------------------------------------------------- */

export const SCREENS = [
  {
    id: 'hero',
    label: 'Start Portfolio',
    frame: '/frames/01-hero.png',
    objective: 'Explore an IT program<br>management journey',
    map: [22, 70],
    accent: '#36c5f0',
    accent2: '#ffb238',
    fallback: ['#07111f', '#12345a', '#1c6f8f'],
    counts: false
  },
  {
    id: 'about',
    label: 'Professional Profile',
    frame: '/frames/02-about.png',
    objective: 'Review the professional<br>profile and career direction',
    map: [30, 62],
    accent: '#56d6c9',
    accent2: '#ffbd59',
    fallback: ['#10222e', '#315765', '#7da89d'],
    counts: true
  },
  {
    id: 'skills',
    label: 'Core Capabilities',
    frame: '/frames/03-skills.png',
    objective: 'Inspect program and<br>technical capabilities',
    map: [46, 26],
    accent: '#7fb2d9',
    accent2: '#ffb238',
    fallback: ['#101823', '#2b3d52', '#5b7183'],
    counts: true
  },
  {
    id: 'projects',
    label: 'Project Portfolio',
    frame: '/frames/04-projects.png',
    objective: 'Review completed and<br>in-progress initiatives',
    map: [58, 40],
    accent: '#22c7b8',
    accent2: '#ff8c69',
    fallback: ['#073b4c', '#147d92', '#54c6b5'],
    counts: true
  },
  {
    id: 'experience',
    label: 'Experience',
    frame: '/frames/05-experience.png',
    objective: 'Trace six years of<br>delivery experience',
    map: [72, 54],
    accent: '#9b8cff',
    accent2: '#ffa83c',
    fallback: ['#171335', '#3d3c78', '#8275a8'],
    counts: true
  },
  {
    id: 'achievements',
    label: 'Delivery Highlights',
    frame: '/frames/06-achievements.png',
    objective: 'Inspect governance<br>and delivery strengths',
    map: [66, 78],
    accent: '#ff4f9a',
    accent2: '#24e0e0',
    fallback: ['#190d29', '#5f1d59', '#ad2f70'],
    counts: true
  },
  {
    id: 'services',
    label: 'Value Offered',
    frame: '/frames/07-services.png',
    objective: 'Review the value<br>offered to IT teams',
    map: [38, 84],
    accent: '#45c7e8',
    accent2: '#ff9566',
    fallback: ['#0b3551', '#247c9c', '#7cb9c8'],
    counts: true
  },
  {
    id: 'contact',
    label: 'Contact',
    frame: '/frames/08-contact.png',
    objective: 'Start a professional<br>conversation',
    map: [82, 34],
    accent: '#6ea8ff',
    accent2: '#ffb238',
    fallback: ['#05060f', '#141a2e', '#2e2438'],
    counts: true
  },
  {
    id: 'outro',
    label: 'Complete Review',
    frame: '/frames/09-outro.png',
    objective: 'Complete the<br>portfolio review',
    map: [88, 88],
    accent: '#ffa3bd',
    accent2: '#ffd9a8',
    fallback: ['#394b75', '#a46f89', '#e6aa92'],
    counts: false
  }
];


/* ---------------------------------------------------------------
   3. ABOUT
   --------------------------------------------------------------- */

export const ABOUT = {
  title: 'Professional',
  subtitle: 'Profile',

  intro: `I am a program and project management professional with six
          years of experience coordinating end-to-end delivery, managing
          requirements, documentation, and risks, and aligning stakeholders
          with technical teams. I am now applying this experience to IT
          infrastructure programs, PMO operations, and technology-led
          delivery environments.`,

  cards: [
    {
      icon: '◆',
      label: 'Experience',
      value: '6 years in end-to-end project delivery'
    },
    {
      icon: '◉',
      label: 'Location',
      value: 'Visakhapatnam, Andhra Pradesh'
    },
    {
      icon: '✦',
      label: 'Availability',
      value: 'Available for full-time, remote, hybrid, or relocation opportunities'
    }
  ],

  button: {
    text: 'View Experience',
    goesTo: 'experience'
  }
};


/* ---------------------------------------------------------------
   4. CORE CAPABILITIES

   These percentages are presentation values based on the resume.
   They are conservative proficiency indicators, not test scores.
   --------------------------------------------------------------- */

export const SKILLS = {
  title: 'Core',
  subtitle: 'Capabilities',

  list: [
    {
      name: 'Program & Project Management',
      value: 90
    },
    {
      name: 'Cross-Functional Delivery',
      value: 88
    },
    {
      name: 'Governance & Document Control',
      value: 90
    },
    {
      name: 'Requirements & Scope Control',
      value: 86
    },
    {
      name: 'Risk & Issue Management',
      value: 84
    },
    {
      name: 'Stakeholder Reporting',
      value: 86
    },
    {
      name: 'IT Tools & Coding Foundations',
      value: 68
    }
  ]
};


/* ---------------------------------------------------------------
   5. PROJECT PORTFOLIO

   Real projects supplied by Akshay. URLs can be added later when
   case studies or live demonstrations are available.
   --------------------------------------------------------------- */

export const PROJECTS = {
  title: 'Project',
  subtitle: 'Portfolio',

  list: [
    {
      icon: '◆',
      name: 'Real Estate Company Website',
      description:
        'Developing a real estate company website that presents property information, captures customer enquiries, and supports appointment scheduling.',
      featured: true,
      url: ''
    },
    {
      icon: '▲',
      name: 'Residential House Plans',
      description:
        'Designed residential house plans by translating client requirements, site constraints, and construction details into coordinated drawings.',
      featured: false,
      url: ''
    },
    {
      icon: '●',
      name: 'Appointment Booking Automation',
      description:
        'Created an automated appointment-booking workflow that captures requests, organizes available time slots, and reduces manual coordination.',
      featured: false,
      url: ''
    },
    {
      icon: '◇',
      name: 'Digital Marketing Automation',
      description:
        'Created a digital marketing workflow to organize campaign activities, lead follow-ups, and recurring communication tasks.',
      featured: false,
      url: ''
    }
  ],

  button: {
    text: 'View Capabilities',
    goesTo: 'skills'
  }
};


/* ---------------------------------------------------------------
   6. EXPERIENCE

   The resume contains one verified professional employer.
   The other entries describe verified education and current
   IT upskilling, rather than inventing additional employment.
   --------------------------------------------------------------- */

export const EXPERIENCE = {
  title: 'Professional',
  subtitle: 'Journey',

  timeline: [
    {
      period: '2023–PRESENT',
      role: 'Development Manager & Civil Engineer',
      description:
        'At Hanuman Housing Projects, I manage end-to-end programs covering requirements, planning, approvals, document governance, issue resolution, stakeholder reporting, resource coordination, execution, and handover.'
    },
    {
      period: '2019–2023',
      role: 'B.Tech in Civil Engineering',
      description:
        'At GITAM Deemed to be University, I developed a strong foundation in structured problem-solving, technical coordination, research, documentation, and project execution.'
    },
    {
      period: 'PROFESSIONAL DEVELOPMENT',
      role: 'IT Infrastructure & PMO Skills Development',
      description:
        'I am developing skills in advanced Excel, dashboard creation, basic SQL, ServiceNow fundamentals, and programming with C, Java, and Python for IT infrastructure and PMO environments.'
    }
  ]
};


/* ---------------------------------------------------------------
   7. DELIVERY HIGHLIGHTS
   --------------------------------------------------------------- */

export const ACHIEVEMENTS = {
  title: 'Delivery',
  subtitle: 'Highlights',

  list: [
    {
      icon: '★',
      name: 'End-to-End Ownership',
      description:
        'Managed projects from initial requirements and planning through execution, documentation, and final handover.'
    },
    {
      icon: '◈',
      name: 'Document Governance',
      description:
        'Maintained controlled drawings, revision histories, and a reliable repository of approved project records.'
    },
    {
      icon: '⚡',
      name: 'Cross-Team Alignment',
      description:
        'Aligned technical teams, clients, decision-makers, office personnel, and site staff around shared milestones.'
    },
    {
      icon: '◷',
      name: 'Process Improvement',
      description:
        'Standardized briefing, review, and handover practices to reduce ambiguity, missing information, and avoidable rework.'
    }
  ],

  button: {
    text: 'View Value Offered',
    goesTo: 'services'
  }
};


/* ---------------------------------------------------------------
   8. VALUE OFFERED
   --------------------------------------------------------------- */

export const SERVICES = {
  titleLine1: 'Value',
  titleLine2: 'I Bring',
  subtitle: 'For IT Teams',

  intro: `I bring structured program coordination, governance discipline,
          clear stakeholder communication, and a hands-on approach to
          technical learning to IT infrastructure and PMO teams. My
          strengths are most valuable in environments where stakeholders,
          controlled documentation, dependencies, risks, and delivery
          milestones must remain aligned.`,

  stats: [
    {
      number: '6',
      label: 'Years of Delivery Experience'
    },
    {
      number: '3',
      label: 'Programming Languages'
    },
    {
      number: '3',
      label: 'Spoken Languages'
    }
  ],

  button: {
    text: 'Discuss an Opportunity',
    goesTo: 'contact'
  }
};


/* ---------------------------------------------------------------
   9. CONTACT

   Public professional contact information supplied by Akshay.
   --------------------------------------------------------------- */

export const CONTACT = {
  title: 'Contact',
  subtitle: "Let's Connect",

  links: [
    {
      icon: '✉',
      label: 'Email',
      value: 'bakshaykumar1104@gmail.com',
      url: 'mailto:bakshaykumar1104@gmail.com'
    },
    {
      icon: '☎',
      label: 'Phone',
      value: '+91 91822 53245',
      url: 'tel:+919182253245'
    },
    {
      icon: 'in',
      label: 'LinkedIn',
      value: '/in/akshay1104',
      url: 'https://www.linkedin.com/in/akshay1104/'
    },
    {
      icon: '◉',
      label: 'Location',
      value: 'Visakhapatnam, Andhra Pradesh',
      url: ''
    }
  ],

  button: {
    text: 'Complete Review',
    goesTo: 'outro'
  }
};


/* ---------------------------------------------------------------
   10. CLOSING SCREEN
   --------------------------------------------------------------- */

export const OUTRO = {
  kicker: 'Thank you for reviewing my portfolio',
  titleLine1: 'Ready',
  titleLine2: 'To Deliver',
  subtitle: 'Open to IT infrastructure and program management opportunities',

  button: {
    text: '⌂ Return to Portfolio',
    goesTo: 'hero'
  }
};


/* ---------------------------------------------------------------
   11. LOADOUT WHEEL

   This appears when the visitor presses Tab.
   --------------------------------------------------------------- */

export const LOADOUT = {
  hubTitle: 'Capability',
  hubSubtitle: 'Loadout',

  items: [
    {
      name: 'Program Management',
      role: 'Delivery'
    },
    {
      name: 'Project Governance',
      role: 'Control'
    },
    {
      name: 'Excel',
      role: 'Reporting'
    },
    {
      name: 'SQL',
      role: 'Foundational'
    },
    {
      name: 'ServiceNow',
      role: 'Fundamentals'
    },
    {
      name: 'Python',
      role: 'Coding'
    },
    {
      name: 'Java & C',
      role: 'Coding'
    },
    {
      name: 'AutoCAD',
      role: 'Technical'
    }
  ]
};


/* ---------------------------------------------------------------
   12. ADVANCED SETTINGS
   --------------------------------------------------------------- */

export const SETTINGS = {
  progressionEnabled: true,

  totalStars: 6,

  moneyPerSection: 150000,

  moneyBonusPerSection: 25000,

  saveProgress: true,

  showKeyHints: true,

  splashDuration: 2.2
};


/* Derived automatically - do not edit. */
export const TOTAL_SECTIONS =
  SCREENS.filter((screen) => screen.counts).length;

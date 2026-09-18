import { Job, Application, Profile } from '@/types';

export const dummyJobs: Job[] = [
  {
    id: 'job-1',
    title: 'Senior Frontend Engineer',
    company: 'TechFlow',
    location: 'Montreal, QC',
    type: 'full-time',
    workArrangement: 'hybrid',
    salary: { min: 110000, max: 140000, currency: 'CAD' },
    description: 'We are looking for a Senior Frontend Engineer to join our core team...',
    requirements: ['5+ years React experience', 'TypeScript mastery', 'Next.js knowledge'],
    responsibilities: ['Build core web applications', 'Mentor junior developers', 'Architect frontend solutions'],
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    postedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    source: 'internal'
  },
  {
    id: 'job-2',
    title: 'Full Stack Developer',
    company: 'InnovateCorp',
    location: 'Toronto, ON',
    type: 'full-time',
    workArrangement: 'remote',
    salary: { min: 95000, max: 125000, currency: 'CAD' },
    description: 'Join our fast-growing startup as a Full Stack Developer...',
    requirements: ['3+ years Node.js', 'Experience with React', 'PostgreSQL knowledge'],
    responsibilities: ['Develop new features', 'Maintain REST APIs', 'Write automated tests'],
    skills: ['Node.js', 'React', 'PostgreSQL', 'Express'],
    postedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    source: 'internal'
  },
  {
    id: 'job-3',
    title: 'UX/UI Designer',
    company: 'Creative Studios',
    location: 'Vancouver, BC',
    type: 'contract',
    workArrangement: 'remote',
    description: 'Looking for a talented designer for a 6-month contract...',
    requirements: ['Figma expertise', 'Portfolio of digital products'],
    responsibilities: ['Create wireframes', 'Conduct user research', 'Design high-fidelity mockups'],
    skills: ['Figma', 'User Research', 'Wireframing'],
    postedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    source: 'external'
  }
];

export const dummyProfile: Profile = {
  id: 'prof-1',
  userId: 'user-1',
  firstName: 'Jane',
  lastName: 'Doe',
  headline: 'Frontend Developer | React | Next.js',
  location: 'Montreal, QC',
  about: 'Passionate frontend developer with 3 years of experience building modern web applications.',
  skills: ['React', 'TypeScript', 'HTML/CSS', 'Next.js', 'Tailwind'],
  experience: [
    {
      id: 'exp-1',
      title: 'Frontend Developer',
      company: 'WebSolutions Inc.',
      location: 'Montreal, QC',
      startDate: '2021-05-01',
      current: true,
      description: 'Developed responsive web applications using React and Next.js.'
    }
  ],
  education: [
    {
      id: 'edu-1',
      institution: 'Concordia University',
      degree: 'B.Eng Software Engineering',
      startDate: '2017-09-01',
      endDate: '2021-05-01'
    }
  ]
};

export const dummyApplications: Application[] = [
  {
    id: 'app-1',
    userId: 'user-1',
    jobId: 'job-1',
    job: dummyJobs[0],
    companyName: dummyJobs[0].company,
    jobTitle: dummyJobs[0].title,
    status: 'Interview',
    appliedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString(),
    events: [
      {
        id: 'evt-1',
        applicationId: 'app-1',
        status: 'Applied',
        date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 'evt-2',
        applicationId: 'app-1',
        status: 'Recruiter screening',
        date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 'evt-3',
        applicationId: 'app-1',
        status: 'Interview',
        date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        note: 'Technical interview scheduled'
      }
    ]
  },
  {
    id: 'app-2',
    userId: 'user-1',
    jobId: 'job-2',
    job: dummyJobs[1],
    companyName: dummyJobs[1].company,
    jobTitle: dummyJobs[1].title,
    status: 'Applied',
    appliedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    events: [
      {
        id: 'evt-4',
        applicationId: 'app-2',
        status: 'Applied',
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
      }
    ]
  }
];

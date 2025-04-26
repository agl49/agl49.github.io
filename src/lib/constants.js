import { goto } from '$app/navigation';
import { base } from '$app/paths';

function openExternalLink(url) {
  window.open(url, '_blank');
}

export const pageButtons = [
  { id: 0, label: 'Home //', onClick: () => goto(base + '/') },
  { id: 1, label: 'Writings //', onClick: () => goto(base + '/writings') }
  // { id: 2, label: 'Demos //', onClick: () => goto('/demos') },
  // { id: 3, label: 'Contact //', onClick: () => goto('/contact') }
];

export const socialLinks = [
  {
    id: 0,
    label: 'linkedin //',
    onClick: () => openExternalLink('https://www.linkedin.com/in/adrian-lopez-230029140/')
  }
];

export const categoryTags = ['numbers', 'odd', 'even'];

export const postList = ['test_post_1', 'test_post_2'];

export const experience = [
  {
    dateRange: ['NOVEMBER 22 2022', 'Present'],
    title: 'OPTUM, DATA SCIENTIST 1',
    link: 'https://www.optum.com/en/',
    tags: [
      'Python',
      'Backend',
      'Frontend',
      'Azure',
      'GCP',
      'AI/ML',
      'GenAI',
      'SQL',
      'Pandas',
      'Reactjs',
      'FastAPI',
      'Parallel Programming',
      'RAG'
    ],
    blurb: 'R&D work for new systems. Sometimes I wear many hats.'
  },
  {
    dateRange: ['May 23 2022', 'November 22 2022'],
    title: 'OPTUM, TECHNIQUE DEVELOPMENT PROGRAM ASSOCIATE – SOFTWARE ENGINEER',
    link: 'https://www.optum.com/en/',
    tags: ['PL/SQL', 'SQL', 'Backend', 'Reactjs', 'Drools', 'Java'],
    blurb: 'Scrum team that supported mature systems.'
  }
];

//blurb one
//'Worked on two major projects. Designed the backend for a internal GenAI RAG tool to assist users with content creation as well as coordinated frontend upgrade with external team. The second project I developed a custom parallel program that implemented business logic on millions of datapoints before ingestion by users.'
//blurb two

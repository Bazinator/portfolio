export const site = {
  name: 'Michael Bazett',
  description:
    'I study software systems at SFU, and cook in high-pressure restaurant environments. I like to write.',
};

export const navigation = [
  { href: '/', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/writing', label: 'Writing' },
  { href: '/links', label: 'Links' },
  { href: '/resume', label: 'Resume' }
];

export const socialLinks = [
  { href: 'https://github.com/bazinator', label: 'GitHub', external: true },
  { href: 'https://www.linkedin.com/in/michael-bazett/', label: 'LinkedIn', external: true },
  { href: '/files/Michael%20Bazett%20Resume.pdf', label: 'Resume', external: true }
];

export const aboutNarrative = [
  'Otherwise outside of school, I work in an amazing restaurant environment. I have learned so much there, from consistency to communication, and how to stay calm under pressure. If I am not working or studying, I am probably reading, lifting, living, or out being silly.',
];

export const resumeExperience = [
  {
    period: '2024 - Present',
    role: 'Head Line Cook / Expo',
    company: 'The Keg',
    description:
      'Worked in a high-pressure service environment requiring speed, communication, consistency, and calm execution under load.'
  },
  {
    period: '2024 - Present',
    role: 'Software Systems Student',
    company: 'Simon Fraser University',
    description:
      'Studying software systems while building personal and team projects in web software, tools, and applied technical work.'
  }
];

export const resumeEducation = [
  {
    period: '2024 - Present',
    title: 'B.Sc. in Software Systems',
    detail: 'Simon Fraser University'
  }
];

export const referenceLinks: { category: string; title: string; url: string; note: string; date?: string }[] = [
  {
    category: 'AI & Writing',
    date: '2026-08-06',
    title: "I'm begging you: Never Write with AI",
    url: 'https://www.nytimes.com/2026/08/04/opinion/artificial-intelligence-ai-writing.html',
    note: `The argument is compelling. The ideas shared here produces an image of a future of humans that are illiterate, unable to form arguments, write, or express ideas. These humans would instead rely on technology to create, write, and think for them.

It makes me want to take the time to think, reflect and discuss important topics to continue building my skill. Personally, I have always struggled with writing. I have loved to read since`
  },
  {
    category: 'AI & Writing',
    date: '2026-08-08',
    title: 'I hate what AI is doing to the minds and happiness of the young',
    url: 'https://www.theguardian.com/books/ng-interactive/2026/aug/08/i-hate-what-ai-is-doing-to-the-minds-and-happiness-of-the-young-katherine-rundell-on-the-view-from-the-classroom',
    note: `An interesting perspective from someone very tied to education. The article reads with a heavy overlay of gloom, near the ending she adds "dark times are coming". I am sick of reading the negative outlooks on our humanities future. It is easy to point and stare at a problem, and claim we are doomed, without trying to solve that problem. I stand by my view that we live in one of the most prosperous times in our history, with access to knowledge, training, food, water and shelter being at an all time high. Technology enriches our life, taking away many a mundane task from us. Some would argue we needs those. I argue not.

She has good points on students fighting back, and being conscious of AI usage to ensure we are still creating and learning. She throws several groups under the bus for no apparent reason, with no evidence. Talking about AI slop without highlighting any of the advancement, the technological improvement, the powerful systems we will see emerge from this.`
  },
  {
    category: 'Software',
    title: 'Marc Brooker on how software engineering is changing',
    url: 'https://www.youtube.com/watch?v=u3GjIXP9N0s',
    note: 'A great outlook on the current market, from a hopeful perspective.'
  }
];

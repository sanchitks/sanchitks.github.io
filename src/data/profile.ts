// All the text on the website lives in this file.
// Edit anything here, save, and the site updates.

export const profile = {
  name: "Sanchit Saini",
  firstName: "Sanchit",
  initials: "SS",
  title: "AI Web Developer",
  roles: ["AI Web Developer", "Python & GenAI Developer", "Website Builder"],
  tagline:
    "I build fast, modern websites and bring AI into them, combining a Computer Science background with Python and Generative AI.",
  location: "Delhi, India",
  email: "Sanchitksh@gmail.com",
  siteUrl: "https://sanchitks.github.io",
  // Put your résumé at public/resume.pdf and set this to "/resume.pdf" to show a download button
  resumeUrl: "",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sanchit-saini-b03b71200" },
    { label: "GitHub", href: "https://github.com/sanchitks" },
  ],
};

export const about = {
  paragraphs: [
    "I'm Sanchit, a Computer Applications (BCA) graduate from Lingaya's Vidyapeeth, based in Delhi. I started out building user-facing web pages as an intern at CarsDeck, then taught HTML and CSS to students as a coding tutor.",
    "Along the way I founded my own venture, GOUENJI, and worked in operations, where I learned to research problems, plan carefully, and deliver quickly. Now I'm combining my web development skills with Python and Generative AI to build websites that are smarter and more useful.",
  ],
  highlights: [
    { value: "350+", label: "students coordinated as fest committee head" },
    { value: "19", label: "committees led for Controlz cultural fest" },
    { value: "2022", label: "building for the web since" },
    { value: "National", label: "level athlete, 1600 m race" },
  ],
};

export const skills = [
  {
    group: "Web Development",
    items: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Responsive design" },
      { name: "Next.js", learning: true },
    ],
  },
  {
    group: "AI & Programming",
    items: [
      { name: "Python" },
      { name: "Generative AI", learning: true },
      { name: "Prompt engineering", learning: true },
      { name: "MySQL" },
    ],
  },
  {
    group: "Professional",
    items: [
      { name: "Cross-team coordination" },
      { name: "Stakeholder management" },
      { name: "Research & analysis" },
      { name: "Teaching & mentoring" },
    ],
  },
];

export const services = [
  {
    icon: "web",
    title: "Websites & Landing Pages",
    description:
      "Clean, responsive websites and landing pages for businesses, creators and events, designed to look great on every screen and load fast.",
    points: ["Mobile-first responsive design", "Modern, on-brand look", "Free hosting setup"],
  },
  {
    icon: "bot",
    title: "AI Chatbot Integration",
    description:
      "Add an AI assistant to your website that answers visitor questions around the clock, built with Python and modern LLM APIs.",
    points: ["Trained on your business info", "Embedded right in your site", "Saves time on repeat questions"],
  },
];

export const experience = [
  {
    role: "Founder",
    org: "GOUENJI",
    period: "Feb 2025 – Present",
    points: [
      "Founded and lead the venture end-to-end, applying research and analytical skills to guide product and business decisions.",
      "Manage remote operations independently, from planning through execution.",
    ],
  },
  {
    role: "Operations Expert",
    org: "TP",
    period: "Nov 2025 – Jun 2026",
    points: [
      "Resolved lost package claims through structured investigation and process-driven troubleshooting.",
      "Worked cross-functionally to close claims efficiently while maintaining accuracy and compliance.",
    ],
  },
  {
    role: "Committee Head",
    org: "Controlz Cultural Fest",
    period: "2024",
    points: [
      "Led and coordinated 19 committees comprising over 350 students for the college's annual cultural fest.",
      "Managed cross-committee logistics, communication and execution to deliver the event on schedule.",
    ],
  },
  {
    role: "Coding Tutor",
    org: "Modi Training Institute Pvt. Ltd.",
    period: "Jul 2023 – Nov 2023",
    points: [
      "Taught HTML5 and CSS fundamentals, breaking down technical concepts into clear, practical lessons.",
      "Built structured learning materials and exercises to reinforce core web development skills.",
    ],
  },
  {
    role: "Web Developer (Intern)",
    org: "CarsDeck",
    period: "Jun 2022 – Nov 2022",
    points: [
      "Contributed to web development projects using HTML, CSS and related front-end technologies.",
      "Supported the team in building and maintaining functional, user-facing web pages.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    field: "Computer Science",
    school: "Lingaya's Vidyapeeth",
    period: "Oct 2022 – May 2025",
  },
  {
    degree: "Senior Secondary",
    field: "Commerce (Business, Mathematics)",
    school: "Swami Vivekanand Public School",
    period: "Apr 2019 – Sep 2020",
  },
];

export const certifications = [
  // Add a "link" field to any of these to make it clickable
  { name: "Certification in Python", issuer: "SWAYAM (NPTEL)", link: "" },
  { name: "Operations Job Simulation", issuer: "Goldman Sachs", link: "" },
];

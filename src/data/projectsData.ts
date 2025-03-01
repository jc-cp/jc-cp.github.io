export interface ProjectData {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
  featured: boolean;
  date: string;
}

// Sample project data - replace with your actual projects
export const projectsData: ProjectData[] = [
  {
    id: 'cdtm-trend-research',
    title: 'AI and Climate Change',
    shortDescription: 'Trend research on AI applications for climate change mitigation',
    description: 'Comprehensive research project analyzing future trends in AI applications for climate change mitigation and adaptation strategies. The project explored cutting-edge technologies and their potential impact on environmental sustainability.',
    imageUrl: '/src/assets/projects/trend-research.jpg', // Update with real image path
    tags: ['Trend Research', 'AI', 'Climate Change', 'Sustainability'],
    githubUrl: 'https://github.com/yourusername/climate-ai-research',
    demoUrl: 'https://example.com/climate-ai-demo',
    featured: true,
    date: '2023-01'
  },
  {
    id: 'cdtm-product-development',
    title: 'Akina: AI Car Matching Tool',
    shortDescription: 'AI-powered tool for matching users with their ideal car',
    description: 'Developed Akina, an innovative AI-powered car matching tool that helps users find their ideal vehicle based on preferences, lifestyle, and budget. The system uses machine learning algorithms to analyze user inputs and provide personalized recommendations.',
    imageUrl: '/src/assets/projects/akina.jpg', // Update with real image path
    tags: ['Product Development', 'AI', 'Machine Learning', 'UX Design'],
    githubUrl: 'https://github.com/yourusername/akina',
    demoUrl: 'https://akina-cars.example.com',
    videoUrl: 'https://youtube.com/watch?v=example',
    featured: true,
    date: '2022-11'
  },
  {
    id: 'cdtm-business-strategy',
    title: 'US Market Entry Strategy',
    shortDescription: 'Business strategy for Austrian startup entering the US market',
    description: 'Developed a comprehensive US market entry strategy for an Austrian startup, including market analysis, competitor research, positioning strategy, and implementation roadmap. The project involved stakeholder interviews, market sizing, and financial projections.',
    imageUrl: '/src/assets/projects/market-entry.jpg', // Update with real image path
    tags: ['Business Strategy', 'Market Analysis', 'International Business'],
    demoUrl: 'https://example.com/market-entry-case-study',
    featured: true,
    date: '2022-06'
  },
  {
    id: 'master-thesis',
    title: 'AI for pLGG Diagnosis',
    shortDescription: 'AI system for diagnosis of pediatric low-grade gliomas',
    description: 'Research and development of a machine learning system for the diagnosis and growth prognosis of pediatric low-grade gliomas (pLGGs) using MR imaging. The project utilized deep learning models for image segmentation and classification to assist medical professionals.',
    imageUrl: '/src/assets/projects/plgg-thesis.jpg', // Update with real image path
    tags: ['Medical Imaging', 'Deep Learning', 'Healthcare AI', 'MRI Analysis'],
    githubUrl: 'https://github.com/yourusername/plgg-diagnosis',
    featured: true,
    date: '2023-05'
  },
  {
    id: 'bachelor-thesis',
    title: 'Indoor UAV Navigation',
    shortDescription: 'Navigation system for unmanned aerial vehicles in indoor environments',
    description: 'Developed a robust navigation system for unmanned aerial vehicles (UAVs) operating in GPS-denied indoor environments. The project implemented SLAM (Simultaneous Localization and Mapping) techniques using visual and inertial sensors for accurate positioning.',
    imageUrl: '/src/assets/projects/uav-navigation.jpg', // Update with real image path
    tags: ['Robotics', 'UAV', 'SLAM', 'Computer Vision'],
    githubUrl: 'https://github.com/yourusername/indoor-uav-navigation',
    videoUrl: 'https://youtube.com/watch?v=example-uav',
    featured: false,
    date: '2020-02'
  },
  {
    id: 'ka-raceing',
    title: 'Formula Student Team Lead',
    shortDescription: 'Led the electronics team of KA-RaceIng e.V.',
    description: 'Served as a Team Lead for the KA-RaceIng Formula Student electornics team, managing a group of 12 engineering students in the design, manufacturing, and programming of multiple electronic systems for 3 high-performance racing cars (combustion, electric and autonomous). Oversaw PCB design with Altium, their programming in C++, team coordination, and competition strategy. Main responsibile for the electric car.',
    imageUrl: '/src/assets/projects/ka-raceing-cars.jpeg', // Update with real image path
    tags: ['Leadership', 'Electronics', 'Management'],
    demoUrl: 'https://www.ka-raceing.de/',
    videoUrl: 'https://www.youtube.com/watch?v=7Z7_H8gz3dQ&pp=ygUKa2EgcmFjZWluZw%3D%3D',
    featured: true,
    date: '2018-06'
  }
]; 
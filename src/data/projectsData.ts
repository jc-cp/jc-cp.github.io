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
        id: 'hawkeye',
        title: 'Hawkeye -- Your eyes in the urban skies.',
        shortDescription: 'AI-powered drone surveillance system',
        description: 'Hawkeye is an AI-powered drone surveillance system that uses computer vision to detect and track objects in real-time. It is designed to be used in remote areas where traditional surveillance methods are not feasible.',
        imageUrl: '/src/assets/projects/hawkeye.png', // Update with real image path
        tags: ['Drone Surveillance', 'AI', 'Computer Vision'],
        githubUrl: 'https://github.com/danielsanjosepro/hawkeye',
        demoUrl: 'https://danielsanjosepro.github.io/hawkeye/',
        featured: true,
        date: '2024-06'
    },
    {
        id: 'plgg-diagnosis',
        title: 'AI for pLGG Diagnosis',
        shortDescription: 'AI system for diagnosis and growth prognosis of pediatric low-grade gliomas',
        description: 'Research and development of a machine learning system for the diagnosis and growth prognosis of pediatric low-grade gliomas (pLGGs) using MR imaging. The project utilized deep learning models for image segmentation and classification to assist medical professionals.',
        imageUrl: '/src/assets/projects/plgg-thesis.jpg', // Update with real image path
        tags: ['Medical Imaging', 'Deep Learning', 'Healthcare AI', 'MRI Analysis'],
        githubUrl: 'https://github.com/yourusername/plgg-diagnosis',
        featured: true,
        date: '2023-05'
    },
    {
        id: 'brightly-ai',
        title: 'Brightly AI',
        shortDescription: 'Predicting land usage from satellite imagery with AI',
        description: 'To be able to implement effective environmental policies, it is critical to first understand how the environment is being used (e.g. industry, farming, forest). In many areas of the world, official data is lacking, meaning it is incredibly difficult to assess the true impact and thus to plan ahead. Brightly AI is a tool that uses satellite imagery to predict land usage and facilitating policy making.',
        imageUrl: '/src/assets/projects/eurosat_overview_small.jpg', // Update with real image path
        tags: ['Satellite Imagery', 'AI', 'Prediction'],
        githubUrl: 'https://github.com/jc-cp/brightly-ai',
        featured: true,
        date: '2022-04'
    },
    {
    id: 'cdtm-trend-research',
    title: 'Tackling Climate Change in the AI Era',
    shortDescription: 'Trend research on AI applications for climate change mitigation',
    description: 'Comprehensive research project analyzing future trends in AI applications for climate change mitigation and adaptation strategies. The project explored cutting-edge technologies and their potential impact on environmental sustainability.',
    imageUrl: '/src/assets/projects/trend_seminar.png', // Update with real image path
    tags: ['Trend Research', 'AI', 'Climate Change', 'Sustainability'],
    demoUrl: 'https://www.cdtm.com/publications/tackling_climate_change_in_the_ai_era',
    featured: true,
    date: '2022-02'
  },
  {
    id: 'cdtm-product-development',
    title: 'Akina: AI Car Matching Tool',
    shortDescription: 'AI-powered tool for matching users with their ideal car',
    description: 'Developed Akina, an innovative AI-powered car matching tool that helps users find their ideal vehicle based on preferences, lifestyle, and budget. The system uses machine learning algorithms to analyze user inputs and provide personalized recommendations.',
    imageUrl: '/src/assets/projects/akina.jpg', // Update with real image path
    tags: ['Product Development', 'AI', 'Machine Learning', 'UX Design'],
    githubUrl: 'https://github.com/jc-cp/akina',
    demoUrl: 'https://akina-cars.example.com',
    featured: true,
    date: '2022-11'
  },
  {
    id: 'cdtm-business-strategy',
    title: 'US Market Entry Strategy',
    shortDescription: 'Business strategy for Austrian startup entering the US market',
    description: 'Developed a comprehensive US market entry strategy for an Austrian startup, including market analysis, competitor research, positioning strategy, and implementation roadmap. The project involved stakeholder interviews, market sizing, and financial projections.',
    imageUrl: '/src/assets/projects/qibri.jpg', // Update with real image path
    tags: ['Business Strategy', 'Go-to-Market'],
    demoUrl: 'https://www.qibri.com/',
    featured: false,
    date: '2022-06'
  },
  {
    id: 'bachelor-thesis',
    title: 'Indoor UAV Navigation',
    shortDescription: 'Navigation system for unmanned aerial vehicles in indoor environments',
    description: 'Developed a robust navigation system for unmanned aerial vehicles (UAVs) operating in GPS-denied indoor environments. The project implemented a marker-based localization framework and an EKF-SLAM (Extended Kalman Filter Simultaneous Localization and Mapping) using visual and inertial sensors for accurate positioning. Tested in Gazebo simualtion and verified on a real flying drone. ROS/C++ implementation.',
    imageUrl: '/src/assets/projects/motion_capture_test.jpg', // Update with real image path
    tags: ['Robotics', 'UAVs', 'SLAM', 'CV', 'ROS'],
    githubUrl: 'https://github.com/yourusername/indoor-uav-navigation',
    videoUrl: 'https://youtube.com/watch?v=example-uav',
    featured: true,
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
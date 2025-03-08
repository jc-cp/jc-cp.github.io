import hawkeyeImage from '../assets/projects/hawkeye.png';
import eurosatImage from '../assets/projects/eurosat_overview_small.jpg';
import trendSeminarImage from '../assets/projects/trend_seminar.png';
import qibriImage from '../assets/projects/qibri.jpg';
import motionCaptureImage from '../assets/projects/motion_capture_test.jpg';
import kaRaceingImage from '../assets/projects/ka-raceing-cars.jpeg';
import horyznImage from '../assets/projects/horyzn.jpg';
import akinaImage from '../assets/projects/akina.png';
import ribfracImage from '../assets/projects/ribfrac.png';
import climateClubImage from '../assets/projects/ClimateClub.jpg';
import kiMsImage from '../assets/projects/KImS.jpg';
import mriPreprocessingImage from '../assets/projects/mri_pp_tool.jpg';
import mriSequenceImage from '../assets/projects/mri_sequences.bmp';
import scribeeImage from '../assets/projects/brain.png';
import pLGGtrackingImage from '../assets/projects/pLGGtracking.png';
import TUMaiImage from '../assets/projects/TUMai.jpg';
import sensusImage from '../assets/projects/sensusTech.png';

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

export const projectsData: ProjectData[] = [
    {
        id: 'hawkeye',
        title: 'Hawkeye',
        shortDescription: 'Your eyes in the urban skies',
        description: 'Born out of the European Defense Tech Hackathon, Hawkeye is an AI-powered drone surveillance system that uses computer vision to detect and track objects in real-time. It is designed to be used in remote areas where traditional surveillance methods are not feasible.',
        imageUrl: hawkeyeImage,
        tags: ['UAVs', 'AI', 'CV'],
        githubUrl: 'https://github.com/danielsanjosepro/hawkeye',
        demoUrl: 'https://danielsanjosepro.github.io/hawkeye/',
        featured: true,
        date: '2024-06'
    },
    {
        id: 'scribe',
        title: 'Scribe',
        shortDescription: 'AI-powered thought recording tool',
        description: 'Born in the Hackatum,Scribe is an AI-powered tool for tracking and managing all of your ideas and thoughts, mapping your brain in real-time. With one single click, you can record your thoughts and ideas, and they will be stored in your personal knowledge base.',
        imageUrl: scribeeImage,
        tags: ['AI', 'Product Dev.'],
        githubUrl: '/coming-soon',
        featured: true,
        date: '2024-11'
    },
    {
        id: 'plgg-diagnosis',
        title: 'pLGG Tracking Tool',
        shortDescription: 'AI-based system for diagnosis and growth prognosis of pediatric low-grade gliomas',
        description: 'Research and development of a machine learning system for the diagnosis and growth prognosis of pediatric low-grade gliomas (pLGGs) using MR imaging. The project utilized deep learning models for image segmentation and classification to assist medical professionals.',
        imageUrl: pLGGtrackingImage,
        tags: ['Medical Imaging', 'ML/DL', 'Research'],
        githubUrl: 'https://github.com/jc-cp/mri-longitudinal-analysis',
        featured: true,
        date: '2023-05'
    },
    {
        id: 'mri-preprocessing',
        title: 'MRI Preprocessing Tool ',
        shortDescription: 'Automatized and customizable preprocessing tool for MRI images',
        description: 'Developed a tool for the preprocessing of MRI images to prepare them for machine learning tasks. The tool is designed to be used in a clinical setting and is fully customizable to the needs of the user providing a user-friendly interface.',
        imageUrl: mriPreprocessingImage,
        tags: ['Medical Imaging', 'ML/DL', 'Research'],
        githubUrl: 'https://github.com/jc-cp/mri_preprocessing',
        featured: true,
        date: '2023-08'
    },
    {
        id: 'mri-sequence-classification',
        title: 'MRI Sequence Classification',
        shortDescription: 'Classification of MRI images into one of four modilities',
        description: 'Developed a tool for the classification of MRI sequences using pretrained deep learning models. The toold classifies the image into one of four modalities: T1, T1c, T2, and T2-FLAIR, or none of these.',
        imageUrl: mriSequenceImage,
        tags: ['Medical Imaging', 'ML/DL', 'Research'],
        githubUrl: 'https://github.com/AIM-KannLab/mri-sequence-inference',
        featured: true,
        date: '2023-05'
    },
    {
        id: 'TUM.ai',
        title: 'TUM.ai',
        shortDescription: 'Member at venture team of TUM.ai',
        description: 'TUM.ai is a student initiative at the Technical University Munich that develops workshops, events and AI solutions for partners. Co-organized the AI Entrepreneurship Lab, a 14-week program for students to develop their own AI startup.',
        imageUrl: TUMaiImage,
        tags: ['Product Dev.', 'AI'],
        demoUrl: 'https://www.tum-ai.com/',
        featured: false,
        date: '2022-06'
    },
    {
        id: 'horyzn',
        title: 'HORYZN',
        shortDescription: 'Member at the Avionics and Test Flight division',
        description: 'HORYZN is the first student initiative of the largest faculty in Europe for Aerospace and Geodesy at Technical University Munich. "Prototyping the aerospace of tomorrow" - as our motto already suggests, we deal with innovative concepts from aerospace. Specifically, this means that we design, build, test, and apply fixed-wing eVTOL(electric vertical take-off fixed-wing aircraft) UAVs (Unmanned Aerial Vehicles).',
        imageUrl: horyznImage,
        tags: ['UAVs', 'ROS', 'Research'],
        demoUrl: 'https://horyzn.org/',
        featured: true,
        date: '2022-05'
    },
    {
        id: 'brightly-ai',
        title: 'Brightly AI',
        shortDescription: 'Predicting land usage from satellite imagery with AI',
        description: 'To be able to implement effective environmental policies, it is critical to first understand how the environment is being used (e.g. industry, farming, forest). In many areas of the world, official data is lacking, meaning it is incredibly difficult to assess the true impact and thus to plan ahead. Brightly AI is a tool that uses satellite imagery to predict land usage and facilitating policy making.',
        imageUrl: eurosatImage, 
        tags: ['Satellite Imagery', 'ML/DL', 'Prediction'],
        githubUrl: 'https://github.com/jc-cp/brightly-ai',
        featured: true,
        date: '2022-04'
    },
    {
        id: 'rib-fracture-detection',
        title: 'Rib Fracture Detection and Classification',
        shortDescription: 'Detection and classification of rib fractures in CT images',
        description: 'Developed a tool for the detection and classification of rib fractures in CT images using deep learning models based on a U-Net architecture. Two different heads were used to predict the presence of a fracture and to classify the type of fracture.',
        imageUrl: ribfracImage,
        tags: ['Medical Imaging', 'ML/DL',],
        githubUrl: '/coming-soon',
        featured: true,
        date: '2022-05'
    },
    {
      id: 'climate-club',
      title: 'CDTM Climate Club',
      shortDescription: 'Member at the CDTM Climate Club',
      description: 'The CDTM Climate Club is a student initiative at the Technical University Munich that develops tries to raise awareness about climate change and the importance of sustainability in the Munich ecosystem.',
      imageUrl: climateClubImage,
      tags: ['Product Dev.', 'Climate Change'],
      demoUrl: 'https://www.linkedin.com/company/cdtm-climate-club/about/',
      featured: false,
      date: '2022-05'
    },
    {
    id: 'cdtm-trend-research',
    title: 'Tackling Climate Change in the AI Era',
    shortDescription: 'Trend research on AI applications for climate change mitigation',
    description: 'Comprehensive research project analyzing future trends in AI applications for climate change mitigation and adaptation strategies. The project explored cutting-edge technologies and their potential impact on environmental sustainability.',
    imageUrl: trendSeminarImage, 
    tags: ['Research', 'AI', 'Climate Change'],
    demoUrl: 'https://www.cdtm.com/publications/tackling_climate_change_in_the_ai_era',
    featured: true,
    date: '2022-02'
    },
    {
      id: 'cdtm-product-development',
      title: 'Akina: AI Car Matching Tool',
      shortDescription: 'AI-powered tool for matching users with their ideal car',
      description: 'Developed Akina, an innovative AI-powered car matching tool that helps users find their ideal vehicle based on preferences, lifestyle, and budget. The system uses machine learning algorithms to analyze user inputs and provide personalized recommendations.',
      imageUrl: akinaImage, // Update with real image path
      tags: ['Product Dev.', 'ML/DL',],
      githubUrl: 'https://github.com/jc-cp/akina',
      demoUrl: '/coming-soon',
      featured: true,
      date: '2022-05'
    },
    {
      id: 'cdtm-business-strategy',
      title: 'US Market Entry Strategy',
      shortDescription: 'Business strategy for Austrian startup entering the US market',
      description: 'Developed a comprehensive US market entry strategy for an Austrian startup, including market analysis, competitor research, positioning strategy, and implementation roadmap. The project involved stakeholder interviews, market sizing, and financial projections.',
      imageUrl: qibriImage, // Update with real image path
      tags: ['Business Strategy', 'Go-to-Market'],
      demoUrl: 'https://www.qibri.com/',
      featured: false,
      date: '2022-11'
    },
    {
      id: 'KImS',
      title: 'KI macht Schule (KImS)',
      shortDescription: 'Member and instructor at the KImS initiative ',
      description: 'KImS is a student initiative part of the German Academic Scholarship Foundation (Studienstiftung des Deutschen Volkes) that develops AI workshops to educate senior members of soiciety as well as high school students.',
      imageUrl: kiMsImage,
      tags: ['Education', 'AI'],
      demoUrl: 'https://ki-macht-schule.de/',
      featured: false,
      date: '2021-11'
    },
    {
      id: 'bachelor-thesis',
      title: 'Indoor UAV Navigation',
      shortDescription: 'Navigation system for unmanned aerial vehicles in indoor environment',
      description: 'Developed a robust navigation system for unmanned aerial vehicles (UAVs) operating in GPS-denied indoor environments. The project implemented a marker-based localization framework and an EKF-SLAM (Extended Kalman Filter Simultaneous Localization and Mapping) using visual and inertial sensors for accurate positioning. Tested in Gazebo simualtion and verified on a real flying drone. ROS/C++ implementation.',
      imageUrl: motionCaptureImage, // Update with real image path
      tags: ['UAVs', 'SLAM', 'CV', 'ROS'],
      githubUrl: '/coming-soon',
      videoUrl: '/coming-soon',
      featured: true,
      date: '2020-02'
    },
    {
      id: 'sensus',
      title: 'Sensus Tech',
      shortDescription: 'High performance velocity measurement sensor for autonomous systems',
      description: 'Our system is based on a camera and a self developed software in ROS. Our vision is to provide accurate data to increase safety and performance of dynamic systems at an affordable price.',
      imageUrl: sensusImage,
      tags: ['ROS', 'CV', 'ML/DL'],
      demoUrl: 'https://sensustech.webflow.io/',
      featured: true,
      date: '2019-11'
    },
    {
      id: 'ka-raceing',
      title: 'Formula Student Team Lead',
      shortDescription: 'Led the electronics team of KA-RaceIng e.V.',
      description: 'Served as a Team Lead for the KA-RaceIng Formula Student electornics team, managing a group of 12 engineering students in the design, manufacturing, and programming of multiple electronic systems for 3 high-performance racing cars (combustion, electric and autonomous). Oversaw PCB design with Altium, their programming in C++, team coordination, and competition strategy. Main responsibile for the electric car.',
      imageUrl: kaRaceingImage, // Update with real image path
      tags: ['Leadership', 'Electronics', 'Management'],
      demoUrl: 'https://www.ka-raceing.de/',
      videoUrl: 'https://www.youtube.com/watch?v=7Z7_H8gz3dQ&pp=ygUKa2EgcmFjZWluZw%3D%3D',
      featured: true,
      date: '2018-06'
    }
]; 
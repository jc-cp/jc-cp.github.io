import triathlonImage from '../assets/hobbies/triathlon.jpg';
import triathlonImage2 from '../assets/hobbies/triathlon2.jpg';
import hikingImage from '../assets/hobbies/hiking.jpg';
import sailingImage from '../assets/hobbies/sailing.jpg';
import chessImage from '../assets/hobbies/chess.jpeg';
import droneImage from '../assets/hobbies/dronephoto.jpg';
import droneImage2 from '../assets/hobbies/dronephoto2.jpg';
import photographyImage from '../assets/hobbies/photography.jpg';
import videoProductionImage from '../assets/hobbies/video_production.jpg';
import droneBuildingImage from '../assets/hobbies/droneBuild.jpg';
import droneBuildingImage2 from '../assets/hobbies/droneBuild2.jpg';
import droneBuildingImage3 from '../assets/hobbies/droneBuild3.jpg';

export interface HobbyData {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  tags: string[];
  videoUrl?: string[];
  galleryUrls?: string[];
  featured: boolean;
  startYear: string;
  endYear?: string;
}

export const hobbiesData: HobbyData[] = [
  {
    id: 'triathlon',
    title: 'Triathlon',
    description: 'Amateur triathlete now, focusing on olympic and middle distance races. I used to be a competitive triathlete with the Karlsruher Lemminge university team and the TriPuzol team.',
    longDescription: "I joined the village triathlon team back in high-school during my last year and have been passionate about the sport ever since. Since then I joined the university triathlon team during my bachelor studies I've competed in several olympic distance triathlons and continue to train regularly. Last year I finished my first IRONMAN 70.3 in Mallorca, Spain.",
    imageUrl: triathlonImage,
    tags: ['Swimming', 'Cycling', 'Running'],
    galleryUrls: [
      triathlonImage,
      triathlonImage2,
    ],
    featured: true,
    startYear: '2014',
  },
  {
    id: '(Drone) Photography',
    title: '(Drone) Photography',
    description: 'Trying to capture the breathtaking aerial views of nature and landscapes.',
    longDescription: 'I use drones to capture stunning aerial shots of natural landscapes, mountains, and urban scenes. This hobby allows me to explore new perspectives and appreciate the beauty of the world from above.',
    imageUrl: droneImage,
    tags: ['Nature', 'Adventure', 'Photography', 'Drones'],
    galleryUrls: [
      droneImage,
      droneImage2,
      photographyImage,
    ],
    featured: true,
    startYear: '2020',
  },
  {
    id: 'drone-building',
    title: 'FPV Drone Building',
    description: 'Building drones for fun and FPV flying.',
    longDescription: 'I enjoy building drones for fun and for FPV flying. I have designed and built/ assembled my own drones from scratch as well as programmed parts of the flight controller software.',
    imageUrl: droneBuildingImage,
    tags: ['Drones', 'Competitions'],
    galleryUrls: [
      droneBuildingImage,
      droneBuildingImage2,
      droneBuildingImage3,
    ],
    featured: true,
    startYear: '2018',
  },
  {
    id: 'hiking',
    title: 'Hiking',
    description: 'Exploring the beautiful landscapes and challenging trails of the Alps.',
    longDescription: 'Started when I moved to Munich in 2021, I enjoy all types of hikes and climbs through via ferratas.',
    imageUrl: hikingImage,
    tags: ['Nature', 'Adventure', 'Hiking'],
    featured: true,
    startYear: '2021',
  },
  {
    id: 'sailing',
    title: 'Sailing',
    description: 'Exploring the open waters and enjoying the beauty of the sea.',
    longDescription: 'I enjoy sailing since I am a teen and appreciate the beauty and fearful nature of the sea.',
    imageUrl: sailingImage,
    tags: ['Adventure', 'Sailing'],
    featured: true,
    startYear: '2010',
  },
  {
    id: 'outdoor-video-production',
    title: 'Video Production',
    description: 'Creating cinematic (outdoor adventure) videos in beautiful natural settings.',
    longDescription: 'I love capturing outdoor adventures through video, especially in mountainous regions and during hiking trips. Using drones and action cameras, I create cinematic sequences that showcase the beauty of nature and the thrill of outdoor activities. This hobby combines my passion for technology, creativity, and the outdoors.',
    imageUrl: videoProductionImage,
    tags: ['Creativity', 'Videography', 'Drones'],
    videoUrl: ['https://www.youtube.com/watch?v=jXiSfnN_heo&ab_channel=StiftungBayerischeEliteAkademie',
    'https://www.youtube.com/watch?v=k05kYFoL_3U&ab_channel=StiftungBayerischeEliteAkademie'],
    featured: true,
    startYear: '2022',
  },
  {
    id: 'chess',
    title: 'Chess',
    description: 'Playing chess as a recreational activity.',
    longDescription: "I enjoy playing chess as a way to challenge my mind and improve my strategic thinking. Still a noob but it's fun!",
    imageUrl: chessImage,
    tags: ['Strategy', 'Games'],
    featured: true,
    startYear: '2024',
  }

];

// Get unique categories from all hobbies
export const hobbyCategories = Array.from(
  new Set(hobbiesData.flatMap(hobby => hobby.tags))
).sort(); 
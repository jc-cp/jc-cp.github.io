import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { ProjectData, projectsData } from '../data/projectsData';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateX(0); }
  to { opacity: 0; transform: translateX(-20px); }
`;

// Define FeaturedProjectState type
type FeaturedProjectState = ProjectData & { 
  state: 'entering' | 'stable' | 'leaving' 
};

// Styled Components
const FeaturedProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: ${({ theme }) => theme.spacing.md} 0;
  position: relative;
  height: 380px;
  overflow: hidden;
  padding-top: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    height: auto;
    max-height: 650px;
    align-items: center;
  }
`;

const FeaturedProject = styled.div<{ isEntering: boolean; isLeaving: boolean }>`
  flex: 0 0 30%;
  height: 100%;
  margin: 0 1%;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  animation: ${props => props.isEntering ? fadeIn : props.isLeaving ? fadeOut : 'none'} 0.5s ease forwards;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: 0 0 auto;
    width: 90%;
    height: 200px;
    margin: ${({ theme }) => theme.spacing.sm} 0;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const ProjectImage = styled.div<{ imgUrl: string }>`
  width: 100%;
  height: 60%;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease;
`;

const ProjectInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.secondary_background.white}F2;
  height: 40%;
  display: flex;
  flex-direction: column;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  }
`;

const ProjectTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const ProjectBrief = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.9rem;
  margin: ${({ theme }) => theme.spacing.xs} 0;
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.8rem;
    -webkit-line-clamp: 2;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  transition: color 0.2s, transform 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
  }
`;

const FeaturedControls = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  position: relative;
  margin-top: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  transform: translateY(20px);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: ${({ theme }) => theme.spacing.xs};
    transform: translateY(10px);
  }
`;

const ControlDot = styled.button<{ active: boolean }>`
  width: 4px;
  height: 4px;
  min-width: 12px;
  min-height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active 
    ? props.theme.colors.primary 
    : `${props.theme.colors.primary}50`};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  
  &:hover {
    background-color: ${props => props.active 
      ? props.theme.colors.primary 
      : `${props.theme.colors.primary}80`};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 3px;
    height: 3px;
    min-width: 10px;
    min-height: 10px;
  }
`;

const ViewAllLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  position: relative;
  font-size: 0.9rem;
  transform: translateY(30px);
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    transform: translateY(20px);
  }
`;

export const FeaturedProjects = () => {
  const [featured, setFeatured] = useState<FeaturedProjectState[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const navigate = useNavigate();
  const featuredProjectsRef = useRef(projectsData.filter(project => project.featured));

  // Initialize featured projects
  useEffect(() => {
    // Get first 3 featured projects
    const initialFeatured = featuredProjectsRef.current
      .slice(0, 3)
      .map(project => ({ ...project, state: 'stable' as const }));
    
    setFeatured(initialFeatured);
  }, []);

  // Rotate featured projects
  useEffect(() => {
    const rotateFeatured = () => {
      if (featuredProjectsRef.current.length <= 3) return;

      const nextIndex = (activeIndex + 1) % featuredProjectsRef.current.length;
      
      setFeatured(prev => {
        const newFeatured = [...prev];
        // Mark the oldest one as leaving
        newFeatured[0] = { ...newFeatured[0], state: 'leaving' };
        return newFeatured;
      });

      // After animation, replace the leaving one with the new one
      setTimeout(() => {
        setFeatured(prev => {
          // Get the next project that isn't already in the display
          const currentIds = prev.slice(1).map(p => p.id);
          let nextProject = featuredProjectsRef.current[nextIndex];
          
          // If we have a duplicate, find the next available project
          if (currentIds.includes(nextProject.id)) {
            for (let i = 1; i < featuredProjectsRef.current.length; i++) {
              const candidateIndex = (nextIndex + i) % featuredProjectsRef.current.length;
              const candidate = featuredProjectsRef.current[candidateIndex];
              if (!currentIds.includes(candidate.id)) {
                nextProject = candidate;
                break;
              }
            }
          }
          
          const newFeatured = [
            ...prev.slice(1), 
            { ...nextProject, state: 'entering' }
          ] as FeaturedProjectState[];
          return newFeatured;
        });
        
        setActiveIndex(nextIndex);
      }, 500); // Match this with animation duration
    };

    // Auto rotate every 5 seconds
    timeoutRef.current = setInterval(rotateFeatured, 5000);
    
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [activeIndex]);

  // Handle project card click
  const handleProjectClick = (projectId: string, event: React.MouseEvent) => {
    // Prevent click if it's on one of the icon links
    if ((event.target as HTMLElement).closest('a')) {
      return;
    }
    
    // Navigate to the projects page with the project ID as fragment
    navigate(`/projects#${projectId}`);
  };

  // Manual rotation control
  const handleDotClick = (index: number) => {
    if (timeoutRef.current) clearInterval(timeoutRef.current);
    
    if (index === activeIndex || featuredProjectsRef.current.length <= 3) return;
    
    // Custom rotation logic
    const rotate = () => {
      setFeatured(prev => {
        const newFeatured = [...prev];
        newFeatured[0] = { ...newFeatured[0], state: 'leaving' };
        return newFeatured;
      });

      setTimeout(() => {
        setFeatured(prev => {
          // Get the current IDs of the projects that will remain
          const currentIds = prev.slice(1).map(p => p.id);
          let targetProject = featuredProjectsRef.current[index];
          
          // If the target project is already displayed, find another one
          if (currentIds.includes(targetProject.id)) {
            // Try to find a project that's not currently displayed
            for (let i = 0; i < featuredProjectsRef.current.length; i++) {
              if (!currentIds.includes(featuredProjectsRef.current[i].id)) {
                targetProject = featuredProjectsRef.current[i];
                break;
              }
            }
          }
          
          const newFeatured = [
            ...prev.slice(1), 
            { ...targetProject, state: 'entering' }
          ] as FeaturedProjectState[];
          return newFeatured;
        });
        
        setActiveIndex(index);
      }, 500);
    };
    
    rotate();
  };

  // Reset state after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setFeatured(prev => 
        prev.map(project => ({ ...project, state: 'stable' }))
      );
    }, 500);
    
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <>
      <FeaturedProjectsContainer>
        {featured.map((project, index) => (
          <FeaturedProject 
            key={`${project.id}-${index}`}
            isEntering={project.state === 'entering'}
            isLeaving={project.state === 'leaving'}
            onClick={(e) => handleProjectClick(project.id, e)}
          >
            <ProjectImage imgUrl={project.imageUrl} />
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectBrief>{project.shortDescription}</ProjectBrief>
              <ProjectLinks>
                {project.githubUrl && (
                  <IconLink href={project.githubUrl} target="_blank" aria-label="GitHub">
                    <FaGithub />
                  </IconLink>
                )}
                {project.demoUrl && (
                  <IconLink href={project.demoUrl} target="_blank" aria-label="Live Demo">
                    <FaExternalLinkAlt />
                  </IconLink>
                )}
                {project.videoUrl && (
                  <IconLink href={project.videoUrl} target="_blank" aria-label="Video Demo">
                    <FaPlay />
                  </IconLink>
                )}
              </ProjectLinks>
            </ProjectInfo>
          </FeaturedProject>
        ))}
      </FeaturedProjectsContainer>
      
      <FeaturedControls>
        {featuredProjectsRef.current.map((project, index) => (
          <ControlDot 
            key={project.id} 
            active={index === activeIndex}
            onClick={() => handleDotClick(index)}
            aria-label={`View featured project ${index + 1}`}
          />
        ))}
      </FeaturedControls>
      
      <ViewAllLink to="/projects">View All Projects</ViewAllLink>
    </>
  );
}; 
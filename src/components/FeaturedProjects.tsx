import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
  height: 340px;
  overflow: hidden;
  padding-top: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    height: auto;
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
  
  &:hover {
    transform: translateY(-10px);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: 0 0 auto;
    width: 100%;
    height: 200px;
    margin: ${({ theme }) => theme.spacing.sm} 0;
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
`;

const ProjectTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.2rem;
`;

const ProjectBrief = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.9rem;
  margin: ${({ theme }) => theme.spacing.xs} 0;
  flex: 1;
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
  bottom: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ControlDot = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
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
`;

const ViewAllLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  position: relative;
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const FeaturedProjects = () => {
  const [featured, setFeatured] = useState<FeaturedProjectState[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Initialize featured projects
  useEffect(() => {
    // Get first 3 featured projects
    const initialFeatured = projectsData
      .filter(project => project.featured)
      .slice(0, 3)
      .map(project => ({ ...project, state: 'stable' as const }));
    
    setFeatured(initialFeatured);
  }, []);

  // Rotate featured projects
  useEffect(() => {
    const rotateFeatured = () => {
      const featuredProjects = projectsData.filter(project => project.featured);
      if (featuredProjects.length <= 3) return;

      const nextIndex = (activeIndex + 1) % featuredProjects.length;
      
      setFeatured(prev => {
        const newFeatured = [...prev];
        // Mark the oldest one as leaving
        newFeatured[0] = { ...newFeatured[0], state: 'leaving' };
        return newFeatured;
      });

      // After animation, replace the leaving one with the new one
      setTimeout(() => {
        setFeatured(prev => {
          const newFeatured = [
            ...prev.slice(1), 
            { ...featuredProjects[nextIndex], state: 'entering' }
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

  // Manual rotation control
  const handleDotClick = (index: number) => {
    if (timeoutRef.current) clearInterval(timeoutRef.current);
    
    const featuredProjects = projectsData.filter(project => project.featured);
    if (index === activeIndex || featuredProjects.length <= 3) return;
    
    // Custom rotation logic
    const rotate = () => {
      setFeatured(prev => {
        const newFeatured = [...prev];
        newFeatured[0] = { ...newFeatured[0], state: 'leaving' };
        return newFeatured;
      });

      setTimeout(() => {
        setFeatured(prev => {
          const newFeatured = [
            ...prev.slice(1), 
            { ...featuredProjects[index], state: 'entering' }
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
        {projectsData
          .filter(project => project.featured)
          .map((project, index) => (
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
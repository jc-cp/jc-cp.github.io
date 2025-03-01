import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';
import { 
  PageTitle, 
  PageContainer, 
  ProjectsGrid, 
  ProjectCard,
  ProjectImage, 
  ProjectLinkButton, 
  ProjectLinksContainer,
  ContentContainer,
  Title,
  Subtitle,
  Tags,
  Tag
} from '../components/SharedStyles';
import { projectsData } from '../data/projectsData';
import { Section } from '../components/layout/Layout';

// Project-specific styled components
const ProjectDescription = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProjectContent = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: ${({ theme }) => theme.spacing.sm} 0;
  flex: 1;
`;

// Filter controls
const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 8px 12px;
  background: ${({ active, theme }) => 
    active ? theme.colors.primary : `${theme.colors.secondary_background.white}CC`};
  color: ${({ active, theme }) => 
    active ? 'white' : theme.colors.text.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: ${({ active }) => active ? '600' : '400'};
  
  &:hover {
    background: ${({ active, theme }) => 
      active ? theme.colors.primary : `${theme.colors.primary}30`};
  }
`;

// Centered components
const CenteredTitle = styled(Title)`
  text-align: center;
`;

const CenteredSubtitle = styled(Subtitle)`
  text-align: center;
`;

const CenteredTags = styled(Tags)`
  justify-content: center;
`;

export const Projects = () => {
  const [filter, setFilter] = useState('all');
  const location = useLocation();
  const projectRefs = useRef<Record<string, HTMLDivElement | null>>({});
  
  // Handle fragment navigation
  useEffect(() => {
    // Get the fragment from the URL (without the #)
    const fragment = location.hash.substring(1);
    
    if (fragment && projectRefs.current[fragment]) {
      // Scroll to the project after a short delay
      setTimeout(() => {
        projectRefs.current[fragment]?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }, [location.hash]);
  
  // Filter projects based on selected tag
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(filter));
  
  // Get unique tags from all projects
  const allTags = Array.from(
    new Set(projectsData.flatMap(project => project.tags))
  ).sort();
  
  return (
    <PageContainer>
      <PageTitle>Projects</PageTitle>

      <Section>
        <h2>My Projects</h2>
        
        <FilterContainer>
          <FilterButton 
            active={filter === 'all'} 
            onClick={() => setFilter('all')}
          >
            All Projects
          </FilterButton>
          {allTags.map(tag => (
            <FilterButton
              key={tag}
              active={filter === tag}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </FilterButton>
          ))}
        </FilterContainer>
        
        <ProjectsGrid>
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id}
              id={project.id}
              ref={(el: HTMLDivElement | null) => projectRefs.current[project.id] = el}
            >
              <ProjectImage imgUrl={project.imageUrl} />
              <ContentContainer>
                <CenteredTitle>{project.title}</CenteredTitle>
                <CenteredSubtitle>{project.shortDescription}</CenteredSubtitle>
                
                <CenteredTags>
                  {project.tags.map(tag => (
                    <Tag key={`${project.id}-${tag}`}>{tag}</Tag>
                  ))}
                </CenteredTags>
                
                <ProjectDescription>
                  <ProjectContent>{project.description}</ProjectContent>
                  <ProjectLinksContainer>
                    {project.githubUrl && (
                      <ProjectLinkButton href={project.githubUrl} target="_blank">
                        <FaGithub /> Code
                      </ProjectLinkButton>
                    )}
                    {project.demoUrl && (
                      <ProjectLinkButton href={project.demoUrl} target="_blank">
                        <FaExternalLinkAlt /> Demo
                      </ProjectLinkButton>
                    )}
                    {project.videoUrl && (
                      <ProjectLinkButton href={project.videoUrl} target="_blank">
                        <FaPlay /> Video
                      </ProjectLinkButton>
                    )}
                  </ProjectLinksContainer>
                </ProjectDescription>
              </ContentContainer>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Section>
    </PageContainer>
  );
}; 
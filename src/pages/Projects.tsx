import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';
import { 
  PageTitle, 
  PageContainer, 
  ProjectsGrid, 
  ProjectCard,
  ProjectImage, 
  ProjectLinkButton, 
  ProjectLinksContainer
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

const ProjectTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.2rem;
`;

const ProjectContent = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: ${({ theme }) => theme.spacing.sm} 0;
  flex: 1;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const ProjectTag = styled.span`
  background: ${({ theme }) => theme.colors.secondary}20;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
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

export const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  // Extract unique tags for filtering
  const allTags = Array.from(
    new Set(projectsData.flatMap(project => project.tags))
  );

  // Apply filtering
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter(project => project.tags.includes(filter))
      );
    }
  }, [filter]);

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
            <ProjectCard key={project.id}>
              <ProjectImage imgUrl={project.imageUrl} />
              <ProjectDescription>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectContent>{project.description}</ProjectContent>
                <ProjectTags>
                  {project.tags.map(tag => (
                    <ProjectTag key={`${project.id}-${tag}`}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
                <ProjectLinksContainer>
                  {project.githubUrl && (
                    <ProjectLinkButton href={project.githubUrl} target="_blank">
                      <FaGithub /> GitHub
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
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Section>
    </PageContainer>
  );
}; 
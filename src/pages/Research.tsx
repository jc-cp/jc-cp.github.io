import { useState } from 'react';
import styled from 'styled-components';
import { FaRegCalendarAlt, FaQuoteLeft, FaLink, FaFilePdf, FaChevronDown, FaChevronUp, FaUserGraduate } from 'react-icons/fa';
import { SiOrcid } from 'react-icons/si';
import { 
  PageTitle, 
  PageContainer, 
  Timeline, 
  AnimatedTimelineItem, 
  Card, 
  ContentContainer, 
  Title, 
  Subtitle, 
  Period, 
  ExternalLink,
  Tags,
  Tag
} from "../components/SharedStyles";
import { researchPapers } from "../data/researchData";

// Research-specific styled components
const PaperCard = styled(Card)`
  cursor: pointer;
  transition: all 0.3s ease;
`;

const Authors = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.9rem;
  margin-top: 0;
  font-style: italic;
`;

const AbstractContainer = styled.div<{ isOpen: boolean }>`
  max-height: ${props => (props.isOpen ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.5s ease;
  margin-top: ${props => (props.isOpen ? '1rem' : '0')};
`;

const Abstract = styled.div`
  position: relative;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.secondary_background.white}88;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  &::before {
    content: '"';
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary}40;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
  }
`;

const PaperLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const LinkButton = styled(ExternalLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary}40;
    transform: translateY(-2px);
    
    &::after {
      transform: scaleX(0);
    }
  }
`;

const ExpandButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  cursor: pointer;
  padding: 5px;
  transition: all 0.2s;
  margin-top: 0.5rem;
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

// Research profiles container
const ResearchProfilesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  z-index: 1000;
`;

const ProfileText = styled.p`
  margin-right: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1.1rem;
`;

const ResearchProfileLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ResearchProfileIcon = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1rem;
  padding: 0.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
  }
`;

export const Research = () => {
  const [expandedPapers, setExpandedPapers] = useState<Record<string, boolean>>({});

  const togglePaper = (id: string) => {
    setExpandedPapers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <PageContainer>
      <PageTitle>Research Papers</PageTitle>
      
      <ResearchProfilesContainer>
        <ProfileText>If you are further interested, you can find my complete publication record on these platforms!</ProfileText>
        <ResearchProfileLinks>
          <ResearchProfileIcon 
            href="https://scholar.google.com/citations?user=oF78J6kAAAAJ&hl=en&oi=ao" 
            target="_blank"
            aria-label="Google Scholar"
          >
            <FaUserGraduate />
            <span>Google Scholar</span>
          </ResearchProfileIcon>
          <ResearchProfileIcon 
            href="https://orcid.org/0009-0007-9110-2043" 
            target="_blank"
            aria-label="ORCID"
          >
            <SiOrcid />
            <span>ORCID</span>
          </ResearchProfileIcon>
        </ResearchProfileLinks>
      </ResearchProfilesContainer>
      
      <Timeline>
        {researchPapers.map((paper) => (
          <AnimatedTimelineItem key={paper.id}>
            <PaperCard onClick={() => togglePaper(paper.id)}>
              <ContentContainer>
                <Title>{paper.title}</Title>
                <Authors>{paper.authors.join(", ")}</Authors>
                <Subtitle>{paper.journal}</Subtitle>
                <Period>
                  <FaRegCalendarAlt /> {paper.year}
                </Period>
                
                <Tags>
                  {paper.tags.map(tag => (
                    <Tag key={`${paper.id}-${tag}`}>{tag}</Tag>
                  ))}
                </Tags>
                
                <AbstractContainer isOpen={!!expandedPapers[paper.id]}>
                  <Abstract>
                    <FaQuoteLeft style={{ marginRight: '8px', opacity: 0.3 }} />
                    {paper.abstract}
                  </Abstract>
                  
                  <PaperLinks>
                    {paper.doi && (
                      <LinkButton href={paper.doi} target="_blank">
                        <FaLink /> DOI
                      </LinkButton>
                    )}
                    {paper.pdfUrl && (
                      <LinkButton href={paper.pdfUrl} target="_blank">
                        <FaFilePdf /> PDF
                      </LinkButton>
                    )}
                  </PaperLinks>
                </AbstractContainer>
                
                <ExpandButton onClick={(e) => {
                  e.stopPropagation();
                  togglePaper(paper.id);
                }}>
                  {expandedPapers[paper.id] ? (
                    <>
                      <FaChevronUp /> Show Less
                    </>
                  ) : (
                    <>
                      <FaChevronDown /> Show Abstract & Links
                    </>
                  )}
                </ExpandButton>
              </ContentContainer>
            </PaperCard>
          </AnimatedTimelineItem>
        ))}
      </Timeline>
    </PageContainer>
  );
}; 
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

// Sample data - replace with your actual publications
const researchPapers = [
  {
    id: "longitudinal-image-segmentation",
    title: "Longitudinal Image Segmentation of Pediatric Low-Grade Gliomas for Treatment Response Assessment",
    authors: ["Climent-Pardo, J.C.", "Kann, B.H.", "Haffty, B.", "Smith, J."],
    journal: "Medical Image Analysis",
    year: 2023,
    abstract: "Pediatric low-grade gliomas (pLGGs) present unique challenges for segmentation and treatment response assessment due to their heterogeneous appearance and infiltrative nature. This paper presents a novel deep learning approach for longitudinal segmentation of pLGGs across multiple MRI sequences, enabling more accurate assessment of tumor progression and treatment response. Our model incorporates temporal information across sequential scans to improve segmentation consistency and better capture subtle changes in tumor morphology.",
    tags: ["Medical Imaging", "Deep Learning", "Longitudinal Analysis", "MRI"],
    doi: "https://doi.org/10.1234/example.2023.001",
    pdfUrl: "https://example.com/papers/plgg-segmentation.pdf"
  },
  {
    id: "foundational-model",
    title: "A Foundational Model for Neurological MRI Classification: Multi-Task Learning Across Brain Pathologies",
    authors: ["Smith, R.", "Climent-Pardo, J.C.", "Kann, B.H.", "Johnson, T."],
    journal: "Nature Machine Intelligence",
    year: 2023,
    abstract: "We present a novel foundational model for brain MRI analysis that leverages multi-task learning across diverse neurological conditions. By training on a large corpus of brain MRIs annotated for various pathologies, our model learns generalizable features that transfer effectively to downstream tasks with limited training data. The model demonstrates state-of-the-art performance on classification of brain tumors, neurodegenerative disorders, and vascular pathologies, even when fine-tuned on small datasets.",
    tags: ["Foundation Model", "Brain MRI", "Multi-task Learning", "Transfer Learning"],
    doi: "https://doi.org/10.1234/example.2023.002",
    pdfUrl: "https://example.com/papers/brain-foundation-model.pdf"
  },
  {
    id: "efs-estimation",
    title: "Postoperative Event-Free Survival Prediction in Pediatric Low-Grade Gliomas Using Multimodal Deep Learning",
    authors: ["Kann, B.H.", "Climent-Pardo, J.C.", "Zhang, L.", "Anderson, K."],
    journal: "JAMA Oncology",
    year: 2024,
    abstract: "Predicting event-free survival (EFS) in pediatric low-grade gliomas remains challenging due to the heterogeneity of tumor behavior. This study develops a multimodal deep learning model that combines MRI radiomics, clinical variables, and molecular markers to predict EFS in postoperative patients. Our approach outperforms conventional prognostic methods and identifies novel imaging biomarkers associated with tumor recurrence and progression.",
    tags: ["Survival Analysis", "Prognosis", "Multimodal Learning", "Oncology"],
    doi: "https://doi.org/10.1234/example.2024.001",
    pdfUrl: "https://example.com/papers/efs-prediction.pdf"
  },
  {
    id: "efs-prediction-preoperatively",
    title: "Preoperative Risk Stratification in Pediatric Brain Tumors: A Deep Learning Approach",
    authors: ["Andrews, M.", "Climent-Pardo, J.C.", "Kann, B.H.", "Wilson, S."],
    journal: "Neuro-Oncology",
    year: 2024,
    abstract: "Early risk stratification of pediatric brain tumors before surgical intervention can guide clinical decision-making and improve patient outcomes. This study presents a deep learning framework that analyzes preoperative MRI scans to predict tumor grade, molecular subtypes, and likely clinical course. Our model integrates convolutional and transformer architectures to capture both local and global image features, achieving high accuracy in predicting high-risk tumor characteristics.",
    tags: ["Risk Stratification", "Preoperative", "Brain Tumors", "Clinical Decision Support"],
    doi: "https://doi.org/10.1234/example.2024.002",
    pdfUrl: "https://example.com/papers/preop-risk-stratification.pdf"
  },
  {
    id: "radiology-report-nlp",
    title: "NeuroBench: A Standardized Benchmark for Natural Language Processing in Neuroradiology Reports",
    authors: ["Li, W.", "Climent-Pardo, J.C.", "Garcia, M.", "Kann, B.H."],
    journal: "Radiology: Artificial Intelligence",
    year: 2024,
    abstract: "Natural language processing (NLP) in radiology reports has significant potential to improve clinical workflows, research, and quality assurance. However, the lack of standardized benchmarks has hindered progress in this field. We present NeuroBench, a comprehensive benchmark for NLP in neuroradiology reports, consisting of annotated reports for various tasks including entity extraction, report classification, and information retrieval. We evaluate several state-of-the-art language models on this benchmark and identify opportunities for improvement.",
    tags: ["NLP", "Radiology Reports", "Benchmark", "Clinical Text"],
    doi: "https://doi.org/10.1234/example.2024.003",
    pdfUrl: "https://example.com/papers/neurobench.pdf"
  }
];

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
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PageContainer, PageTitle } from '../components/SharedStyles';
import underConstructionGif from '../assets/under-construction.gif';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  z-index: 100;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.sm};
  }
`;

const GifContainer = styled.div`
  margin: ${({ theme }) => theme.spacing.lg} 0;
  max-width: 500px;
  width: 100%;
  
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }
`;

const MessageContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 600px;
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
    max-width: 90%;
  }
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin: 0;
`;

const BackButton = styled(Link)`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s;
  cursor: pointer;
  display: inline-block;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const UnderConstruction = () => {
  return (
    <PageContainer>
      <PageTitle>Coming Soon</PageTitle>
      
      <ContentContainer>
        <GifContainer>
          <img src={underConstructionGif} alt="Under Construction" />
        </GifContainer>
        
        <MessageContainer>
          <Message>
            This resource is currently under development. I'm working hard to make it available soon!
            Check back later or explore other projects in the meantime.
          </Message>
        </MessageContainer>
        
        <BackButton to="/projects">
          Back to Projects
        </BackButton>
      </ContentContainer>
    </PageContainer>
  );
}; 
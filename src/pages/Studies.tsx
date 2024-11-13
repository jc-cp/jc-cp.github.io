import styled from 'styled-components';

const StudiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const StudyCard = styled.div`
  background: ${({ theme }) => theme.colors.secondary_background.white};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.xl};
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  &::before {
    content: '';
    position: absolute;
    left: -${({ theme }) => theme.spacing.xl};
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

const Degree = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Institution = styled.h4`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Period = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.9rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const Studies = () => {
  return (
    <StudiesContainer>
      <h1>Academic Background</h1>
      <Timeline>
        <TimelineItem>
          <StudyCard>
            <Degree>M.Sc. in Robotics, Cognition, Intelligence</Degree>
            <Institution>Technical University of Munich</Institution>
            <Period>2021 - 2024</Period>
            <Description>
              Focus on advanced robotics, artificial intelligence, and cognitive systems.
              Research in robot learning and manipulation.
            </Description>
          </StudyCard>
        </TimelineItem>

        <TimelineItem>
          <StudyCard>
            <Degree>B.Sc. in Mechanical Engineering</Degree>
            <Institution>Technical University of Valencia</Institution>
            <Period>2016 - 2021</Period>
            <Description>
              Specialized in robotics and automation. Final thesis on robot control systems.
            </Description>
          </StudyCard>
        </TimelineItem>

        {/* Add more education items as needed */}
      </Timeline>
    </StudiesContainer>
  );
}; 
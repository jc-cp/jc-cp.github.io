import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import tumLogo from '../assets/tum.png';
import kitLogo from '../assets/kit.png';
import dsvLogo from '../assets/dsv.jpg';
import cdtmLogo from '../assets/cdtm.jpg';

const StudiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl}; // Add bottom margin

`;

const StudyCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.secondary_background.white}CC;
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.08);
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.xl};
  overflow: visible;
`;

const TimelinePoint = styled.div`
  position: absolute;
  left: -24px;
  top: 40px;
  width: 12px;
  height: 12px;
  background: #4ECDC4;
  border-radius: 50%;
  z-index: 3;
  transform: translateX(-5px);
  box-shadow: 0 0 0 4px rgba(78, 205, 196, 0.2);
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding-left: ${({ theme }) => theme.spacing.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Icon = styled.div<{ isVisible: boolean }>`
  position: absolute;
  left: -29px;
  top: 40px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: opacity 0.5s ease;
  z-index: 4;
  transform-origin: 7px 0;
  animation: ${props => props.isVisible ? 'orbitPoint 4s linear infinite' : 'none'};
  
  @keyframes orbitPoint {
    from {
      transform: rotate(0deg) translateX(20px) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(20px) rotate(-360deg);
    }
  }
  
  i {
    font-size: 24px;
    color: #FF6B6B;
    filter: drop-shadow(0 0 8px rgba(255, 107, 107, 0.4));
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

const PageTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div<{ zoom?: number }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  img {
    width: ${props => props.zoom ? `${props.zoom}%` : '90%'};
    height: ${props => props.zoom ? `${props.zoom}%` : '90%'};
    object-fit: contain;
  }
`;

const StudyContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.secondary}20;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const InteractiveLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  position: relative;
  padding: 2px 4px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const Achievements = styled.ul`
  margin-top: ${({ theme }) => theme.spacing.sm};
  padding-left: ${({ theme }) => theme.spacing.md};
  
  li {
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    font-size: 0.9rem;
    
    &::marker {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const AnimatedTimelineItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <TimelineItem ref={itemRef}>
      <TimelinePoint />
      <Icon isVisible={isVisible}>
        <i className="fas fa-rocket" />
      </Icon>
      {children}
    </TimelineItem>
  );
};

export const Studies = () => {
  return (
    <StudiesContainer>
      <PageTitle>Academic Journey</PageTitle>
      <Timeline>

        <AnimatedTimelineItem>
          <StudyCard>
            <LogoContainer zoom={120}>
              <img src={cdtmLogo} alt="CDTM Logo" />
            </LogoContainer>
          </StudyCard>
        </AnimatedTimelineItem>

        <AnimatedTimelineItem>
          <StudyCard>
            <LogoContainer zoom={100}>
              <img src={tumLogo} alt="TUM Logo" />
            </LogoContainer>
            <StudyContent>
              <Degree>M.Sc. in Robotics, Cognition, Intelligence</Degree>
              <Institution>Technical University of Munich (TUM)</Institution>
              <Period>2020 - 2024</Period>
              <Description>
                Advanced studies in robotics and AI systems with focus on cognitive architectures.
              </Description>
              <Tags>
                <Tag>Robot Learning</Tag>
                <Tag>Computer Vision</Tag>
                <Tag>Deep Learning</Tag>
                <Tag>Control Systems</Tag>
              </Tags>
              <Achievements>
                <li>
                  Working Student at{' '}
                  <InteractiveLink to="/experience#motius">
                    Motius GmbH
                  </InteractiveLink>
                </li>
                <li>
                  Working Student at{' '}
                  <InteractiveLink to="/experience#tum-mri">
                    Hospital Klinikum rechts der Isar
                  </InteractiveLink>
                </li>
                <li>GPA: 1.9/1.0</li>
                <li>
                  Master Thesis:{' '}
                  <InteractiveLink to="/projects#master-thesis">
                    "Diagnosis and Growth Prognosis of pediatric low-grade gliomas (pLGGs) using AI and MRI"
                  </InteractiveLink>
                </li>
              </Achievements>
            </StudyContent>
          </StudyCard>
        </AnimatedTimelineItem>

        <AnimatedTimelineItem >
          <StudyCard>
            <LogoContainer zoom={100}>
              <img src={kitLogo} alt="KIT Logo" />
            </LogoContainer>
            <StudyContent>
              <Degree>B.Sc. in Mechatronics and Information Technology</Degree>
              <Institution>Karlsruhe Institute of Technology (KIT)</Institution>
              <Period>2015 - 2020</Period>
              <Description>
                Comprehensive foundation in mechatronics: mechanical engineering, electrical engineering, and information technology. Specialization in robotics and medical technology.
              </Description>
              <Tags>
                <Tag>Mechatronics</Tag>
                <Tag>Control Theory</Tag>
                <Tag>CAD Design</Tag>
                <Tag>Fluid Dynamics</Tag>
                <Tag>Manufacturing</Tag>
              </Tags>
              <Achievements>
                <li>Excellence Scholarship Recipient</li>
                <li>
                  Working Student at{' '}
                  <InteractiveLink to="/experience#fraunhofer">
                    Fraunhofer Institute for New Drive Systems(NAS-ICT)
                  </InteractiveLink>
                </li>
                <li>
                  Bachelor Thesis:{' '}
                  <InteractiveLink to="/projects#bachelor-thesis">
                    "Indoor Navigation for unmanned aerial vehicles (UAVs)"
                  </InteractiveLink>
                </li>
              </Achievements>
            </StudyContent>
          </StudyCard>
        </AnimatedTimelineItem>
      
        <AnimatedTimelineItem>
          <StudyCard>
            <LogoContainer>
              <img src={dsvLogo} alt="DSV Logo" />
            </LogoContainer>
            <StudyContent>
              <Degree>High School Diploma (Abitur / A-Levels)</Degree>
              <Institution>German School of Valencia (Deustche Schule Valencia)</Institution>
              <Period>2013 - 2015</Period>
              <Description>
                Focus on Mathematics, Physics, Chemistry, Biology and Economics.
              </Description>
              <Achievements>
                <li> Chemistry Olympiads:
                  <InteractiveLink to="/projects#dsv-thesis">
                    "Regional Participant"
                  </InteractiveLink>
                </li>
              </Achievements>
            </StudyContent>
          </StudyCard>
        </AnimatedTimelineItem>
      
      </Timeline>
    </StudiesContainer>
  );
};
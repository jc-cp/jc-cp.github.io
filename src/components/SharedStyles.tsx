import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef, forwardRef } from 'react';

export const PageTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.white};
  word-break: break-word;
  
  /* Gradient underline */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #FF6B6B, #4ECDC4);
    border-radius: 2px;
    transform-origin: left;
    animation: slideIn 0.8s ease forwards;
  }
  
  /* Subtle background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.secondary_background.white}88;
    backdrop-filter: blur(8px);
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    z-index: -1;
    opacity: 0;
    transform: translateY(10px);
    animation: fadeIn 0.5s ease forwards;
  }
  
  @keyframes slideIn {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
  
  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Add responsive sizing */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    width: 100%;
    text-align: center;
  }
`;

// Timeline Components
export const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: ${({ theme }) => theme.colors.secondary_background.white}88;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    border-radius: 3px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    &::after {
      left: 31px;
    }
  }
`;

export const TimelinePoint = styled.div`
  position: absolute;
  left: -2.5%; /* Center horizontally relative to the timeline */
  top: 50%; /* Position at the vertical center of the card */
  width: 16px; /* Slightly larger */
  height: 16px;
  background: #4ECDC4;
  border-radius: 50%;
  z-index: 3;
  transform: translate(-50%, -50%); /* Center the dot itself both horizontally and vertically */
  box-shadow: 0 0 0 4px rgba(78, 205, 196, 0.2);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    left: 31px; /* Keep the original left position for mobile */
    transform: translateX(-5px); /* Keep original transform for mobile */
    top: 40px; /* Fixed position from top for mobile */
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing.lg};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const AnimatedTimelineItem = forwardRef<HTMLDivElement, { children: React.ReactNode; id?: string }>(
  ({ children, id }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const itemRef = useRef<HTMLDivElement | null>(null);

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
      <TimelineItem 
        ref={(node) => {
          // Forward the ref while maintaining our local ref
          itemRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        id={id}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}
      >
        <TimelinePoint />
        {children}
      </TimelineItem>
    );
  }
);

// Card Components
export const Card = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.secondary_background.white}F2;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

// Content Components
export const ContentContainer = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.3rem;
  }
`;

export const Subtitle = styled.h4`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const Period = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  
  svg {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const Location = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  
  svg {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const PeriodLocation = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

// Logo Components
export const LogoContainer = styled.div<{ zoom?: number }>`
  flex: 0 0 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: white;
  img {
    max-width: 100%;
    max-height: 100px;
    object-fit: contain;
    transform: ${props => props.zoom ? `scale(${props.zoom/100})` : 'scale(1)'};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: 0 0 100px;
    
    img {
      max-height: 80px;
    }
  }
`;

// Tags
export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin: ${({ theme }) => theme.spacing.sm} 0;
`;

export const Tag = styled.span`
  background: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 6px 12px;
    font-size: 0.75rem;
  }
`;

// Links
export const InteractiveLink = styled(Link)`
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

// External URL Link
export const ExternalLink = styled.a`
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

// Lists
export const AchievementsList = styled.ul`
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

// Page Container
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing.md};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    padding: 0 ${({ theme }) => theme.spacing.xs};
  }
`;

// Project component styles
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
    margin-top: ${({ theme }) => theme.spacing.lg};
  }
`;

export const ProjectCard = styled.div`
  background: ${({ theme }) => theme.colors.secondary_background.white}CC;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

export const ProjectImage = styled.div<{ imgUrl: string }>`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

export const ProjectLinkButton = styled(({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: any }) => {
  // Check if the link is internal (starts with '/')
  if (href.startsWith('/')) {
    return <Link to={href} {...props}>{children}</Link>;
  }
  // Otherwise, it's an external link
  return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
})`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 12px 16px;
    width: 100%;
    justify-content: center;
  }
`;

export const ProjectLinksContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
  }
`; 

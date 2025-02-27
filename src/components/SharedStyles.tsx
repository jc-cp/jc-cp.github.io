import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Page Title Component with white background box
export const PageTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  padding: ${({ theme }) => theme.spacing.md};
  position: relative;
  display: inline-block;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.secondary_background.white}F0;
    backdrop-filter: blur(8px);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: -1;
  }
`;

// Timeline Components
export const Timeline = styled.div`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.xl};
  overflow: visible;
  min-height: 100px;
`;

export const TimelinePoint = styled.div`
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

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding-left: ${({ theme }) => theme.spacing.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

// Card Components
export const Card = styled.div`
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

// Content Components
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const Subtitle = styled.h4`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const Period = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.9rem;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

// Logo Components
export const LogoContainer = styled.div<{ zoom?: number }>`
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

// Tags
export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const Tag = styled.span`
  background: ${({ theme }) => theme.colors.secondary}20;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
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
`; 
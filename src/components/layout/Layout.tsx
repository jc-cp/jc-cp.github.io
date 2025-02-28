import { ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ParticlesBackground } from '../ParticlesBackground';
import profileImage from '../../assets/profile.jpg';
import { FeaturedProjects } from '../FeaturedProjects';

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100vw;
  overflow-x: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.nav`
  background: #2c3e50;
  padding: 2rem;
  position: fixed;
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
  z-index: 2;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: auto;
    padding: 1rem;
  }
`;

const SidebarFooter = styled.div`
  color: ${({ theme }) => theme.colors.text.light};
  font-size: 0.9rem;
  text-align: center;
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const MainContent = styled.main`
  grid-column: 2;
  padding: ${({ theme }) => theme.spacing.md};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.text.primary};
  position: relative;
  background: transparent;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-column: 1;
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

const ParticlesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 300px;
  right: 0;
  bottom: 0;
  z-index: 0;
  
  @media (max-width: 768px) {
    left: 0;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const AnimatedNavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.light};
  font-weight: 500;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.secondary};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.light};
    
    &::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  // Active state
  &.active {
    background: ${({ theme }) => theme.colors.secondary};
    &::before {
      transform: scaleX(1);
    }
  }
`;

export const Section = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.secondary_background.white};
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 1;
  
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  h2 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ProfilePicture = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  color: #f0f3bd;
  
  h2 {
    margin: 0;
    font-size: 1.2rem;
  }
  
  p {
    margin: 0.5rem 0 0;
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const CTAButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PrimaryButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: #34495e;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  
  &:hover {
    background: #2c3e50;
  }
`;

const SecondaryButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: transparent;
  color: #ecf0f1;
  border: 1px solid #ecf0f1;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  
  &:hover {
    background: rgba(236, 240, 241, 0.1);
  }
`;

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <LayoutWrapper>
      <Sidebar>
        <ProfileSection>
          <ProfileWrapper>
            <ProfilePicture src={profileImage} alt="JC Climent" />
            <ProfileInfo>
              <h2>JC Climent</h2>
              <p>AI & Robotics Engineer</p>
            </ProfileInfo>
          </ProfileWrapper>
          <SocialLinks>
            {/* Move social links here */}
          </SocialLinks>
        </ProfileSection>
        <NavLinks>
          <AnimatedNavLink to="/">Home</AnimatedNavLink>
          <AnimatedNavLink to="/experience">Experience</AnimatedNavLink>
          <AnimatedNavLink to="/studies">Studies</AnimatedNavLink>
          <AnimatedNavLink to="/projects">Projects</AnimatedNavLink>
          <AnimatedNavLink to="/research">Research</AnimatedNavLink>
          <AnimatedNavLink to="/hobbies">Hobbies</AnimatedNavLink>
          <AnimatedNavLink to="/awards">Awards</AnimatedNavLink>
        </NavLinks>
        <CTAButtons>
          <PrimaryButton as="a" href="#contact">Contact Me</PrimaryButton>
          <SecondaryButton as="a" href="#projects">View My Work</SecondaryButton>
        </CTAButtons>
        <SidebarFooter>
          <p>© 2024 JC Climent. All rights reserved.</p>
          <p>Email: jc.climentpardo@gmail.com | Location: Munich, Germany</p>
        </SidebarFooter>
      </Sidebar>

      <MainContent>
        <ParticlesContainer>
          <ParticlesBackground />
        </ParticlesContainer>
        {children}

        <Section>
          <h2>Featured Projects</h2>
          <p>Showcasing my key projects in AI, robotics, and technology innovation.</p>
          <FeaturedProjects />
        </Section>
      </MainContent>
    </LayoutWrapper>
  );
}; 
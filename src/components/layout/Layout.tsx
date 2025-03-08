import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { ParticlesBackground } from '../ParticlesBackground';
import profileImage from '../../assets/profile.jpg';
import { FeaturedProjects } from '../FeaturedProjects';
import { FaBars, FaTimes } from 'react-icons/fa';

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  overflow-x: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.nav<{ isOpen: boolean }>`
  background: #2c3e50;
  padding: 2rem;
  position: fixed;
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 85%;
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
    padding: 1.5rem 1rem;
  }
`;

const MobileNavToggle = styled.button`
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1001;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SidebarFooter = styled.div`
  color: ${({ theme }) => theme.colors.text.light};
  font-size: 0.9rem;
  text-align: center;
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.8rem;
    padding-top: ${({ theme }) => theme.spacing.sm};
    
    p {
      margin-bottom: 0.5rem;
    }
  }
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
    padding-top: calc(${({ theme }) => theme.spacing.lg} + 30px);
  }
`;

const ParticlesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 300px;
  right: 0;
  bottom: 0;
  z-index: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    padding: 1rem;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ProfilePicture = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100px;
    height: 100px;
  }
`;

const ProfileInfo = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.text.light};
    margin: 0;
    font-size: 1.5rem;
  }
  
  p {
    color: ${({ theme }) => theme.colors.text.light};
    opacity: 0.8;
    margin: 0.5rem 0 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    h2 {
      font-size: 1.3rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const CTAButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const PrimaryButton = styled.button`
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 4px;
  padding: 0.8rem 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  text-decoration: none;
  
  &:hover {
    background: #f8f9fa;
    transform: translateY(-2px);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.7rem 1rem;
    font-size: 0.9rem;
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  padding: 0.8rem 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  text-decoration: none;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.7rem 1rem;
    font-size: 0.9rem;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

// Add this function outside the component
const openEmailClient = (e: React.MouseEvent) => {
  e.preventDefault();
  const email = 'jc.climentpardo@gmail.com';
  const subject = 'Portfolio Contact';
  const body = 'Hello JC,\n\nI visited your portfolio and would like to connect with you regarding...';
  
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const Layout = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <LayoutWrapper>
      <MobileNavToggle onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </MobileNavToggle>
      
      <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
      
      <Sidebar isOpen={isMenuOpen}>
        <ProfileSection>
          <ProfileWrapper>
            <ProfilePicture src={profileImage} alt="JC Climent" />
            <ProfileInfo>
              <h2>JC Climent</h2>
              <p>AI & Robotics Engineer</p>
            </ProfileInfo>
          </ProfileWrapper>
          <SocialLinks>
            {/* Social links here */}
          </SocialLinks>
        </ProfileSection>
        <NavLinks>
          <AnimatedNavLink 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
            onClick={closeMenu}
          >
            Home
          </AnimatedNavLink>
          <AnimatedNavLink 
            to="/experience" 
            className={location.pathname === '/experience' ? 'active' : ''}
            onClick={closeMenu}
          >
            Experience
          </AnimatedNavLink>
          <AnimatedNavLink 
            to="/studies" 
            className={location.pathname === '/studies' ? 'active' : ''}
            onClick={closeMenu}
          >
            Studies
          </AnimatedNavLink>
          <AnimatedNavLink 
            to="/projects" 
            className={location.pathname === '/projects' ? 'active' : ''}
            onClick={closeMenu}
          >
            Projects
          </AnimatedNavLink>
          <AnimatedNavLink 
            to="/research" 
            className={location.pathname === '/research' ? 'active' : ''}
            onClick={closeMenu}
          >
            Research
          </AnimatedNavLink>
          <AnimatedNavLink 
            to="/hobbies" 
            className={location.pathname === '/hobbies' ? 'active' : ''}
            onClick={closeMenu}
          >
            Hobbies
          </AnimatedNavLink>
          <AnimatedNavLink 
            to="/awards" 
            className={location.pathname === '/awards' ? 'active' : ''}
            onClick={closeMenu}
          >
            Awards & Certificates
          </AnimatedNavLink>
        </NavLinks>
        <CTAButtons>
          <PrimaryButton as="a" href="#" onClick={(e) => {
            closeMenu();
            openEmailClient(e);
          }}>
            Contact Me
          </PrimaryButton>
          <SecondaryButton as="a" href="#projects" onClick={closeMenu}>
            View My Work
          </SecondaryButton>
        </CTAButtons>
        <SidebarFooter>
          <p>© 2024 JC Climent. All rights reserved.</p>
          <p>Email: jc.climentpardo@gmail.com</p>
          <p>Location: Munich, Germany</p>
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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.sm};
    
    h2 {
      font-size: 1.4rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  }
`; 
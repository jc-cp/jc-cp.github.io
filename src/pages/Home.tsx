import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaUserGraduate } from 'react-icons/fa';
import { SiMedium, SiOrcid } from 'react-icons/si';
import { Section } from '../components/layout/Layout';
import profileImage from '../assets/profile.jpg';
import constructionGif from '../assets/under-construction.gif';  // Import your GIF

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #4a5568;
  font-size: 1.5rem;
  transition: color 0.2s;

  &:hover {
    color: #2d3748;
  }
`;

const ProfileContainer = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacing.md};
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary} 0%, 
    ${({ theme }) => theme.colors.secondary} 100%
  );
  border-radius: 1rem;
  text-align: center;
  transition: transform 0.3s ease;
  width: 100%;
  max-width: 400px;
  margin: 0 auto ${({ theme }) => theme.spacing.lg} auto;
  z-index: 1;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);

  &:hover {
    transform: translateY(-5px);
  }

  h1 {
    color: ${({ theme }) => theme.colors.text.white};
    font-size: 1.8rem;
    margin: ${({ theme }) => theme.spacing.sm} 0;
  }

  p {
    color: ${({ theme }) => theme.colors.text.white};
    font-size: 1.1rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 90%;
    padding: ${({ theme }) => theme.spacing.sm};
    
    h1 {
      font-size: 1.5rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

const EnhancedProfilePicture = styled(ProfilePicture)`
  width: 180px;
  height: 180px;
  border: 4px solid white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
  }
`;

const EnhancedSocialLinks = styled(SocialLinks)`
  justify-content: center;
  margin-top: 1.5rem;
`;

const EnhancedSocialIcon = styled(SocialIcon)`
  color: white;
  font-size: 1.8rem;
  padding: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #bdc3c7;
    transform: translateY(-3px);
  }
`;


const DisclaimerSection = styled(Section)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const DisclaimerGif = styled.img`
  width: 50px;  // Adjust size as needed
  height: 50px;
  object-fit: contain;
`;

export const Home = () => {
  return (
    <>
      <ProfileContainer>
        <EnhancedProfilePicture 
          src={profileImage} 
          alt="" 
        />
        <h1>Juan Carlos Climent Pardo</h1>
        <p>Robotics & AI Engineer</p>
        
        <EnhancedSocialLinks>
          <EnhancedSocialIcon 
            href="https://linkedin.com/in/juan-carlos-climent-pardo/" 
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </EnhancedSocialIcon>
          <EnhancedSocialIcon 
            href="https://github.com/jc-cp" 
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub />
          </EnhancedSocialIcon>
          <EnhancedSocialIcon 
            href="https://scholar.google.com/citations?user=oF78J6kAAAAJ&hl=en&oi=ao" 
            target="_blank"
            aria-label="Google Scholar"
          >
            <FaUserGraduate />
          </EnhancedSocialIcon>
          <EnhancedSocialIcon 
            href="https://medium.com/@jc.climentpardo" 
            target="_blank"
            aria-label="Medium"
          >
            <SiMedium />
          </EnhancedSocialIcon>
          <EnhancedSocialIcon 
            href="https://orcid.org/0009-0007-9110-2043" 
            target="_blank"
            aria-label="ORCID"
          >
            <SiOrcid />
          </EnhancedSocialIcon>
        </EnhancedSocialLinks>
      </ProfileContainer>

      <Section id="about">
        <h2>About Me</h2>
        <p>
          Hey there! I'm Juan Carlos, or Jc, a Robotics & AI Software Engineer passionate about 
          building revolutionazing solutions in the healthcare and defense space.
        </p>
      </Section>

       <DisclaimerSection>
         <DisclaimerGif 
           src={constructionGif} 
           alt="Under Construction"
         />
         <div>
           <h2>Disclaimer</h2>
           <p>This website is a work in progress right now and is not yet fully functional!</p>
         </div>
       </DisclaimerSection>

    </>
  );
};
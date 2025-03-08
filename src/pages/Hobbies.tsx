import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaPlay, FaCalendarAlt, FaTimes } from 'react-icons/fa';
import { 
  PageTitle, 
  PageContainer,
  Title,
  Tags,
  Tag
} from "../components/SharedStyles";
import { hobbiesData, hobbyCategories, HobbyData } from '../data/hobbiesData';
import { Section } from '../components/layout/Layout';

// Hobby-specific styled components
const HobbiesWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const CategoryTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

const CategoryTab = styled.button<{ active: boolean }>`
  padding: 10px 16px;
  background: ${({ active, theme }) => 
    active ? theme.colors.primary : `${theme.colors.secondary_background.white}CC`};
  color: ${({ active, theme }) => 
    active ? 'white' : theme.colors.text.primary};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: ${({ active }) => active ? '600' : '400'};
  
  &:hover {
    background: ${({ active, theme }) => 
      active ? theme.colors.primary : `${theme.colors.primary}30`};
    transform: translateY(-2px);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 12px 16px;
    font-size: 0.9rem;
    flex-grow: 1;
    text-align: center;
    
    &:hover {
      transform: translateY(-1px);
    }
  }
`;

const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const HobbyCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  background: ${({ theme }) => `${theme.colors.secondary_background.white}CC`};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const HobbyImage = styled.div<{ imgUrl: string }>`
  width: 100%;
  height: 220px;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.7));
  }
  
  ${HobbyCard}:hover & {
    transform: scale(1.05);
  }
`;

const HobbyPeriod = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background: ${({ theme }) => `${theme.colors.primary}CC`};
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 5px;
  z-index: 2;
`;

const HobbyContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`;

const HobbyTitle = styled(Title)`
  margin-top: 0;
  font-size: 1.4rem;
`;

const HobbyDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: ${({ theme }) => theme.spacing.sm} 0;
  line-height: 1.6;
`;

const HobbyActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

// Modal components for detailed view
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing.md};
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.secondary_background.white};
  border-radius: 12px;
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 95%;
    max-height: 85vh;
  }
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: ${({ theme }) => `${theme.colors.primary}CC`};
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const ModalImageBanner = styled.div<{ imgUrl: string }>`
  width: 100%;
  height: 300px;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.7));
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 200px;
  }
`;

const ModalBody = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const ModalTitle = styled.h2`
  margin-top: 0;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ModalDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.8;
  font-size: 1.1rem;
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

const ModalGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const GalleryImage = styled.div<{ imgUrl: string }>`
  width: 100%;
  height: 150px;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

// Add this new styled component for video links
const VideoLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const VideoLinkItem = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  text-decoration: none;
  width: fit-content;
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

export const Hobbies = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedHobby, setSelectedHobby] = useState<HobbyData | null>(null);
  const location = useLocation();
  const hobbyRefs = useRef<Record<string, HTMLDivElement | null>>({});
  
  // Handle fragment navigation
  useEffect(() => {
    const fragment = location.hash.substring(1);
    
    if (fragment && hobbyRefs.current[fragment]) {
      setTimeout(() => {
        hobbyRefs.current[fragment]?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }, [location.hash]);
  
  // Filter hobbies based on selected category
  const filteredHobbies = selectedCategory === 'all' 
    ? hobbiesData 
    : hobbiesData.filter(hobby => hobby.tags.includes(selectedCategory));
  
  // Open modal with selected hobby details
  const openHobbyDetails = (hobby: HobbyData) => {
    setSelectedHobby(hobby);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };
  
  // Close modal
  const closeHobbyDetails = () => {
    setSelectedHobby(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };
  
  return (
    <PageContainer>
      <PageTitle>Hobbies & Interests</PageTitle>
      
      <Section>
        <h2>What I'm Passionate About</h2>
        <p>Beyond my professional life, these are the activities that keep me balanced and inspired.</p>
        
        <HobbiesWrapper>
          <CategoryTabs>
            <CategoryTab 
              active={selectedCategory === 'all'} 
              onClick={() => setSelectedCategory('all')}
            >
              All Interests
            </CategoryTab>
            {hobbyCategories.map(category => (
              <CategoryTab
                key={category}
                active={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </CategoryTab>
            ))}
          </CategoryTabs>
          
          <HobbiesGrid>
            {filteredHobbies.map(hobby => (
              <HobbyCard 
                key={hobby.id}
                id={hobby.id}
                ref={(el: HTMLDivElement | null) => hobbyRefs.current[hobby.id] = el}
              >
                <HobbyImage imgUrl={hobby.imageUrl} />
                <HobbyPeriod>
                  <FaCalendarAlt />
                  {hobby.startYear}{hobby.endYear ? ` - ${hobby.endYear}` : ' - Present'}
                </HobbyPeriod>
                <HobbyContent>
                  <HobbyTitle>{hobby.title}</HobbyTitle>
                  <Tags>
                    {hobby.tags.map(tag => (
                      <Tag key={`${hobby.id}-${tag}`}>{tag}</Tag>
                    ))}
                  </Tags>
                  <HobbyDescription>{hobby.description}</HobbyDescription>
                  <HobbyActions>
                    <ActionButton onClick={() => openHobbyDetails(hobby)}>
                      Learn More
                    </ActionButton>
                    {hobby.videoUrl && (
                      Array.isArray(hobby.videoUrl) ? (
                        <ActionButton onClick={() => openHobbyDetails(hobby)}>
                          <FaPlay /> Watch Videos
                        </ActionButton>
                      ) : (
                        <ActionButton as="a" href={hobby.videoUrl} target="_blank">
                          <FaPlay /> Watch Video
                        </ActionButton>
                      )
                    )}
                  </HobbyActions>
                </HobbyContent>
              </HobbyCard>
            ))}
          </HobbiesGrid>
        </HobbiesWrapper>
      </Section>
      
      {/* Modal for detailed hobby view */}
      {selectedHobby && (
        <ModalOverlay onClick={closeHobbyDetails}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <ModalCloseButton onClick={closeHobbyDetails}>
              <FaTimes />
            </ModalCloseButton>
            <ModalImageBanner imgUrl={selectedHobby.imageUrl} />
            <ModalBody>
              <ModalTitle>{selectedHobby.title}</ModalTitle>
              <Tags>
                {selectedHobby.tags.map(tag => (
                  <Tag key={`modal-${selectedHobby.id}-${tag}`}>{tag}</Tag>
                ))}
              </Tags>
              <ModalDescription>
                {selectedHobby.longDescription || selectedHobby.description}
              </ModalDescription>
              
              {selectedHobby.videoUrl && (
                <>
                  <h3>Videos</h3>
                  <VideoLinksContainer>
                    {Array.isArray(selectedHobby.videoUrl) ? (
                      selectedHobby.videoUrl.map((url, index) => (
                        <VideoLinkItem 
                          key={`video-${index}`} 
                          href={url} 
                          target="_blank"
                        >
                          <FaPlay /> Watch Video {selectedHobby.videoUrl && Array.isArray(selectedHobby.videoUrl) && selectedHobby.videoUrl.length > 1 ? `#${index + 1}` : ''}
                        </VideoLinkItem>
                      ))
                    ) : (
                      <VideoLinkItem href={selectedHobby.videoUrl} target="_blank">
                        <FaPlay /> Watch Video
                      </VideoLinkItem>
                    )}
                  </VideoLinksContainer>
                </>
              )}
              
              {selectedHobby.galleryUrls && selectedHobby.galleryUrls.length > 0 && (
                <>
                  <h3>Gallery</h3>
                  <ModalGallery>
                    {selectedHobby.galleryUrls.map((url, index) => (
                      <GalleryImage 
                        key={`gallery-${index}`}
                        imgUrl={url}
                      />
                    ))}
                  </ModalGallery>
                </>
              )}
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageContainer>
  );
}; 
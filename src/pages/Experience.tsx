import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { PageTitle, PageContainer, Timeline, AnimatedTimelineItem, Card, LogoContainer, ContentContainer, Title, Subtitle, Period, PeriodLocation, Location, Description, Tags, Tag, AchievementsList, InteractiveLink, ExternalLink } from "../components/SharedStyles";
import fraunhoferLogo from "../assets/experience/fraunhofer.jpg";
import mriLogo from "../assets/experience/mritum.png";
import motiusLogo from "../assets/experience/motius.jpeg";
import ryverLogo from "../assets/experience/ryver.png";
import bwhLogo from "../assets/experience/harvard_bwh.png";
import { FaRegCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export const Experience = () => {
  const location = useLocation();
  const experienceRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Handle fragment navigation
  useEffect(() => {
    // Get the fragment from the URL (without the #)
    const fragment = location.hash.substring(1);
    
    if (fragment && experienceRefs.current[fragment]) {
      // Scroll to the experience item after a short delay
      setTimeout(() => {
        experienceRefs.current[fragment]?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }, [location.hash]);

  return (
    <PageContainer>
      <PageTitle>Experience</PageTitle>
      <Timeline>

        {/* Ryver.AI */}
        <AnimatedTimelineItem 
          id="ryver"
          ref={(el: HTMLDivElement | null) => experienceRefs.current["ryver"] = el}
        >
          <Card>
            <LogoContainer zoom={90}>
              <img src={ryverLogo} alt="Ryver.AI Logo" style={{ transform: 'translateX(5px)' }} />
            </LogoContainer>
            <ContentContainer>
              <Title>AI Software Engineer</Title>
              <Subtitle>Ryver.AI</Subtitle>
              <PeriodLocation>
                <Period>
                  <FaRegCalendarAlt />November 2024 - March 2025
                </Period>
                <Location>
                  <FaMapMarkerAlt />
                  Munich, Germany
                </Location>
              </PeriodLocation>
              <Description>
                Rejoined Ryver.AI to work on downstream tasks that show the economic value of the synthetic generated images. Mainly through segmentation algorithms based on nnUNet and Auto3DSeg frameworks.
              </Description>
              <Tags>
                <Tag>Python</Tag>
                <Tag>PyTorch</Tag>
                <Tag>CT Imaging</Tag>
                <Tag>Deep Learning</Tag>
              </Tags>
            </ContentContainer>
          </Card>  
        </AnimatedTimelineItem>
        
        {/* BWH and HMS */}
        <AnimatedTimelineItem 
          id="bwh-hms"
          ref={(el: HTMLDivElement | null) => experienceRefs.current["bwh-hms"] = el}
        >
          <Card>
            <LogoContainer zoom={100}>
              <img src={bwhLogo} alt="BWH Logo" />
            </LogoContainer>
            <ContentContainer>
              <Title>AI Researcher</Title>
              <Subtitle>Brigham and Women's Hospital and Harvard Medical School</Subtitle>
              <PeriodLocation>
                <Period>
                  <FaRegCalendarAlt />April 2023 - October 2024
                </Period>
                <Location>
                  <FaMapMarkerAlt />
                  Boston, MA, USA
                </Location>
              </PeriodLocation>
              <PeriodLocation>
                <Period>
                  <FaRegCalendarAlt />October 2024 - March 2025	
                </Period>
                <Location>
                  <FaMapMarkerAlt />
                  Munich, Germany (remote)
                </Location>
              </PeriodLocation> 
              <Description>
                Worked on several projects related to pediatric neuro-oncology in the <a href="https://aim.hms.harvard.edu/" target="_blank" rel="noopener noreferrer">AI in Medicine (AIM) lab</a>. Supervision of <a href="https://aim.hms.harvard.edu/team/benjamin-kann" target="_blank" rel="noopener noreferrer">MD Benjamin Kann</a>. 
                Find me <a href='https://aim.hms.harvard.edu/team/juan-carlos' target="_blank" rel="noopener noreferrer">here</a>! Main focus was on longitudinal image segmentation and risk factor analysis for tumor growth prediction and response assessment. 
                Other projects included a foundational model for brain-related classification tasks, EFS estimations, and natural language processing of radiology reports. 
              </Description>
              <Tags>
                <Tag>Python</Tag>
                <Tag>PyTorch</Tag>
                <Tag>MR Imaging</Tag>
                <Tag>Biostatistics</Tag>
              </Tags>
            <AchievementsList>
              <li>
                Paper: {''}
                <InteractiveLink to="/research#longitudinal-pLGG-tracking">
                  Longitudinal pLGG 3D Volumetrics
                </InteractiveLink>
              </li>
              <li>
                Paper: {''}
                <InteractiveLink to="/research#foundational-model">
                  MRI Brain Foundational Model
                </InteractiveLink>
              </li>
              <li>
                Paper: {''}
                <InteractiveLink to="/research#efs-divy">
                  EFS Prediction PostOperatively
                </InteractiveLink>
              </li>
              <li>
                Paper: {''}
                <InteractiveLink to="/research#maryam-mahootiha-lgg">
                  EFS Prediction Preoperatively
                </InteractiveLink>
              </li>
              <li>
                Paper: {''}
                <InteractiveLink to="/research#worldmedqa-v">
                  LLM Radiology Report Benchmark
                </InteractiveLink>
              </li>
            </AchievementsList>
            </ContentContainer>
          </Card>
        </AnimatedTimelineItem>

        {/* Ryver.AI */}
        <AnimatedTimelineItem 
          id="ryver-ai-2"
          ref={(el: HTMLDivElement | null) => experienceRefs.current["ryver-ai-2"] = el}
        >
          <Card>
            <LogoContainer zoom={90}>
              <img src={ryverLogo} alt="Ryver.AI Logo" style={{ transform: 'translateX(5px)' }} />
            </LogoContainer>
            <ContentContainer>
              <Title>AI Software Engineer</Title>
              <Subtitle>Ryver.AI</Subtitle>
              <PeriodLocation>
                <Period>
                  <FaRegCalendarAlt />April 2023 - September 2023
                </Period>
                <Location>
                  <FaMapMarkerAlt />
                  Munich, Germany (remote)
                </Location>
              </PeriodLocation>
              <Description>
                Worked on diffusion models for 3D medical image generation. Applied segmentation guidance during the sampling process to incorporate segmentation information without requiring retraining the base model. 
                Evaluated the model on downstream tasks of classification.
              </Description>
              <Tags>
                <Tag>Python</Tag>
                <Tag>PyTorch</Tag>
                <Tag>CT Imaging</Tag>
                <Tag>Deep Learning</Tag>
              </Tags>
            </ContentContainer>
          </Card>  
        </AnimatedTimelineItem>
        
        {/* Motius GmbH */}
        <AnimatedTimelineItem 
          id="motius"
          ref={(el: HTMLDivElement | null) => experienceRefs.current["motius"] = el}
        >
          <Card>
            <LogoContainer zoom={100}>
              <img src={motiusLogo} alt="Motius Logo" />
            </LogoContainer>
            <ContentContainer>
              <Title>Robotics Software Engineer</Title>
              <Subtitle>Motius GmbH</Subtitle>
              <PeriodLocation>
                <Period>
                  <FaRegCalendarAlt />July 2022 - March 2023
                </Period>
                <Location>
                  <FaMapMarkerAlt />
                  Munich, Germany
                </Location>
              </PeriodLocation>
              <Description>
                Developed different ROS2 packages for an autonomous mobile robot for logisitic purposes. Obstacle avoidance and pathplanning, designed robot's safety behavior in the factory, and worked on computer vision tasks for people and points of interest detection.
              </Description>
              <Tags>
                <Tag>ROS</Tag>
                <Tag>Python</Tag>
                <Tag>Computer Vision</Tag>
                <Tag>Path Planning</Tag>
                <Tag>C++</Tag>
              </Tags>
            </ContentContainer>
          </Card>
        </AnimatedTimelineItem>
        
        {/* Klinikum rechts der Isar */}
        <AnimatedTimelineItem 
          id="tum-mri"
          ref={(el: HTMLDivElement | null) => experienceRefs.current["tum-mri"] = el}
        >
          <Card>
            <LogoContainer zoom={100}>
              <img src={mriLogo} alt="Klinikum rechts der Isar Logo" />
            </LogoContainer>
            <ContentContainer>
              <Title>Machine Learning Engineer</Title>
              <Subtitle>Klinikum rechts der Isar</Subtitle>
              <PeriodLocation>
                <Period>
                  <FaRegCalendarAlt />April 2022 - June 2022
                </Period>
                <Location>
                  <FaMapMarkerAlt />
                  Munich, Germany
                </Location>
              </PeriodLocation>
              <Description>
                Worked on a double-head U-Net architecture for classification and segmentation of rib fractures in CT scans. 
                Dataset from MICCAI RibFrac challenge 2020. CT Preprocessing, Anylsis, Model Selection, Training, and Evaluation. 
                Deployed the model in a Docker Image on the Hospital grounds.
              </Description>
              <Tags>
                <Tag>Python</Tag>
                <Tag>TensorFlow</Tag>
                <Tag>Medical Imaging</Tag>
                <Tag>Deep Learning</Tag>
                <Tag>Docker</Tag>s
              </Tags>
              <AchievementsList>
                <li>
                  Project: {''}
                  <InteractiveLink to="/projects#rib-fracture-detection">
                    Rib Fracture Detection
                  </InteractiveLink>
                </li>
              </AchievementsList>
            </ContentContainer> 
          </Card>
        </AnimatedTimelineItem>
        
        {/* Fraunhofer */}
        <AnimatedTimelineItem 
          id="fraunhofer"
          ref={(el: HTMLDivElement | null) => experienceRefs.current["fraunhofer"] = el}
        >
          <Card>
            <LogoContainer zoom={100}>
              <img src={fraunhoferLogo} alt="Fraunhofer Logo" />
            </LogoContainer>
            <ContentContainer>
              <Title>R&D Software Engineer</Title>
              <Subtitle>Fraunhofer Institute for New Drive Systems (NAS-ICT)</Subtitle>
              <PeriodLocation>
                <Period>
                  <FaRegCalendarAlt />April 2019 - January 2020
                </Period>
                <Location>
                  <FaMapMarkerAlt />
                  Karlsruhe, Germany
                </Location>
              </PeriodLocation>
              <Description>Research and developement of a data collection pipeline for electrical vehicles. Focus on automation and generalizability to as many charging stations as possible. Automatized a server-based data collection procedure
                 from an electric charging station through an UDP protocol. Set up a backend for multi-logging purposes based on PostgreSQL. Visualizations with Python and Grafana.
              </Description>
              <Tags>
                <Tag>Software Engineering</Tag>
                <Tag>Data Analysis</Tag>
                <Tag>Python</Tag>
                <Tag>SQL</Tag>
              </Tags>
              <AchievementsList>
                <li>
                  Website: {''}
                  <ExternalLink href="https://www.ict.fraunhofer.de/de/komp/nas.html">
                    Fraunhofer NAS-ICT
                  </ExternalLink>
                </li>
              </AchievementsList>
            </ContentContainer>
          </Card>
        </AnimatedTimelineItem>
      
      </Timeline>
    </PageContainer>
  );
}; 
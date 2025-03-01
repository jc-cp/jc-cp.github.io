import tumLogo from '../assets/studies/tum.png';
import kitLogo from '../assets/studies/kit.png';
import dsvLogo from '../assets/studies/dsv.jpg';
import cdtmLogo from '../assets/studies/cdtm.jpg';
import beaLogo from '../assets/studies/bea.jpeg';
import uclLogo from '../assets/studies/ucl.png';
import harvardLogo from '../assets/studies/harvard.png';
import {
  PageContainer,
  PageTitle,
  Timeline,
  AnimatedTimelineItem,
  Card,
  LogoContainer,
  ContentContainer,
  Title,
  Subtitle,
  Period,
  Description,
  Tags,
  Tag,
  Location,
  PeriodLocation,
  InteractiveLink,
  ExternalLink,
  AchievementsList,
} from '../components/SharedStyles';
import { FaRegCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';


export const Studies = () => {
  return (
    <PageContainer>
      <PageTitle>Academic Journey</PageTitle>
      <Timeline>

        {/* Harvard Exprience */}
        <AnimatedTimelineItem id="harvard">
          <Card>
            <LogoContainer zoom={90}>
              <img src={harvardLogo} alt="Harvard Logo" />
            </LogoContainer>
            <ContentContainer>
              <Title>Research Fellowship</Title>
              <Subtitle>Harvard University</Subtitle>
              <PeriodLocation>
                <Period>
                  <FaRegCalendarAlt />2023-2024
                </Period>
                <Location>
                  <FaMapMarkerAlt />
                  Boston, MA, USA
                </Location>
              </PeriodLocation>
              <Description>
                1.5 years research stay at the AI in Medicine (AIM) Lab. Focus on clinical and radiation neuro-oncology, medical image analysis, and deep learning.
              </Description>
              <Tags>
                <Tag>Clinical / Radiation Oncology</Tag>
                <Tag>Medical Imaging (MRI)</Tag>
                <Tag>DL/ML</Tag>
              </Tags>
              <AchievementsList>
                <li>
                  Working experience: Associated with the research at Brigham and Women's Hospital and Harvard Medical School.
                </li>
                <li>
                  Courses: Foundations of Biomedical Informatics (BMI 701), Computational Statistics for Biomedical Sciences (BMI 715), Applied Biostatistics (Harvard Catalyst), Harvard Clinical Informatics Lecture Series (HCLS), Natural Language Processing (HMX)
                </li>
                <li>
                  Activities: <a href="https://soco.college.harvard.edu/257641/home/" target="_blank" rel="noopener noreferrer">Harvard Swimming Club</a>, AI in Healthcare Student Association
                </li>
              </AchievementsList>
            </ContentContainer>
          </Card>
        </AnimatedTimelineItem>

        {/* UCL Exprience */}
        <AnimatedTimelineItem id="ucl">
          <Card>
            <LogoContainer zoom={110}>
              <img src={uclLogo} alt="UCL Logo" />
            </LogoContainer>
            <ContentContainer>
              <Title>Medical Imaging Computing Summer School (MICSS)</Title>
              <Subtitle>University College London (UCL)</Subtitle>
              <PeriodLocation>
                <Period>
                  <FaRegCalendarAlt />2024
                </Period>
                <Location>
                  <FaMapMarkerAlt />
                  London, UK (remote from the US)
                </Location>
              </PeriodLocation>
              <Description>
                Intensive course on medical image analysis, medical informatics, robotics, and machine learning.
              </Description>
              <Tags>
                <Tag>Medical Image Analysis</Tag>
                <Tag>Medical Informatics</Tag>
                <Tag>Robotics</Tag>
                <Tag>Machine Learning</Tag>
              </Tags>
            </ContentContainer>
          </Card>
        </AnimatedTimelineItem>
          
        {/* BEA Exprience */}
        <AnimatedTimelineItem id="bea">
          <Card>
            <LogoContainer zoom={70}>
              <img src={beaLogo} alt="BEA Logo" />
            </LogoContainer>
            <ContentContainer>
              <Title>Honors Degree: Leadership, Management, Responsibility</Title>
              <Subtitle>Bavarian Elite Academy (BEA)</Subtitle>
              <PeriodLocation>
                <Period>
                  <FaRegCalendarAlt />2022 - 2024
                </Period>
                <Location>
                  <FaMapMarkerAlt />
                  Munich, Germany
                </Location>
              </PeriodLocation>
              <Description>
                Add-on training program that supports 35 outstanding, high-achieving students from Bavarian universities in their development into responsible leaders, with academies abroad in Israel and Brussels and accompanied by high-ranking mentors from the business world. Part of the 24th academic year.
              </Description>
              <Tags>
                <Tag>Leadership</Tag>
                  <Tag>Management</Tag>
                  <Tag>Responsibility</Tag>
                  <Tag>Video Production</Tag>
                </Tags>
                <AchievementsList>
                  <li>
                    Project: {''}
                    <InteractiveLink to="/hobbies#bea-video-production">
                      "Promotion Video Production"
                    </InteractiveLink>
                  </li>
                  <li>
                    Project: {''}
                    <InteractiveLink to="/hobbies#outdoor-video-production">
                      "Outdoor Video Production"
                    </InteractiveLink>
                  </li>

                </AchievementsList>
              </ContentContainer>
          </Card>
        </AnimatedTimelineItem>

        {/* CDTM Exprience */}
        <AnimatedTimelineItem id="cdtm">
          <Card>
            <LogoContainer zoom={100}>
              <img src={cdtmLogo} alt="CDTM Logo" />
            </LogoContainer>
            <ContentContainer>
              <Title>Honors Degree: Technology Management</Title>
              <Subtitle>Center for Digital Technology and Management (CDTM)</Subtitle>
              <PeriodLocation>
                <Period>
                  <FaRegCalendarAlt />2022 - 2023
                </Period>
                <Location>
                  <FaMapMarkerAlt />
                  Munich, Germany
                </Location>
              </PeriodLocation>
              <Description>
                The CDTM is a joint institution of the Ludwig Maximilian University of Munich (LMU) and the Technical University of Munich (TUM) offering the interdisciplinary add-on study program "Technology Management" as part of the Elite-Network of Bavaria.
                Focus on trend research, product development, and business strategy with the goal of becoming a technology entrepreneur.
              </Description>
              <Tags>
                <Tag>Trend Research</Tag>
                <Tag>Product Development</Tag>
                <Tag>Business Strategy</Tag>
              </Tags>
              <AchievementsList>
                <li>
                  Research:
                  <InteractiveLink to="/research#trend-report-cdtm">
                    Trend Report -- "Tackling Climate Change in the AI Era"
                  </InteractiveLink>
                </li>
                <li>
                  Project:
                  <InteractiveLink to="/projects#cdtm-product-development">
                    Product Development -- "Akina: AI-powered car matching tool"
                  </InteractiveLink>
                </li>
                <li>
                  Project:
                  <InteractiveLink to="/projects#cdtm-business-strategy">
                    Business Strategy -- "US Market Entry for an Austrian startup"
                  </InteractiveLink>
                </li>
              </AchievementsList>
            </ContentContainer>
          </Card>
        </AnimatedTimelineItem>

        {/* TUM Exprience */}
        <AnimatedTimelineItem id="tum">
          <Card>
            <LogoContainer zoom={100}>
              <img src={tumLogo} alt="TUM Logo" />
            </LogoContainer>
            <ContentContainer>
              <Title>M.Sc. in Robotics, Cognition, Intelligence</Title>
              <Subtitle>Technical University of Munich (TUM)</Subtitle>
              <PeriodLocation>
                <Period>
                  <FaRegCalendarAlt />2020 - 2024
                </Period>
                <Location>
                  <FaMapMarkerAlt />
                  Munich, Germany
                </Location>
              </PeriodLocation>
              <Description>
                Advanced studies in robotics and AI systems with focus on cognitive architectures.
              </Description>
              <Tags>
                <Tag>Robot Learning</Tag>
                <Tag>Computer Vision</Tag>
                <Tag>Deep Learning</Tag>
                <Tag>Control Systems</Tag>
              </Tags>
              <AchievementsList>
                <li>
                  Research: {''}
                  <InteractiveLink to="/research#few-shot-image-synthesis">
                    "Few-shot Image Synthesis"
                  </InteractiveLink>
                </li>
                <li>
                  Working Student:{' '}
                  <InteractiveLink to="/experience#ryver-ai-2">
                    Ryver.ai GmbH
                  </InteractiveLink>
                </li>
                <li>
                  Working Student:{' '}
                  <InteractiveLink to="/experience#motius">
                    Motius GmbH
                  </InteractiveLink>
                </li>
                <li>
                  Working Student:{' '}
                  <InteractiveLink to="/experience#tum-mri">
                    Hospital Klinikum rechts der Isar
                  </InteractiveLink>
                </li>
                <li>
                  Master Thesis:{' '}
                  <InteractiveLink to="/projects#master-thesis">
                    "Diagnosis and Growth Prognosis of pediatric low-grade gliomas (pLGGs) using AI and MR Imaging"
                  </InteractiveLink>
                </li>
              </AchievementsList>
            </ContentContainer>
          </Card>
        </AnimatedTimelineItem>

        {/* KIT Exprience */}
        <AnimatedTimelineItem id="kit">
          <Card>
            <LogoContainer zoom={100}>
              <img src={kitLogo} alt="KIT Logo" />
            </LogoContainer>
            <ContentContainer>
              <Title>B.Sc. in Mechatronics and Information Technology</Title>
              <Subtitle>Karlsruhe Institute of Technology (KIT)</Subtitle>
              <PeriodLocation>
                <Period>
                  <FaRegCalendarAlt />2015 - 2020
                </Period>
                <Location>
                  <FaMapMarkerAlt />
                  Karlsruhe, Germany
                </Location>
              </PeriodLocation>
              <Description>
                Comprehensive foundation in mechatronics: mechanical engineering, electrical engineering, and information technology. Specialization in robotics and medical technology.
              </Description>
              <Tags>
                <Tag>Mechatronics</Tag>
                <Tag>Control Theory</Tag>
                <Tag>CAD Design</Tag>
                <Tag>PCB Design</Tag>
                <Tag>Carbon Fiber Manufacturing</Tag>
              </Tags>
              <AchievementsList>
                <li>Award: {''}
                  <InteractiveLink to="/awards#studienstiftung">
                    German Academic Scholarship Foundation
                  </InteractiveLink>
                </li>
                <li>
                  Project: {''}
                  <InteractiveLink to="/projects#ka-raceing">
                    Formula Student Team Lead at KA-RaceIng e.V.
                  </InteractiveLink>
                </li>
                <li>
                  Project: {''}
                  <InteractiveLink to="/projects#grow-founding-contest">
                    Sensus Tech -- GROW Founding Contest Finalist 
                  </InteractiveLink>
                </li>
                <li>
                  Working Student:{' '}
                  <InteractiveLink to="/experience#fraunhofer">
                    Fraunhofer Institute for New Drive Systems (NAS-ICT)
                  </InteractiveLink>
                </li>
                <li>
                   Activities: {''}
                  <InteractiveLink to="/hobbies#triathlon">
                    University Triathlon Team -- Karlsruher Lemminge
                  </InteractiveLink>
                </li>
                <li>
                  Bachelor Thesis:{' '}
                  <InteractiveLink to="/projects#bachelor-thesis">
                    "Indoor Navigation for unmanned aerial vehicles (UAVs)"
                  </InteractiveLink>
                </li>
              </AchievementsList>
            </ContentContainer>
          </Card>
        </AnimatedTimelineItem>
      
        {/* DSV Exprience */}
        <AnimatedTimelineItem id="dsv">
          <Card>
            <LogoContainer>
              <img src={dsvLogo} alt="DSV Logo" />
            </LogoContainer>
            <ContentContainer>
              <Title>High School Diploma (Abitur / A-Levels)</Title>
              <Subtitle>German School of Valencia (Deustche Schule Valencia)</Subtitle>
              <PeriodLocation>
                <Period>
                  <FaRegCalendarAlt />2013 - 2015
                </Period>
                <Location>
                  <FaMapMarkerAlt />                                                                                                    Valencia, Spain
                </Location>
              </PeriodLocation>
              <Description>
                Focus on Mathematics, Physics, Chemistry, Biology and Economics.
              </Description>
              <AchievementsList>
                <li> Competition:
                  <ExternalLink href="https://www.ichosc.org/">
                    Chemistry Regional Olympiads
                  </ExternalLink>
                </li>
                <li> Competition:{' '}
                  <ExternalLink href="https://www.jugend-forscht.de/">
                  Youth Researches (Jugend Forscht)
                  </ExternalLink>
                </li>
                <li>
                  Competition: {' '}
                  <ExternalLink href="https://www.jugend-debattiert.de/">
                  Youth Debates (Jugend Debattiert)
                  </ExternalLink>
                </li>
                <li>
                  Activities: Orchestral Musician, Basketball Player
                </li>

              </AchievementsList>
            </ContentContainer>
          </Card>
        </AnimatedTimelineItem>
      
      </Timeline>
    </PageContainer>
  );
};
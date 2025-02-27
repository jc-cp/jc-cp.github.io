import { useState, useRef, useEffect } from 'react';
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
  TimelinePoint,
  TimelineItem,
  Card,
  LogoContainer,
  ContentContainer,
  Title,
  Subtitle,
  Period,
  Description,
  Tags,
  Tag,
  InteractiveLink,
  AchievementsList,
} from '../components/SharedStyles';

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
      {children}
    </TimelineItem>
  );
};

export const Studies = () => {
  return (
    <PageContainer>
      <PageTitle>Academic Journey</PageTitle>
      <Timeline>
        <AnimatedTimelineItem>
          <Card>
            <LogoContainer zoom={90}>
              <img src={harvardLogo} alt="Harvard Logo" />
            </LogoContainer>
            <ContentContainer>
              <Title>Visting Researcher</Title>
              <Subtitle>Harvard University</Subtitle>
              <Period>2023-2024</Period>
              <Description>
                1.5 years research stay with focus on clinical and radiation neuro-oncology, medical image analysis, and deep learning.
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
                  Activities: Harvard Swimming Club, AI in Healthcare Student Association
                </li>
              </AchievementsList>
            </ContentContainer>
          </Card>
        </AnimatedTimelineItem>

        <AnimatedTimelineItem>
          <Card>
            <LogoContainer zoom={110}>
              <img src={uclLogo} alt="UCL Logo" />
            </LogoContainer>
            <ContentContainer>
              <Title>Medical Imaging Computing Summer School (MICSS)</Title>
              <Subtitle>University College London (UCL)</Subtitle>
              <Period>2024</Period>
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
          
        <AnimatedTimelineItem>
          <Card>
            <LogoContainer zoom={70}>
              <img src={beaLogo} alt="BEA Logo" />
            </LogoContainer>
            <ContentContainer>
              <Title>Honors Degree: Leadership, Management, Responsibility</Title>
              <Subtitle>Bavarian Elite Academy (BEA)</Subtitle>
                <Period>2022 - 2024</Period>
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
                    <InteractiveLink to="/projects#bea-video-production">
                      "Promotion Video Production"
                    </InteractiveLink>
                  </li>
                  <li>
                    Project: {''}
                    <InteractiveLink to="/projects#bea-video-production">
                      "Outdoor Video Production"
                    </InteractiveLink>
                  </li>

                </AchievementsList>
              </ContentContainer>
          </Card>
        </AnimatedTimelineItem>

        <AnimatedTimelineItem>
          <Card>
            <LogoContainer zoom={100}>
              <img src={cdtmLogo} alt="CDTM Logo" />
            </LogoContainer>
            <ContentContainer>
              <Title>Honors Degree: Technology Management</Title>
              <Subtitle>Center for Digital Technology and Management (CDTM)</Subtitle>
              <Period>2022 - 2023</Period>
              <Description>
                The CDTM is a joint institution of the Ludwig Maximilian University of Munich (LMU) and the Technical University of Munich (TUM) offering the interdisciplinary add-on study program „Technology Management“ as part of the Elite-Network of Bavaria.
                Focus on trend research, product development, and business strategy with the goal of becoming a technology entrepreneur.
              </Description>
              <Tags>
                <Tag>Trend Research</Tag>
                <Tag>Product Development</Tag>
                <Tag>Business Strategy</Tag>
              </Tags>
              <AchievementsList>
                <li>
                  Project on Trend Research:
                  <InteractiveLink to="/projects#cdtm-trend-research">
                    "The future of AI and Climate Change"
                  </InteractiveLink>
                </li>
                <li>
                  Project on Product Development:
                  <InteractiveLink to="/projects#cdtm-product-development">
                    "Akina: AI-powered car matching tool"
                  </InteractiveLink>
                </li>
                <li>
                  Project on Business Strategy:
                  <InteractiveLink to="/projects#cdtm-business-strategy">
                    "US Market Entry for an Austrian startup"
                  </InteractiveLink>
                </li>
              </AchievementsList>
            </ContentContainer>
          </Card>
        </AnimatedTimelineItem>

        <AnimatedTimelineItem>
          <Card>
            <LogoContainer zoom={100}>
              <img src={tumLogo} alt="TUM Logo" />
            </LogoContainer>
            <ContentContainer>
              <Title>M.Sc. in Robotics, Cognition, Intelligence</Title>
              <Subtitle>Technical University of Munich (TUM)</Subtitle>
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
              <AchievementsList>
                <li>
                  Working Student at{' '}
                  <InteractiveLink to="/experience#ryver">
                    Ryver.ai GmbH
                  </InteractiveLink>
                </li>
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

        <AnimatedTimelineItem>
          <Card>
            <LogoContainer zoom={100}>
              <img src={kitLogo} alt="KIT Logo" />
            </LogoContainer>
            <ContentContainer>
              <Title>B.Sc. in Mechatronics and Information Technology</Title>
              <Subtitle>Karlsruhe Institute of Technology (KIT)</Subtitle>
              <Period>2015 - 2020</Period>
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
                    "Formula Student Team Lead KA-RaceIng e.V."
                  </InteractiveLink>
                </li>
                <li>
                  Working Student at{' '}
                  <InteractiveLink to="/experience#fraunhofer">
                    Fraunhofer Institute for New Drive Systems (NAS-ICT)
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
      
        <AnimatedTimelineItem>
          <Card>
            <LogoContainer>
              <img src={dsvLogo} alt="DSV Logo" />
            </LogoContainer>
            <ContentContainer>
              <Title>High School Diploma (Abitur / A-Levels)</Title>
              <Subtitle>German School of Valencia (Deustche Schule Valencia)</Subtitle>
              <Period>2013 - 2015</Period>
              <Description>
                Focus on Mathematics, Physics, Chemistry, Biology and Economics.
              </Description>
              <AchievementsList>
                <li> Competition:
                  <InteractiveLink to="/projects#dsv-olympiads">
                    Chemistry Regional Olympiads
                  </InteractiveLink>
                </li>
                <li> Competition:{' '}
                  <InteractiveLink to="/experience#dsv-jugend">
                  Youth Researches (Jugend Forscht)
                  </InteractiveLink>
                </li>
                <li>
                  Competition: {' '}
                  <InteractiveLink to="/experience#dsv">
                  Youth Debates (Jugend Debattiert)
                  </InteractiveLink>
                </li>
              </AchievementsList>
            </ContentContainer>
          </Card>
        </AnimatedTimelineItem>
      
      </Timeline>
    </PageContainer>
  );
};
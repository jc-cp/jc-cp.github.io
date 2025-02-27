import { PageTitle, PageContainer, Timeline, TimelineItem, Card, LogoContainer, ContentContainer, Title, Subtitle, Period, Description, Tags, Tag, AchievementsList, InteractiveLink } from "../components/SharedStyles";
import fraunhoferLogo from "../assets/experience/fraunhofer.jpg";

export const Experience = () => {
  return (
    <PageContainer>
      <PageTitle>Experience</PageTitle>
      <Timeline>
        <TimelineItem>
          <Card>
            <LogoContainer zoom={100}>
              <img src={fraunhoferLogo} alt="Fraunhofer Logo" />
            </LogoContainer>
            <ContentContainer>
              <Title>Data Science Engineer</Title>
              <Subtitle>Fraunhofer Institute for New Drive Systems (NAS-ICT)</Subtitle>
              <Period>2019 - 2020</Period>
              <Description>
                Developed a data pipeline for the analysis of electrical vehicle data. Through UDP protocol, the data was collected from the charging station and was logged into a an SQL database. Visualized the data with Python and Grafana.
              </Description>
              <Tags>
                <Tag>Software Engineering</Tag>
                <Tag>Cloud Computing</Tag>
                <Tag>Machine Learning</Tag>
              </Tags>
              <AchievementsList>
                <li>
                  Project:
                  <InteractiveLink to="/projects#google-search">
                    Google Search
                  </InteractiveLink>
                </li>
              </AchievementsList>
            </ContentContainer>
          </Card>
        </TimelineItem>
      </Timeline>
    </PageContainer>
  );
}; 
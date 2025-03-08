import { PageTitle, InteractiveLink } from "../components/SharedStyles";
import styled from "styled-components";
import sdvImage from '../assets/awards/sdv.png';
import gdchImage from '../assets/awards/GDCh.png';
import PERImage from '../assets/awards/PER.png';
import dlImage from '../assets/awards/deeplearning-ai-logo.png';
import fulbrightImage from '../assets/awards/fulbright-sp-logo-2.png';
import daadImage from '../assets/awards/DAAD.jpeg';
import bwhImage from '../assets/awards/BWH_spotlight.png';
import rhodeImage from '../assets/awards/rhode.png';
import mlpImage from '../assets/awards/MLP.jpeg';
import hansRudolfImage from '../assets/awards/HR.png';
import citiImage from '../assets/awards/CITI.png';

// Styled components for the Awards page
const AwardsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const AwardsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const AwardCard = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 1;
  margin-bottom: 20px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const AwardImage = styled.img<{ zoom?: number }>`
  width: 100%;
  height: 200px;
  object-fit: contain;
  object-position: center;
  padding: 10px;
  transform: ${props => `scale(${props.zoom ? props.zoom/100 : 1})`};
  background-color: white;
`;

const AwardContent = styled.div`
  padding: 20px;
`;

const AwardTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.4rem;
  color: #333;
`;

const AwardDate = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 10px;
`;

const AwardDescription = styled.p`
  margin-bottom: 15px;
  line-height: 1.5;
`;

const AwardLink = styled.a`
  display: inline-block;
  color: #0077cc;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const RelatedInfo = styled.div`
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #eaeaea;
  font-size: 0.9rem;
`;



export const Awards = () => {
  // Sample awards data - replace with your actual awards
  const awardsData = [
    {
      id: 13,
      title: "Hans-Rudolf Scholarship",
      date: "2023 - 2024",
      description: "Received the Hans-Rudolf Scholarship for the research fellowship at the AI in Medicine Lab at Harvard Medical School.",
      imageUrl: hansRudolfImage,
      imageZoom: 100, // Custom zoom level (80%)
      link: "https://www.rohde-stiftung.de/de/foerderungen.html",
      relatedTo: "Research Fellowship at Harvard Medical School",
      relatedLink: "/studies#harvard"
    },
    {
      id: 12,
      title: "DAAD IFI Scholarship",
      date: "2023 - 2024",
      description: "Received the DAAD IFI Scholarship for the research fellowship at the AI in Medicine Lab at Harvard Medical School.",
      imageUrl: daadImage,
      imageZoom: 130, // Custom zoom level (80%)
      link: "https://www.daad.de/de/im-ausland-studieren-forschen-lehren/forschen-im-ausland/ifi/",
      relatedTo: "Research Fellowship at Harvard Medical School",
      relatedLink: "/studies#harvard"
    },
    {
      id: 12,
      title: "CITI Training Certificate",
      date: "2023",
      description: "Completed the CITI Training Certificate for Biomedical Investigators and Key Personnel HSP.",
      imageUrl: citiImage,
      imageZoom: 130, // Custom zoom level (80%)
      link: "https://www.citiprogram.org/verify/?wccf4c004-ade5-431f-bb22-44726672c6e4-55689792",
      relatedTo: "AI Research at BWH",
      relatedLink: "/experience#bwh"
    },
    {
      id: 11,
      title: "CITI Training Certificate",
      date: "2023",
      description: "Completed the CITI Training Certificate for Good Clinical Practice (GCP) for Clinical Research.",
      imageUrl: citiImage,
      imageZoom: 130, // Custom zoom level (80%)
      link: "https://www.citiprogram.org/verify/?w14f0ffe9-2c37-4c40-9d53-4db670e92a38-55689793",
      relatedTo: "AI Research at BWH",
      relatedLink: "/experience#bwh"
    },
    {
      id: 9,
      title: "Rhode Scholarship",
      date: "2023",
      description: "Received the Rhode Scholarship for the research fellowship at the AI in Medicine Lab at Harvard Medical School.",
      imageUrl: rhodeImage,
      imageZoom: 120, // Custom zoom level (80%)
      link: "https://www.rohde-stiftung.de/de/foerderungen.html",
      relatedTo: "Research Fellowship at Harvard Medical School",
      relatedLink: "/studies#harvard"
    },
    {
      id: 8,
      title: "MLP Scholarship",
      date: "2023",
      description: "Received the MLP Scholarship for the research fellowship at the AI in Medicine Lab at Harvard Medical School.",
      imageUrl: mlpImage,
      imageZoom: 90, // Custom zoom level (80%)
      link: "https://mlp-financify.de/mlp-stipendienprogramm/",
      relatedTo: "Research Fellowship at Harvard Medical School",
      relatedLink: "/studies#harvard"
    },
    {
      id: 7,
      title: "BWH Spotlight Award",
      date: "2023",
      description: "Received the BWH Spotlight Award for the joint work at the AI in Medicine Lab at Harvard Medical School.",
      imageUrl: bwhImage,
      imageZoom: 100, // Custom zoom level (80%)
      link: "https://www.discoverbrigham.org/wp-content/uploads/2023/06/Spotlight-Awards.pdfb",
      relatedTo: "AI Research at BWH",
      relatedLink: "/experience#bwh"
    },
    {
      id: 6,
      title: "DAAD PROMOS Scholarship",
      date: "2023",
      description: "Received the DAAD PROMOS Scholarship to become a research fellow at the AI in Medicine Lab at Harvard Medical School.",
      imageUrl: daadImage,
      imageZoom: 130, // Custom zoom level (80%)
      link: "https://www.daad.de/de/infos-services-fuer-hochschulen/weiterfuehrende-infos-zu-daad-foerderprogrammen/promos/",
      relatedTo: "Research Fellowship at Harvard Medical School",
      relatedLink: "/studies#harvard"
    },
    {
      id: 5,
      title: "Fulbright Travel Scholarship",
      date: "2023",
      description: "Received the Fulbright Travel Scholarship to become a research fellow at Harvard University.",
      imageUrl: fulbrightImage,
      imageZoom: 100, // Custom zoom level (80%)
      link: "https://fulbright.de/en/grants/program/fulbright-scholar-grant-including-inter-country-travel-grant",
      relatedTo: "Research Fellowship at Harvard University",
      relatedLink: "/studies#harvard"
    },
    {
      id: 4,
      title: "AI for Medical Diagnosis",
      date: "2023",
      description: "Completed the online course presented by DeepLearning.AI for Medical Diagnosis course.",
      imageUrl: dlImage,
      imageZoom: 100, // Custom zoom level (80%)
      link: "https://www.coursera.org/account/accomplishments/certificate/UMEHSZHTBNJV",
      relatedTo: "M. Sc. in Robotics, Cognition, Intelligence",
      relatedLink: "/studies#tum"
    },   
    {
      id: 3,
      title: "Recreational Yachts Skipper",
      date: "2022",
      description: "Completed the recreational yachts skipper formation for which I am allowed to sail within 12 miles from the coast and 24m long vessels.",
      imageUrl: PERImage,
      imageZoom: 100, // Custom zoom level (90%)
      link: "https://www.transportes.gob.es/marina-mercante/titulaciones/titulaciones-de-recreo/titulos/patron-de-embarcaciones-recreo/patron-de-embarcaciones-de-recreo-per",
      relatedTo: "Hobbies -- Sailing",
      relatedLink: "/hobbies#sailing"
    },
    {
      id: 2,
      title: "German Academic Foundation Scholarship",
      date: "2015-2018",
      description: "Received the German Academic Foundation Scholarship (Studienstiftung des Deutschen Volkes) during my Bachelor's.",
      imageUrl: sdvImage,
      imageZoom: 110, // Custom zoom level (110%)
      link: "https://www.studienstiftung.de/",
      relatedTo: "B.Sc. in Mechatronics and Information Technology at KIT",
      relatedLink: "/studies#kit"
    },
    {
      id: 1,
      title: "Chemistry Valedictorian and Olympiad",
      date: "May 2015",
      description: "Achieved the highest score in chemistry at the highschool level, and received the GDCh-Award (German Chemical Society), entering the national olympiads.",
      imageUrl: gdchImage,
      imageZoom: 100, // Custom zoom level (70%)
      link: "https://www.gdch.de/",
      relatedTo: "High School at DSV",
      relatedLink: "/studies#dsv"
    }
  ];

  return (
    <AwardsContainer>
      <PageTitle>Awards & Certificates</PageTitle>
      
      <AwardsList>
        {awardsData.map(award => (
          <AwardCard key={award.id} id={`award-${award.id}`}>
            <AwardImage 
              src={award.imageUrl} 
              alt={award.title} 
              zoom={award.imageZoom}
            />
            <AwardContent>
              <AwardTitle>{award.title}</AwardTitle>
              <AwardDate>{award.date}</AwardDate>
              <AwardDescription>{award.description}</AwardDescription>
              <AwardLink href={award.link} target="_blank" rel="noopener noreferrer">
                View Certificate/Details →
              </AwardLink>
              {award.relatedTo && (
                <RelatedInfo>
                  <strong>Related to:</strong>{' '}
                  <InteractiveLink to={award.relatedLink}>
                    {award.relatedTo}
                  </InteractiveLink>
                </RelatedInfo>
              )}
            </AwardContent>
          </AwardCard>
        ))}
      </AwardsList>
    </AwardsContainer>
  );
}; 
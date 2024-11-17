import styled from "styled-components";

const PageTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;


export const Research = () => {
  return (
    <PageTitle>Research Papers</PageTitle>
  );
}; 
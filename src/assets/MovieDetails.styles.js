
import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  background-color: rgb(243, 204, 211);

  @media screen and (max-width: 768px) {
    .movie-main {
      flex-direction: column;
    }
  }
`;

export const BackButton = styled.a`
  text-decoration: none;
  padding: 1rem 2rem;
  color: rgb(31, 30, 30);
  font-size: 2rem;
  font-weight: bold;
  border-radius: 1rem;
  box-shadow: 1px 5px 5px #533333;
  background-color: rgb(247, 157, 172);
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  max-width: 10%;
  align-items: center;

  @media screen and (max-width: 768px) {
    max-width: 30%;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  margin: 5px auto;
  background-color: #f194b8;
  box-shadow: 1px 5px 5px #533333;
  color: rgb(20, 19, 19);
`;

export const Headings = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NameDetails = styled.h2`
  color: white;
  font-size: 2rem;
`;

export const Rating = styled.div`
  color: white;
  font-size: 1.2rem;
`;

export const MovieMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MoviePoster = styled.img`
  width: 60%; /* Adjust the width of the image */
  height: auto; /* Maintain aspect ratio */
  max-height: 60vh; /* Limit maximum height */
`;

export const SummarySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 3%;
  font-size: 1.5rem;
`;

export const Summary = styled.p`
  color: white;
  font-weight: bold;
  margin-bottom: 2%;
`;

export const Season = styled.p`
  color: white;
  font-weight: bold;
  margin-bottom: 1%;
`;

export const Type = styled.p`
  font-weight: bold;
  text-decoration: none;
  color: white;
`;

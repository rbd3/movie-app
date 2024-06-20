
import styled from 'styled-components';

export const MoviesListContainer = styled.div`
  .movies-list {
    padding: 0.5%;
  }

  .movies-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 0.08%;
    margin-bottom: 0%;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
      grid-row-gap: 0.3%;
      grid-column-gap: 1%;
    }
  }

  .movie-item {
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1%;
    width: 95%;
    height: auto;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .movie-item:nth-child(even) {
    background-color: #fc5193;
  }
  
  .movie-item:nth-child(odd) {
    background-color: #f56ea2;
  }

  .details-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-bottom: 10px;

    svg {
      font-size: 24px;
      color: white;
      margin-left: 0;
    }
  }

  .movie-image {
    width: 100%;
    height: 60vh;
    border-radius: 8px;

    @media (max-width: 768px) {
      width: 95%;
      height: 60vh;
    }
  }

  .movie-name {
    font-size: 1.5rem;
    margin-bottom: 0;
  }

  .movie-rating {
    margin-left: auto;
    font-size: 1.2rem;
    text-align: center;
    width: 100%;
    font-weight: bold;
  }
`;

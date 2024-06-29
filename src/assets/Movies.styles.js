import styled from 'styled-components';

export const MoviesListContainer = styled.div`
  .movies-list {
    padding: 0.5%;
  }

  .movies-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 0.08%;
    margin-bottom: 2%;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
      grid-row-gap: 2%;
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

  .movie-attribute {
    margin-left: auto;
    font-size: 1.2rem;
    text-align: center;
    width: 100%;
    font-weight: bold;
  }
`;

export const FilterContainer = styled.div`
  display: flex;

  align-items: center;
  gap: 2%;
  font-size: 2rem;
  padding: 1rem;

  span {
    background-color: #007bff;
  }

  select {
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    gap: 0:
  }

  select {
    font-size: 0.8rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-left: 40%;

  input {
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #007bff;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }

  @media (max-width: 768px) {
    
    gap: 0.5;
    input, button {
      font-size: 0.8rem;
    }
  }
`;


export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;

  button {
    background: none;
    background-color: #fc5193;
    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
    margin: 0 5rem;
    cursor: pointer;

    &.active {
      background-color: white;
      
    }

    &:hover:not(.active) {
      background-color: #f0f0f0;
    }
  }
`;

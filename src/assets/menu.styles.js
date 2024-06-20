import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: #58163ac9;
  box-shadow: 5px 5px 5px #eae3e3;

  @media only screen and (max-width: 768px) {
    padding: 1.5rem;
  }
`;


export const Logo = styled.div`
  display: flex;
  gap: 5px;
`;

export const LogoTitle = styled.h1`
  margin-top: 13px;
  color: rgb(245, 233, 233);

  @media only screen and (max-width: 768px) {
    margin-top: 6px;
  }
`;

export const LogoImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 70px;

  @media only screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
`;


export const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    list-style-type: none;
    margin-right: 0;
    gap: 2rem;
  }

  li {
    font-size: 2.5rem;

    a {
      color: white;
      text-decoration: none; /* Remove underline */
      padding: 10px; /* Add padding for better click area */
    }

    /* Apply hover effect to each li individually */
    &:hover {
      background-color: #333; /* Change background color on hover */
      border-radius: 5px; /* Optional: Add rounded corners */
    }
  }

  @media only screen and (max-width: 768px) {
    li {
      font-size: 2.5rem;
      margin-right: 2%;
    }
  }
`;



export const Container = styled.div`
  font-size: 1.5rem;

  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-right: 20px;
    color: rgb(243, 204, 216);
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;



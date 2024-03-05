import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  color: #fff;

  .show {
    display: block;
  }
  .hide {
    display: none;
  }

  .sidebar {
    padding: 2rem;
    border: 1px solid grey;
    width: 85%;
    min-height: 10rem;
    background: #1c2540;
    margin: 0 2rem;
    align-items: center;
    position: fixed;
    z-index: 100;
    margin-top: 6.4rem;
    border-radius: 1rem;

    /* @media only screen and (max-width: 686px) {
   display: none;
 

}*/
    .close-btn {
      border: 1px solid grey;
      padding: 0 0.9rem;
      font-size: 0.85rem;
      border-radius: 2rem;
      position: absolute;
      margin-top: -1rem;
      font-weight: 700;
    }
  }

  .NavBar__link {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* margin-top: 3rem; */

    /* padding: 2rem; */

    .links {
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  color: black;

  .text-1 {
    width: 95%;
  }
  .qr__image {
    padding: 1rem 0;
  }
  .QR {
    width: 100%;
    margin-top: -7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media only screen and (max-width: 700px) {
      display: none;
    }

    .link {
      border-bottom: 1px solid black;
      font-family: var(--font-inter), sans-serif;
      font-size: 15px;
      font-weight: 600;
      line-height: 22px;
      transition: all 0.3s;
      align-self: center;

      @media only screen and (max-width: 780px) {
        font-size: 12px;
      }

      &:hover {
      }
    }
  }
  .timeline {
    padding: 7rem 8rem;
    /* text-align: justify; */
    @media only screen and (max-width: 1098px) {
      padding: 10rem 5rem;
    }
    @media only screen and (max-width: 900px) {
      padding: auto 3.5rem 5rem 3.5rem;
    }
    @media only screen and (max-width: 768px) {
      padding: auto 3rem 5rem 3rem;
    }
    @media only screen and (max-width: 600px) {
      padding: auto 2.5rem 5rem 2.5rem;
    }
    @media only screen and (max-width: 500px) {
      padding: 10rem 1.5rem 5rem 1.5rem;
    }
    h3 {
      padding-left: 1rem;
      font-family: var(--font-nunito-Sans), sans-serif;
      font-size: 47px;
      font-weight: 900;
      line-height: 59px;
      @media only screen and (max-width: 800px) {
        font-size: 37px;
      }
      @media only screen and (max-width: 500px) {
        font-size: 27px;
      }
    }
  }

  .timeline .title-wrapper {
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 2rem 0;
  }

  .timeline-list {
    font-size: 1rem;
    margin-left: 45px;
  }

  .timeline-item {
    position: relative;
    font-family: var(--font-inter), sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    @media only screen and (max-width: 500px) {
      font-size: 16px;
    }
    .flex {
      display: flex;
      /* justify-content: center; */
      align-items: center;
    }

    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .timeline-item:not(:last-child) {
    margin-bottom: 20px;
  }

  .timeline-item-title {
    font-family: var(--font-inter), sans-serif;
    font-size: 18px;
    font-weight: 600;
    /* line-height: 27px; */
    padding-bottom: 1rem;
    @media only screen and (max-width: 500px) {
      font-size: 16px;
    }
  }

  .timeline-list span {
    color: gold;
    font-weight: 400;
    line-height: 1.6;
  }

  .timeline-item::before {
    content: "";
    position: absolute;
    /* top: -25px; */
    left: -30px;
    width: 1px;
    height: calc(100% + 50px);
    background: black;
  }

  .timeline-item::after {
    content: "";
    position: absolute;
    top: 4px;
    left: -34px;
    height: 10px;
    width: 10px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 0 0 4px black;
  }

  .timeline-text {
    font-family: var(--font-inter), sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 30px;

    @media only screen and (max-width: 500px) {
      font-size: 14px;
    }

    /* padding-bottom: 1.5rem; */
  }
  .sub {
    font-family: var(--font-inter), sans-serif;
    font-size: 19px;
    font-weight: 600;
    line-height: 23px;
    padding-left: 1rem;
    margin: 4rem 0 2rem 0;

    @media only screen and (max-width: 500px) {
      font-size: 16px;
    }
  }
  .date {
    display: flex;
    align-items: center;
    gap: 0.7rem;

    h5 {
      color: black;
      font-weight: 600;
    }
  }
  .social {
    margin-top: 5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;

    &__icon {
      display: flex;
      align-items: center;

      p {
        font-family: var(--font-inter), sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        @media only screen and (max-width: 500px) {
          font-size: 14px;
        }
      }
      span {
        padding-left: 1.2rem;
      }
      &--box {
        margin-top: 4rem;
        display: flex;
        gap: 1.5rem;
      }
    }
  }
`;

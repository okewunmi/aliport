import styled from "styled-components";

export const Wrapper = styled.div`
  .bck-1 {
    background: #ffff;
  }
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    background: #fff;
    color: #000;
    max-height: 100vh;
    width: 100%;
    justify-content: space-between;
    gap: 2rem;
    padding-top: 6rem;

    /* @media only screen and (max-width: 868px) {
    margin-top :10rem ;
        } */

    @media only screen and (max-width: 868px) {
      flex-direction: column;
      justify-content: center;
      margin-top: 15rem;
    }
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      margin-top: 15rem;
    }
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      margin-top: 15rem;
    }
    @media only screen and (max-width: 580px) {
      flex-direction: column;
      justify-content: center;
      margin-top: 15rem;
    }
    @media only screen and (max-width: 425px) {
      margin-top: 1.5rem;
    }
    @media only screen and (max-width: 320px) {
      margin-top: 1.5rem;
    }

    .header__txt {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 59%;
      margin-top: 7rem;
      gap: 1rem;

      @media only screen and (max-width: 1098px) {
        width: 60%;
      }
      @media only screen and (max-width: 868px) {
        width: 90%;
        /* margin-top :27rem ; */
      }
      @media only screen and (max-width: 500px) {
        width: 95%;
        /* margin-top:10rem;  */
      }

      h1 {
        font-size: 50px;
        font-weight: 800;
        font-family: var(--font-nunito-Sans), sans-serif;

        @media only screen and (max-width: 1098px) {
          font-size: 2.5rem;
        }
        @media only screen and (max-width: 650px) {
          font-size: 2rem;
        }
        @media only screen and (max-width: 500px) {
          font-size: 1.9rem;
        }
        @media only screen and (max-width: 400px) {
          font-size: 1.7rem;
        }
        @media only screen and (max-width: 325px) {
          font-size: 1.7rem;
        }
      }

      strike {
        font-weight: bold;
        font-weight: 800;
      }

      .txt {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.9rem;
        color: #1c2540;
        font-family: var(--font-inter), sans-serif;

        @media only screen and (max-width: 1098px) {
          font-size: 0.9rem;
        }
        @media only screen and (max-width: 868px) {
          font-size: 1rem;
        }

        @media only screen and (max-width: 568px) {
          font-size: 0.9rem;
        }
      }

      .txt-big {
        color: #e4e4e4;
        font-size: 200px;
        font-weight: 400;
        font-family: var(--font-abril-Fatface), sans-serif;
        margin-top: -3rem;
        @media only screen and (max-width: 1098px) {
          font-size: 180px;
        }
        @media only screen and (max-width: 800px) {
          font-size: 150px;
        }
        @media only screen and (max-width: 700px) {
          font-size: 140px;
        }
        @media only screen and (max-width: 600px) {
          font-size: 110px;
        }
        @media only screen and (max-width: 470px) {
          font-size: 100px;
        }
        @media only screen and (max-width: 390px) {
          font-size: 70px;
        }
      }
      &__box {
        padding-left: 90px;
        display: flex;
        gap: 1rem;
        flex-direction: column;

        @media only screen and (max-width: 1098px) {
          padding-left: 2.1rem;
        }
        @media only screen and (max-width: 868px) {
          padding-left: 3rem;
        }
        @media only screen and (max-width: 500px) {
          padding-left: 1.7rem;
        }
      }
    }
    .header__img {
      margin-right: 8rem;
      display: flex;
      align-self: center;
      width: 29%;

      @media only screen and (max-width: 868px) {
        margin-right: 0rem;
        width: 70%;
        margin-left: 5rem;
        margin-top: -4rem;
        padding: 1rem 0 0rem 0;
      }
      @media only screen and (max-width: 570px) {
        margin-left: 0.2rem;
        padding: 1rem 0 0rem 0;
      }
      @media only screen and (max-width: 470px) {
        padding: 1rem 0 0rem 0;
      }
      @media only screen and (max-width: 425px) {
        padding: 1.5rem 0 0rem 0;
      }
    }

    .icon {
      display: flex;
      gap: 1rem;
      z-index: 1;
    }
    .links {
      cursor: pointer;
      font-family: var(--font-inter);
      transition: all 0.3s;

      &:hover {
        color: #1c2540;
        transform: scale(1.5);
      }
    }

    &__details {
      background: #ebf4f6;
      /* height: 20vh; */
      margin-top: 5rem;
      display: flex;
      justify-content: center;
      gap: 3rem;
      padding: 4rem 15rem 5rem 15rem;

      @media only screen and (max-width: 1098px) {
        padding: 4rem 4rem 5rem 4rem;
        gap: 2rem;
      }

      @media only screen and (max-width: 868px) {
        /* margin-top: 34rem; */
        padding: 4rem 2rem 5rem 2rem;
        gap: 1rem;
        margin-top: 15rem;

        /* margin-top: 23rem; */
      }

      @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin-top: 17rem;
        padding: 4rem 1.5rem 5rem 1.5rem;
      }
      @media only screen and (max-width: 680px) {
        flex-direction: column;
        align-items: center;
        /* margin-top: 10rem; */
        padding: 4rem 1.5rem 5rem 1.5rem;
      }
      @media only screen and (max-width: 580px) {
        margin-top: 13rem;
      }
      @media only screen and (max-width: 425px) {
        flex-direction: column;
        align-items: center;
        margin-top: 12rem;
        padding: 4rem 1.5rem 5rem 1.5rem;
      }

      .box {
        display: flex;
        flex-direction: column;
        width: 30%;

        @media only screen and (max-width: 768px) {
          width: 90%;
        }
      }
      .image__1,
      .h__1 {
        align-self: flex-end;

        @media only screen and (max-width: 768px) {
          align-self: center;
        }
      }
      .image__2 {
        align-self: center;
      }
      .image__3,
      .h__3 {
        align-self: flex-start;
        @media only screen and (max-width: 768px) {
          align-self: center;
        }
      }
      .img__sign {
        padding-top: 2rem;
      }
      .heading {
        font-family: var(--font-nunito-Sans), sans-serif;
        font-size: 24px;
        font-weight: 600;
        line-height: 31px;
        letter-spacing: 0em;
        text-align: center;
        color: #1c2540;
        padding-top: 1rem;

        @media only screen and (max-width: 868px) {
          font-size: 20px;
        }
      }
      .txt {
        padding-top: 5rem;
        @media only screen and (max-width: 868px) {
          padding-top: 1rem;
        }
      }
      .txt__1 {
        font-family: var(--font-nunito-Sans), sans-serif;
        font-size: 16px;
        font-weight: 600;
        line-height: 32px;
        text-align: right;
        padding-top: 5rem;

        @media only screen and (max-width: 868px) {
          font-size: 14px;
          padding-top: 1rem;
          text-align: left;
        }
      }
      .txt__2 {
        margin-bottom: 2rem;
        font-family: var(--font-nunito-Sans), sans-serif;
        font-size: 16px;
        font-weight: 300;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: left;
        color: #1f2937;
        @media only screen and (max-width: 868px) {
          font-size: 14px;
        }
      }
      .txt__3 {
        font-family: var(--font-nunito-Sans), sans-serif;
        font-size: 16px;
        font-weight: 300;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: left;
        color: #1f2937;
        @media only screen and (max-width: 868px) {
          font-size: 14px;
        }
      }
    }
    &__bring {
      padding: 5rem 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.3rem;

      @media only screen and (max-width: 800px) {
        padding: 5rem 1.5rem;
      }

      &__head {
        font-family: var(--font-nunito-Sans), sans-serif;
        font-size: 31px;
        font-weight: 700;
        line-height: 38px;
        letter-spacing: -0.625px;
        text-align: center;
        color: #111111;

        @media only screen and (max-width: 1000px) {
          font-size: 24px;
        }
        @media only screen and (max-width: 800px) {
          font-size: 20px;
        }
        @media only screen and (max-width: 800px) {
          font-size: 18px;
          margin-top: -2rem;
        }
      }
      &__txt {
        font-family: var(--font-inter);
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: center;
        color: #666666;

        @media only screen and (max-width: 1000px) {
          font-size: 14px;
          margin-top: -0.9rem;
        }
        @media only screen and (max-width: 800px) {
          font-size: 13px;
          margin-top: -1rem;
          line-height: 19px;
        }
      }
      &__box {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        place-items: center;
        gap: 1.2rem;

        @media only screen and (max-width: 1000px) {
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          place-items: center;
        }

        @media only screen and (max-width: 690px) {
          grid-template-columns: repeat(1, 1fr);
          grid-template-rows: repeat(2, 1fr);
          place-items: center;
        }

        &--container {
          padding: 1.1rem;
          max-width: 22rem;
          height: 18rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;

          @media only screen and (max-width: 690px) {
            max-width: 22rem;
            height: 16rem;
          }

          h3 {
            font-family: var(--font-nunito-Sans), sans-serif;
            font-size: 16px;
            font-weight: 600;
            line-height: 19px;
            letter-spacing: -0.23999999463558197px;
            text-align: left;
            color: #111111;
          }
          p {
            font-family: var(--font-inter);
            font-size: 13px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0em;
            text-align: left;
            color: #666666;
          }
        }
        .box__1 {
          background: #eeeeee;
        }
        .box__2 {
          background: #ebf4f6;
        }
      }
    }
    &__skill {
      padding: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.3rem;
      background: #ebf4f6;

      @media only screen and (max-width: 900px) {
        padding: 4rem 3rem;
        gap: 1rem;
      }
      @media only screen and (max-width: 700px) {
        padding: 3rem 2rem;
        gap: 1rem;
      }
      @media only screen and (max-width: 700px) {
        padding: 1rem 2rem;
        gap: 1rem;
      }

      &__head {
        font-family: var(--font-nunito-Sans), sans-serif;
        font-size: 56px;
        font-weight: 600;
        line-height: 73px;
        letter-spacing: 0em;

        @media only screen and (max-width: 900px) {
          font-size: 40px;
        }
        @media only screen and (max-width: 700px) {
          font-size: 38px;
        }
        @media only screen and (max-width: 568px) {
          align-self: flex-start;
          font-size: 30px;
        }
      }
      &__txt {
        font-family: var(--font-nunito-Sans), sans-serif;
        font-size: 20px;
        font-weight: 300;
        line-height: 32px;
        letter-spacing: 0em;
        text-align: center;
        margin-bottom: 4rem;
        @media only screen and (max-width: 900px) {
          font-size: 18px;
          margin-bottom: 2rem;
        }
        @media only screen and (max-width: 600px) {
          font-size: 18px;
          margin-bottom: 1rem;
          margin-top: -1.4rem;
          text-align: left;
        }
        @media only screen and (max-width: 568px) {
          font-size: 16px;
          line-height: 22px;
        }
      }
      &__box {
        display: flex;
        /* flex-direction: column; */

        justify-content: flex-start;
        gap: 7rem;
        @media only screen and (max-width: 900px) {
          gap: 3rem;
          margin-top: -1rem;
        }
        @media only screen and (max-width: 700px) {
          gap: 2rem;
        }
        @media only screen and (max-width: 568px) {
          flex-direction: column;
          align-self: flex-start;
          gap: 2rem;
        }

        .txt {
          h3 {
            font-family: var(--font-nunito-Sans), sans-serif;
            font-size: 28px;
            font-weight: 600;
            line-height: 36px;
            padding-bottom: 2rem;
            color: #1c2540;
            @media only screen and (max-width: 900px) {
              font-size: 20px;
              padding-bottom: 2rem;
            }
            @media only screen and (max-width: 600px) {
              font-size: 20px;
              padding-bottom: 1rem;
            }
          }
        }
        p {
          font-family: var(--font-nunito-Sans), sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 21px;
          padding-bottom: 0.7rem;
          color: #58677d;
          @media only screen and (max-width: 900px) {
          }
        }
      }
    }
    &__ux {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2.3rem 0;
      margin-top: 11rem;

      @media only screen and (max-width: 864px) {
        margin-top: 13rem;
      }
      @media only screen and (max-width: 864px) {
        /* margin-top: -7rem; */
      }
      @media only screen and (max-width: 768px) {
        padding: 2rem 0;
        margin-top: 19rem;
      }
      @media only screen and (max-width: 600px) {
        padding: 2rem 0;
        margin-top: 15rem;
      }
      @media only screen and (max-width: 425px) {
        padding: 2rem 0;
        margin-top: 12rem;
      }

      &__head {
        font-family: var(--font-nunito-Sans), sans-serif;
        font-size: 56px;
        font-weight: 600;
        line-height: 73px;
        margin-bottom: 0.2rem;
        @media only screen and (max-width: 900px) {
          font-size: 40px;
        }
        @media only screen and (max-width: 700px) {
          font-size: 35px;
        }
        @media only screen and (max-width: 700px) {
          font-size: 20px;
        }
      }
      &__txt {
        font-family: var(--font-nunito-Sans), sans-serif;
        font-size: 20px;
        font-weight: 300;
        line-height: 32px;
        text-align: center;

        @media only screen and (max-width: 900px) {
          font-size: 18px;
        }
        @media only screen and (max-width: 600px) {
          margin-top: -1rem;
          width: 80%;
        }
      }
      .margin-top {
        margin-top: 4rem;
      }

      .container {
        display: flex;
        padding: 0 2rem;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }
      .box {
        margin-top: 1.3rem;
        padding: 1rem;
        width: 19rem;
        height: 16rem;
        background: #eeeeee;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;

        @media only screen and (max-width: 1016px) {
          width: 21rem;
          height: 17rem;
        }
        @media only screen and (max-width: 762px) {
          width: 19rem;
          height: 16rem;
        }
      }
      .title {
        font-family: var(--font-nunito-Sans), sans-serif;
        font-size: 16px;
        font-weight: 200;
        line-height: 19px;
        letter-spacing: -0.23999999463558197px;
        color: #111111;
      }
      .txt {
        font-family: var(--font-nunito-Sans), sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 19px;
        color: #666666;
      }
      .links {
        padding-top: 3rem;
        font-family: var(--font-nunito-Sans), sans-serif;
        font-size: 20px;
        font-weight: 700;
        line-height: 32px;
        transition: all 0.3s;

        &:hover {
          transform: scale(1.1);
          color: #666666;
        }
      }
    }
    &__exp {
      display: flex;
      align-items: center;
      flex-direction: column;
      background: #ebf4f6;
      padding: 4rem 0;

      @media only screen and (max-width: 660px) {
        padding: 2rem 0;
      }

      &__box {
        margin: 4rem 0;
        width: 60%;
        border-radius: 1rem;

        @media only screen and (max-width: 1000px) {
          width: 80%;
        }
        @media only screen and (max-width: 750px) {
          width: 90%;
        }
        @media only screen and (max-width: 660px) {
          width: 88%;
        }

        .container {
          padding: 3rem 1.5rem;
          border-bottom: 1px solid #ebf4f6;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;

          @media only screen and (max-width: 660px) {
            flex-direction: column;
            align-items: flex-start;
            padding: 1.5rem;
          }

          .head {
            font-family: var(--font-nunito-Sans), sans-serif;
            font-size: 20px;
            font-weight: 600;
            line-height: 26px;
            color: #1c2540;
            width: 33%;
            @media only screen and (max-width: 750px) {
              font-size: 16px;
            }
            @media only screen and (max-width: 660px) {
              width: 100%;
            }
          }
          .border {
            border-bottom: 1px solid #e5e7eb;
          }

          .content {
            display: flex;
            flex-direction: column;
            align-self: self-start;
            gap: 1rem;
            width: 40%;
            @media only screen and (max-width: 660px) {
              width: 100%;
            }

            &-head {
              font-family: var(--font-nunito-Sans), sans-serif;
              font-size: 20px;
              font-weight: 600;
              line-height: 26px;
              @media only screen and (max-width: 750px) {
                font-size: 16px;
              }
            }
            &-txt {
              font-family: var(--font-nunito-Sans), sans-serif;
              font-size: 16px;
              font-weight: 300;
              line-height: 26px;
              color: #1f2937;
              @media only screen and (max-width: 750px) {
                font-size: 14px;
              }
            }
          }
          .date {
            display: flex;
            align-items: center;

            p {
              background: #242e4c;
              border-radius: 0.5rem;
              padding: 0.26rem 1rem;
              color: #e5e7eb;
              font-family: var(--font-nunito-Sans), sans-serif;
              font-size: 12px;
              font-weight: 600;
              line-height: 12px;

              @media only screen and (max-width: 750px) {
                font-size: 11px;
              }
            }
          }
        }
      }
    }
    &__contact {
      display: flex;
      padding: 3rem 0;
      align-items: center;
      justify-content: center;
      gap: 3rem;

      @media only screen and (max-width: 560px) {
        flex-direction: column;
      }

      &__box {
        gap: 1.5rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        color: #1f2937;
        width: 16%;

        @media only screen and (max-width: 987px) {
          width: 20%;
        }
        @media only screen and (max-width: 600px) {
          width: 25%;
        }
        @media only screen and (max-width: 560px) {
          width: 40%;
          gap: 1rem;
        }

        .big {
          font-family: var(--font-nunito-Sans), sans-serif;
          font-size: 20px;
          font-weight: 600;
          line-height: 26px;
          @media only screen and (max-width: 800px) {
            font-size: 17px;
          }
        }
        .text {
          font-family: var(--font-nunito-Sans), sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0em;
          text-align: center;

          @media only screen and (max-width: 800px) {
            font-size: 13px;
          }
        }
      }
    }
    &__work {
      background: #ebf4f6;
      padding: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media only screen and (max-width: 800px) {
        padding: 2rem;
      }

      /* justify-content:center; */

      &__head {
        font-family: var(--font-nunito-Sans), sans-serif;
        font-size: 31px;
        font-weight: 700;
        line-height: 38px;
        letter-spacing: -0.625px;
        text-align: center;
        color: #111111;

        @media only screen and (max-width: 1000px) {
          font-size: 24px;
        }
        @media only screen and (max-width: 800px) {
          font-size: 20px;
        }
        @media only screen and (max-width: 800px) {
          font-size: 18px;
        }
      }
      &__txt {
        font-family: var(--font-inter);
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: center;
        color: #666666;

        @media only screen and (max-width: 800px) {
          font-size: 16px;
          /* margin-top :-1rem ; */
          line-height: 19px;
          width: 100%;
        }
      }
      form {
        display: flex;
        flex-direction: column;
        margin-top: 4rem;
        align-items: center;
        gap: 2rem;

        label {
          font-family: var(--font-nunito-Sans), sans-serif;
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
          @media only screen and (max-width: 900px) {
            font-size: 16px;
          }
        }

        .form-box {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .form-icon {
          display: flex;
          align-items: center;
          .icons {
            border-right: 1px solid #d1d5db;
            padding-right: 0.3rem;
            margin-right: -2.5rem;
            z-index: 1;
            height: 100%;
          }
          .icon {
            font-size: 1.7rem;
          }
        }

        input {
          width: 35rem;
          padding: 0.4rem 1rem 0.4rem 3rem;
          outline: none;
          border: 1px solid #d1d5db;
          color: #6b7280;
          border-radius: 1rem;
          transition: all 0.3s;
          @media only screen and (max-width: 800px) {
            width: 23rem;
          }
          @media only screen and (max-width: 400px) {
            width: 18rem;
          }

          /* &:focus{
            width:38rem;
            border:1px solid #242E4C;

        } */
        }
        textarea {
          width: 35rem;
          height: 10rem;
          padding: 0.8rem;
          outline: none;
          border: 1px solid #d1d5db;
          color: #d1d5db;
          border-radius: 1rem;
          @media only screen and (max-width: 800px) {
            width: 23rem;
          }
          @media only screen and (max-width: 400px) {
            width: 18rem;
          }
        }

        .send__btn {
          background: #1c2540;
          color: #ffff;
          padding: 0.7rem;
          width: 34rem;
          border: 1px solid #1c2540;
          box-shadow: 0px 1px 1px 0px #171f3813;
          box-shadow: 0px 1px 0px 1px #ffffff26 inset;
          border-radius: 2rem;
          font-family: var(--font-nunito-Sans), sans-serif;
          font-size: 16px;
          font-weight: 600;
          transition: all 0.3s;
          @media only screen and (max-width: 800px) {
            width: 22rem;
          }
          @media only screen and (max-width: 400px) {
            width: 17rem;
          }

          &:hover {
            outline: 4px solid #1c2540;
            /* background: rgba(28, 37, 64, .9); */
            outline-offset: 3px;
          }
        }
      }
    }
  }
`;

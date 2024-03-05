import styled from "styled-components";

export const NavBar = styled.div `
z-index: 100;
height: 90px;
display: flex;
background:#EBF4F6 ;
width: 100%;
color: #171F38;
justify-content: space-between;
align-items: center;
padding-left: 6rem; 
padding-right: 40px;
font-size: 16px;
position: fixed;
font-family: var(--font-nunito-Sans), sans-serif;  

   @media only screen and (max-width: 1098px) {
    padding-left: 80px;
    }
    @media only screen and (max-width: 986px) {
       border-bottom: 1px solid grey;
        }

        @media only screen and (max-width: 686px) {
            /* justify-content: flex-end; */
        }
        @media only screen and (max-width: 500px) {
            padding-left: 30px;
        }

 .logo{
            padding-right: 1.2rem;
            @media only screen and (max-width: 686px) {
                display: flex;
              justify-self: flex-start !important;

 }
        }  
.menu{

    display: none;
   width: 2rem;
   height: 2rem;
    @media only screen and (max-width: 686px) {
       display: block;
        }
}
  

.NavBar__link{
    display: flex;
    align-items: center;
    gap: 1.3rem;
    
    .links{
        transition: all .3s;

        &:focus, &:active{
           transform: scale(1.1);
           font-weight: 600;
        } 
    }
    @media only screen and (max-width: 786px) {
       font-size: 90%;
 }
 @media only screen and (max-width: 686px) {
        display: none;
    

 }
}
.NavBar__btn{
    display: flex;
    align-items: center;
    gap: 1rem;

    

    &--btn{
        border: 1px solid #171F38;
        padding: 0.5rem .8rem;
        font-size: .8rem;
        border-radius: .8rem;
        transition: all .4s;

        @media only screen and (max-width: 425px) {
        font-size: .7rem;
        padding: 0.4rem .7rem;
 }
        &:hover, &:focus{
            color: #EBF4F6;
            background: #171F38;
        }
    }
    .btn{
        font-size:1.5rem;
        transition: all .3s;
        &:hover{
            transform: scale(1.2);
            cursor: pointer;
        }
    }
}
` 
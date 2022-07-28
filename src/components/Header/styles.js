import styled from "styled-components";
import GP60 from '../../assets/Header Image/GP60.jpg'
import {SiYamahamotorcorporation} from 'react-icons/si'



  export const ContainerMost = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${GP60});
  background-position: center;
  background-repeat:no-repeat;
  background-size: 1980px;




  
  @media(max-width: 720px){
    background-position: top;
    background-size: 1200px;
  }

  @media(max-width: 1400px) {
      background-size: 1400px;
  }

`

  export const Container = styled.div`
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 90px;
  color: var(--white);
  transition: 1s;
  position: fixed;

  @media(max-width: 720px){
    display: flex;
    width: 720px;
  }

  &:hover .menu{
    background-color: white;
    color: #000;
    transition: 1s;

    
  }
    &:hover .maxMenu{ 
      background-color: #efefef;
      color: var(--gray-high);
      transition: 1s;

    }

    &:hover .iconLine{
      color: var(--gray-low);
    }

    &:hover .header--title{
      background-color: var(--white);
      transition: 1s ;
    }


    &:hover .menuLast > .iconMenu{
      color: var(--gray-high);
    }
    






  .header--title{
    width: 14%;
    height: auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:hover{
      cursor: pointer;
    }

    @media(max-width: 720px){
    width: auto;

  }

    .title--yamaha{
      display: flex;
      flex-direction: row;
      align-items: center;

      h1{
      font-family: 'PT sans', sans-serif;
      text-transform: uppercase;
      font-size: 1.7rem;
      font-weight: 600;
      color: var(--red-high);

      @media(max-width: 720px){
    font-size: 80%;

  }
    }
    }

    .text--title{
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      justify-content: center;

      p{
        font-size: 1rem;
        font-family: 'Allura';
        font-weight: bold;
        color: var(--black);

        @media(max-width: 720px){
    font-size: 70%;

  }
      }
    }

    
  
  }

  section{
    display: flex;
    width: 60%;
    height: auto;
  .menu{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        ul{
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 40px;
          padding-left: 10%;

            &:nth-child(6){
              gap: 0;
            }


          li{
            font-size: 0.90rem;
            font-family: 'Poppins', sans-serif;
            list-style: none;
            font-weight: 500;
            text-transform: uppercase;
            padding-bottom :4px;
            

            &:hover{
                border-bottom: 3px solid var(--blue-low);
                
                cursor: pointer;
                          }
            @media(max-width: 720px){
             font-size:65%;

             
  }
          }
        }
      }}

      .maxMenu{
        width: 30%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
  

        @media(max-width: 720px){
          width: auto;

        }

      .menuInfo{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        align-items: center;
        gap: 35px;
        justify-content: space-between;


        .iconLine{
          width: 40px;
          height: 80px;
          
        }
        
         .iconMap, .iconLogin, .iconCar, .iconLup {
          width: 20px;
          height: 20px;
        
          &:hover{
            color: var(--blue-low);
            cursor: pointer;
          }

        }

        .cityInfo{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 10px;

          &:hover{
              color: var(--blue-low);
              cursor: pointer;
            }
          h1{
            font-size: 0.8rem;
            font-family: 'Roboto';
            text-transform: uppercase;

            &:hover{
              color: var(--blue-low);
              cursor: pointer;
            }

            @media(max-width: 720px){
           font-size: 80%;

  }
          }
        }

        .login{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 10px;

          &:hover{
              color: var(--blue-low);
              cursor: pointer;
            }
          h1{
            font-size: 0.8rem;
            font-family: 'Roboto';
            text-transform: uppercase;

            &:hover{
              color: var(--blue-low);
              cursor: pointer;
            }

            @media(max-width: 720px){
           font-size: 80%;

  }
          }

        }

        .menuLast{
          width: auto;
          display: flex;
          justify-content: space-between;



         
          @media(max-width: 720px){
           font-size: 80%;

  }
        }
      }
       .iconMenu{
            color: var(--white);
            width: 30px;
            height: 30px;
          
            &:hover{
            color: var(--blue-low);
            cursor: pointer;
          }
          }
}

 
  `
  export const  IconYamaha = styled(SiYamahamotorcorporation)`
  width: 27px;
  height: 27px;
  color: red;

  `






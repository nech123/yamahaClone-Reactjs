import styled from "styled-components";

export const Container = styled.div`
  margin-top: 17px;
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;




  .Performance{
    width: 100%;
    height: 100%;
    display: flex;

    .PerformanceText{
      margin-left: 70px;
      display: flex;
      flex-direction: column;
      width: 54%;
      gap: 10px;
      align-items: flex-start;
      justify-content: center;

      h3{
        font-size: 2rem;
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
      }

      h1{
        width: 50%;
        font-size: 2.5rem;
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        letter-spacing: -3px;
      }

      p{
        font-size: 1.1rem;
        width: 55%;
        font-family: 'Poppins';
        color: var(--gray-high);
      }
    }
  }


  .imgFirst{
    display: flex;
    width: 65%;
    height: 95%;
    align-items: center;
    justify-content: center;
  }
  img{
    width: 100%;
    height: 100%;

  }

  .tecnologySport{
    width: 100%;
    height: 780px;
    display: flex;
    flex-direction: column;

    img{
      width:100%;
      height: 90%;
    }

    .tecnologyText{
      gap: 20px;
      display: flex;
      width: 100%;
      flex-direction: row;
      height: 100vh;
      align-items: center;
      justify-content: center;

      .tecnologyH1{
        width: 20%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h3{
          font-size: 1.35rem;
          text-transform: uppercase;
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
        
        }

        h1{
          font-size: 1.6rem;
          text-transform: uppercase;
          font-family: 'Poppins', sans-serif;
          letter-spacing: -2px;
        }


      }

      .tecnologyP{
        display: flex;
        width: 45%;
        align-items: center;
        

        p{
          margin-left: 100px;
          font-size: 1.1rem;
          font-family: 'Poppins';
          color: var(--gray-high);
        }
      }
    }
  }

  .videoYamada{
    display: flex;
    border: 1px solid var(--black);
    width: 100%;
    height: auto;

   


    

    .Yamadaoptions{
      width: 100%;
      height: 535 px;
      display: flex;
      justify-content: center;
      align-items: center;

          .videoImg{
          display: flex;
          width:  60%;
          align-items: center;
          justify-content: center;
          img{
            width: 80%;
            height: 90%;
          
            }
    }
      .modal--total{
        width: 50%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 70px;
        
        button{
          width: auto;
          height: auto;
          font-size: 3.0rem;
          border: 1px solid white;
          border-radius: 1.2rem;
          padding: 12px;
          color: var(--green-low);
          background-color: var(--black);
          text-transform: uppercase;
        
          &:hover{
            cursor: pointer;
            filter: brightness(2);
          }
        }
      }

      

 
    }
  }


    .yamada--champions{
      display: flex;
      flex-direction: column;
      padding-top: 20px;
      width: 100%;
      height: 800px;
      gap: 60px;
      padding-bottom: 50px;
    
      
      .img--text--champions{
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;

          .text--title--champions{
            display: flex;
            flex-direction: column;
            width: 20%;

          h3{
            font-size: 1.2rem;
            font-family: 'Poppins';
            text-transform: uppercase;
          }

          h1{
            padding-top: 20px;
            font-size: 1.4rem;
            text-transform: uppercase;
            font-family: 'Roboto';
          }

          
      }

      .text-subtitle--champions{
            width: 45%;
            height: auto;
            margin-left: 60px;

            p{
              
              font-size: 1.3rem;
              font-family: 'PT sans';
              color: var(--gray-high);
            }
          }
    }
    
    }

    .price--g60{
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 800px;
      align-items: center;

      .price--img--g60{
        width: 100%;
        height: 100%;
      }

      .price--visible{
        display: flex;
        position: absolute;
        width: 50%;
        height: 50%;
        margin-top: 6%;
        margin-left: 50%;
        align-items: center;
        flex-direction: column;

        .price--status{
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 10px;

          h4{
            font-size: 0.7rem;
            font-family: 'PT sans';
            color: var(--gray-high);
          }
        }

        .price--number{
          display: flex;
          align-items: center;
          flex-direction: row;
          width: 100%;
          height: auto;
          gap: 20px;

          h3{
            text-transform: uppercase;
            font-size: 0.8rem;
            font-family: 'Poppins';
            color: var(--white);
            p{
              text-align: end;
              color: var(--gray-high);
              font-size: 1rem;
            }
          }

          h1{
            font-size: 2.5rem;
            font-family: 'Poppins';
            color: var(--white)
          }
        }
        

        .price--visible--g60{
          display: flex;
          flex-direction: column;
          width: 100%;
          
          
          

          h1{
            color: white;
            font-size: 3.5rem;
            font-family: 'Roboto';
          }
        }
      }
    }

    .financiamento{
      width: 100%;
      height: 600px;
      justify-content: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: var(--black);
      
      .finance{ 
        width: 45%;
        height: 40%;
        justify-content: center;
        display: flex;
        flex-direction: column;
        border: 1px solid var(--white);
        padding-bottom: 10px;
        padding-top: 10px;
        margin-bottom: 20px;
        h1{
          padding-left: 15px;
          text-align: start;
          font-size: 1.2rem;
          color: var(--white); 
          font-family: 'PT sans', sans-serif;
        }
      }

      .entry{
        display: flex;
        width: 60%;
        flex-direction: row;
        justify-content: center;
        height: 120px;
        gap: 30px;
        border-bottom: 1px solid var(--gray-high);
        .price--entry{
          width:33%;
          border-right: 1px solid var(--gray-high);
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          

          h1{
            font-size: 1.1rem;
            font-family: 'Roboto';
            color: var(--gray-high);
            text-transform: uppercase;
          }

          h2{
            color: white;
            font-size: 1rem;
            font-family: 'Roboto', sans-serif;
          }
        }

        .sald{
          display: 33%;
          border-right: 1px solid var(--gray-high);
          display: flex;
          align-items: center;
          gap: 30px;
          flex-direction: row;
          h1{
            font-size: 1.1rem;
            font-family: 'Roboto';
            color: var(--gray-high);
            text-transform: uppercase;
          }

          h2{
            font-size: 1.5rem;
            color: var(--white);
            font-family: 'Poppins';
          }

          h3{
            color: white;
            font-size: 1rem;
            font-family: 'Roboto', sans-serif;
          }
        }

        .tax{
          display: flex;
          border-right: 1px solid var(--gray-high);
          display: flex;
          align-items: center;
          gap: 40px;
        }

        h1{
          font-size: 1.2rem;
          font-family: 'Roboto';
          text-transform: uppercase;
          color: var(--gray-high);
        }

        h2{
          color: var(--white);
          font-family: 'PT sans';
          font-size: 1.2rem;
        }
      }

      .simuFinance{
        margin-bottom: 30px;
        width: 50%;
        height: 50px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;
        h1{
          margin-left: 20px;
          color: var(--black);
          font-size: 1.3rem;
          text-transform: uppercase;
          font-family: 'Roboto';
        }

        h2{
          color: blue;
          font-size: 1.5rem;
          font-family: 'Poppins';
        }
      }
    }

    .infoYamada{
      padding-top: 50px;
      width: 100%;
      height: 600px;
      display: flex;
      flex-direction: column;

      .infoRev{
        display: flex;
        justify-content: center;
        background-color: #efefef;

        .concorcio{
          gap: 10px;
          display: flex;
          align-items: center;
          border-right: 1px solid var(--gray-high);

          .text--concorcio{
            width: 60%;

            h1{
              color: var(--black);
              font-size: 1.7rem;
              text-transform: uppercase;
              font-family: 'Poppins';
            }
            h3{
              font-family: 'Poppins';
              font-size: 0.9rem;
            }
          }

          h2{
            font-size: 1rem;
            font-family: 'Roboto';
          }
        }
      }
      
      .info--total{
      padding-top: 40px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      p{
        width: 75%;
        align-items: center;
        font-size: 0.7rem;
        font-family: 'Poppins';
      }
    }

    .info--alert{
      margin-top: 40px;
      width: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
      margin-bottom: 40px;

      p{
        width: 75%;
        font-size: 0.65rem;
        color: var(--black);
        font-family: 'Roboto';
      }
    }
    .line--null{
      border-bottom:6px solid var(--blue-low);
    }
    }

    

`

export const ContainerModal = styled.div` 

        .Manual--link{
        
          .garanted--list{
            color: var(--blue-low);
            width: 30px;
            height: 30px;
            margin-left: 10px;
            margin-right: 20px;
          }
        
        
        
        



          .garantia{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 70px;
            align-items: center;
  .hand--list{
          color: var(--blue-low);
          width: 60px;
          height: 60px;
          }
          

            h1{
              
              font-family: 'Poppins';
              color: var(--blue-high);
              font-size: 2.5rem;
            }

            p{
              text-align: center;
              font-family: 'PT sans';
              width: 70%;
              font-size: 1.7rem;
              color: var(--green-low);
            }
          }

          h1{
            padding-top: 20px;
            color: var(--black);
            font-size: 2.2rem;
            font-family: 'Roboto';
          }


          .book--list{
            color: var(--green-low);
            margin-left: 10px;
            margin-right: 20px;
            width: 35px;
            height: 35px;
          }
          .links{
            display: flex;
            flex-direction: column ;
            margin-top: 200px;
            gap: 50px;
            align-items: center;
            
            

          }
          display: flex;
          flex-direction: column;

          a{
            text-decoration: none;
            color: inherit;
            font-size: 1.8rem;
            transition: 0.5s;
            font-family: 'Poppins';

            &:hover{
              color: var(--blue-low);
            }
          }
        
      }

    .modal-options{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

    .buttons--options{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 450px;
    padding-top: 20px;
    
    button{
      text-transform: uppercase;
      font-size:1rem;
      border: none;
      color: var(--green-low);
      background-color: var(--white);
      font-family: 'PT sans', sans-serif;
      font-weight: 400;

      &:hover{
        cursor: pointer;
      }
      
    }
  }

    .title--modal{
    width: 100%;
    height: auto;
    display: flex;
    padding-top: 10px;
    padding-right: 20px;
    padding-left: 20px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;



    button{
        font-size: 1.2rem;
        color: var(--blue-low);
        border: none;
        font-family: 'Poppins';
        font-weight: 600;
        background-color: var(--white);
        transition: 0.5s;
        
        &:hover{
          cursor: pointer;
          opacity: 0.8;
        
        }
    }
    
    .icon--Modal{
      width: 40px;
      height: 40px;
      color: var(--green-low);
      margin-right: 20px;
    }
    
    
    h2{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 30%;
      height: 100%;
      font-family: 'Roboto';
  }

  
    }}

    


`
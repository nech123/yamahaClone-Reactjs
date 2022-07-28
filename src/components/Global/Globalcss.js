import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{

//Headers Colors//

  --black: #000;
  --white: #FFF;

  --red-high: #f82f00;
  --red-low: #eb2c04;

  --blue-low: #2144de;
  --blue-high: #3551d3; 

  --gray-low:#efefef;
  --gray-high:#535353;

  --green-low: #077876;
  --green-high: #a1e9c9;


}


*{


  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.react-modal-content{
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 500px;
  background-color: var(--white);
  }

.react-modal-overlay{
    width: auto;
    height: auto;
    background-color: rgba(0, 0,0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
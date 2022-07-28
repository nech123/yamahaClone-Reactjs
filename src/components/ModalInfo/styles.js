import styled from "styled-components";

export const Container = styled.div`
display: flex ;
width: 100%;
height: 100%;
flex-direction: column;

body {
  
  background: #fff;
}

.container {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  background: #f1f1f1;
  word-break: break-all;
  border: 1px solid rgba(0, 0, 0, 0.274);
}

.bloc-tabs {
  
  display: flex;
  width: 100%;
  height: auto;
}
.tabs {
  padding: 15px;
  text-align: center;
  width: 100%;
  background: rgba(128, 128, 128, 0.075);
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.274);
  box-sizing: content-box;
  position: relative;
  outline: none;
}
.tabs:not(:last-child){
  border-right: 1px solid rgba(0, 0, 0, 0.274);
}

.active-tabs  {
  background: white;
  border-bottom: 1px solid transparent;
}

.active-tabs::before {
  content: "";
  display: block;
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% + 2px);
  height: 5px;
  background: rgb(88, 147, 241);
}



button {
  border: none;
  
}
.content-tabs {
  flex-grow : 1;

  table{
    width: 100%;
    tbody{
      width: 100%;
      height: 100%;
      margin-top: 10px;
      tr{
        width: 100%;
        display: flex;
        margin-top: 12px;
        td{
          width: 70%;
          flex-direction: row;
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          font-family: 'Roboto',  sans-serif;

          &:nth-child(1){
            width:100%;
            height: auto;
            font-size: 1.4rem;
            font-family: 'Poppins';
            text-transform: uppercase;
          }
        }
      }
      }
  }
}
.content {
  background: white;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: none;
}
.content h2 {
  padding: 0px 0 5px 0px;
}
.content hr {
  width: 100px;
  height: 2px;
  background: #222;
  margin-bottom: 5px;
}
.content p {
  width: 100%;
  height: 100%;
}
.active-content {
  display: block;
}
`
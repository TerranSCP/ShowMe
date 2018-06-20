
import styled, { keyframes }  from 'styled-components';




export const StyledButton = styled.button`

min-width:5rem;
height:1.5rempx;
background-color:rgb(98, 126, 116);
border:1px solid rgb(36, 182, 162);
border-radius:5px ;
font-size: 1rem;
font-family:  'Arial Narrow Bold', sans-serif;
color:#ffffff;
margin-top:10px;

&:hover{
 border:1px solid rgb(38, 185, 165);
 background:linear-gradient(rgb(100, 128, 120),rgb(102, 135,130));
}

`;


export const StyledHeader = styled.h1`
    font-size:2rem;
    color:#fff;
    margin-top:5%;
`;


export const StyledText = styled.p`
    font-size:1.4rem;
    color:#fff;
    font-family: 'Arial Narrow Bold', sans-serif;;
`


export const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin:  50px 0px;

    @media(max-width:768px){
        flex-direction:column;
    }
`;


export const StyledLi = styled.li`
    margin-left:15px;
    display: block;

    @media(max-width:768px){
       margin-bottom:10px;
    }
`;


export const StyledInput = styled.input`
      min-width:35%;
      height:1.5rem;
      border:1px solid purple;
      border-radius:5px;
      font-family: 'Arial Narrow Bold', sans-serif;;
      font-size:1.2rem;
      margin-right:10px;
      margin-top:10px;
`

export const StyledForm = styled.form`
      display:flex;
      width:40%;
      margin-top:10px;

      @media (max-width:768px){
          flex-direction:column;
          justify-content:space-around;
      }
`
export const StyledContainer = styled.div`
      display:flex;
      justify-content:center;
 
`

const rotate = keyframes`
      from {
          transform:rotate(0deg);
          left:0%;
      }
      to {
          transform:rotate(360deg);
          left:70%;
      }
`

export const RotatedImg = styled.img`
      width:25%;
      left:40%;
      top:230%;
      animation: ${rotate} 8s linear infinite alternate;
      position:absolute;
     
`

import styled, { keyframes }  from 'styled-components';




export const StyledButton = styled.button`


min-width:100px;
max-height:2rem;
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

export const RemoveButton = styled.button`
    color:#000;
    width:20px;
    height:20px;
    background:none;
    border:2px solid #000;
    position:absolute;
    left:0;
    top:0;
    border-left:none;
    border-top:none;

    &:hover{
        background-color:rgb(150, 189, 185);
    }
`


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
    padding:0;

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
      flex-wrap:wrap;
      flex-direction:row;
 
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
      top:150%;
      animation: ${rotate} 8s linear infinite alternate;
      position:absolute;
     
`

export const ResponsiveImage = styled.img`
      width:100%;
      height:300px;

      @media(max-width:768px){
          height:200px;
      }

      @media(max-width:450px){
        height:100px;
    }
`

export const StyledTextHover = StyledText.extend`
      &:hover{
          color:lightcoral;
      }
`

export const StyledResponsiveBlock = styled.div`
    width: 25%;
    display: flex;
    margin-bottom: 15px;
    margin-left: 15px; 
    flex-direction: column;
    border: 2px solid #000;
`

export const ResponsiveText = styled.span`
      font-size:1rem;
`
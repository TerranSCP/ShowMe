
import styled  from 'styled-components';

import img from '../Components/App/images/body-bg.jpg' ; 



export const StyledButton = styled.button`

min-width:80px;
height:30px;
background-color:rgb(156, 187, 185);
border:1px solid rgb(36, 182, 162);
border-radius:5px ;
font-size: 1rem;
font-family:'sans-serif';

&:hover{
 border:1px solid rgb(255, 0, 55);
 background:linear-gradient(rgb(156, 187, 185),rgb(94, 160, 156));
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
    font-family:'Open Sans';
`


export const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`;


export const StyledLi = styled.li`
    margin-left:15px;
    border: 2px solid goldenrod;
    display: block;

    &:hover{
        background-color:rgb(112, 28, 28);
      }
`;








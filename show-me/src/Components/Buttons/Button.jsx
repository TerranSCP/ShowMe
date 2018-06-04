import React  from 'react';


const Button = ({onClick,className ,type,name,text = ''}) => 
<button  type = {type}  onClick = {onClick} className = {className}>
    {text}
</button>

export default Button;

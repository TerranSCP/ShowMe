import React  from 'react';


const Button = ({onClick,className,disabled ,type,text = ''}) => 
<button disabled = {disabled}  type = {type}  onClick = {onClick} className = {className}>
    {text}
</button>

export default Button;

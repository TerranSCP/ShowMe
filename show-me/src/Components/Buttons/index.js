import React from 'react';
import {StyledButton} from '../../StyledComponents/index'


const Button = ({ onClick, className, disabled, type, text = '' }) =>
    <StyledButton disabled={disabled} type={type} onClick={onClick} className={className}>
        {text}
    </StyledButton>

export default Button;

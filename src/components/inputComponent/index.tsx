import {
    IconeContainer,
    IconButton,
    InputContainer,
    InputText,
} from "./styles";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

interface InputProps {
    leftIcon: JSX.Element
}

function InputComponent({ leftIcon, ...rest }: InputProps) {
    return (
        <InputContainer>
            {leftIcon ? <IconeContainer>{leftIcon}</IconeContainer> : null}
            <InputText {...rest} />
        </InputContainer>
    );
}

function InputPasswordComponent({ leftIcon, ...rest }: InputProps) {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <InputContainer>
            {leftIcon ? <IconeContainer>{leftIcon}</IconeContainer> : null}
            <InputText type={showPassword ? "text" : "password"} {...rest} />
            <IconButton onClick={handleTogglePassword}>
                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </IconButton>
        </InputContainer>
    );
}

export { InputComponent, InputPasswordComponent };

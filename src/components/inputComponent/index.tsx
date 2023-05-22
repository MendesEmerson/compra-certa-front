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
    placeholder: string
    value: string | undefined
    onChange: (value: any) => void
}

function InputComponent({ leftIcon, placeholder, value, onChange, ...rest }: InputProps) {

    return (
        <InputContainer >
            {leftIcon ? <IconeContainer>{leftIcon}</IconeContainer> : null}
            <InputText onChange={onChange} placeholder={placeholder} value={value} {...rest} />
        </InputContainer>
    );
}

function InputPasswordComponent({ leftIcon, placeholder, value, onChange: onChange, ...rest }: InputProps) {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <InputContainer >
            {leftIcon ? <IconeContainer>{leftIcon}</IconeContainer> : null}
            <InputText placeholder={placeholder} value={value} onChange={onChange} type={showPassword ? "text" : "password"} {...rest} />
            <IconButton type="button" onClick={handleTogglePassword}>
                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </IconButton>
        </InputContainer>
    );
}

export { InputComponent, InputPasswordComponent };

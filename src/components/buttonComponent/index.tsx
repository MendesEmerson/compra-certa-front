import { StyledButton, StyledIconButton } from "./styles"

export interface ButtonProps {
    icon?: JSX.Element | null
    title: string
    onClick: () => void
    variant?: "primary" | "secondary" | "secondaryVariant";
}

interface IconButtonProps {
    icon: JSX.Element
    onClick: () => void
}

function ButtonComponent({ icon = null, title, onClick, variant = "primary" }: ButtonProps) {
    return (
        <StyledButton variant={variant} onClick={onClick}>
            {icon}{title}
        </StyledButton>
    )
}

function IconButtonComponent({ icon, onClick }: IconButtonProps) {
    return (
        <StyledIconButton onClick={onClick}>
            {icon}
        </StyledIconButton>
    )
}

export { ButtonComponent, IconButtonComponent }
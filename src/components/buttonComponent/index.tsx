import { StyledButton, StyledIconButton } from "./styles"

export interface ButtonProps {
    icon?: JSX.Element | null
    title: string
    onClick: () => void
    variant?: "primary" | "secondary" | "secondaryVariant";
    disabled?: boolean
}

interface IconButtonProps {
    icon: JSX.Element
    onClick: () => void
    disabled?: boolean
}

function ButtonComponent({ icon = null, title, onClick, variant = "primary", disabled}: ButtonProps) {
    return (
        <StyledButton variant={variant} onClick={onClick} disabled={disabled}>
            {icon}{title}
        </StyledButton>
    )
}

function IconButtonComponent({ icon, onClick, disabled }: IconButtonProps) {
    return (
        <StyledIconButton onClick={onClick} disabled={disabled}>
            {icon}
        </StyledIconButton>
    )
}

export { ButtonComponent, IconButtonComponent }
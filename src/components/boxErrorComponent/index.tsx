import { BoxErrorContainer } from "./styles"

interface BoxErrorProps {
    text: string
}

export const BoxErrorComponent = ({text}: BoxErrorProps) => {
    return(
        <BoxErrorContainer>
            {text}
        </BoxErrorContainer>
    )
}
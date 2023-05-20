import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import HeaderComponent from "../headerComponent";
import FooterComponent from "../footerComponent";

export const LayoutComponent = () => {
    return (
        <LayoutContainer>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </LayoutContainer>
    );
};

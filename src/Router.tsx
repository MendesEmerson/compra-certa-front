import { Route, Routes } from "react-router-dom";
import { LayoutComponent } from "./components/layoutComponent";
import HomePage from "./pages/home";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutComponent/>}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

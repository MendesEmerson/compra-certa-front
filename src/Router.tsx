import { Navigate, Route, Routes } from "react-router-dom";
import { LayoutComponent } from "./components/layoutComponent";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import CadastroPage from "./pages/cadastro";
import { useAuth } from "./context/authContext";
import UserHome from "./pages/userHome";
import { ListPage } from "./pages/pageList";

export const Routers = () => {

  const { isLoggedIn } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<LayoutComponent />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/userHome" element={isLoggedIn ? <UserHome /> : <Navigate to="/" replace />} />
        <Route path="/listPage/:id" element={isLoggedIn ? <ListPage /> : <Navigate to="/" replace />} />

      </Route>
    </Routes>
  );
};

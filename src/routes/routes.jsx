import { Routes, Route } from "react-router-dom";
import { Main } from "../pages/Main/main";
import { Login } from "../pages/login/login";
import { Register } from "../pages/register/register";
import { Profile } from "../pages/Profile/profile";
import { AdvPage } from "../pages/AdvPage/advPage";
import { MyAdvPage } from "../pages/myAdvPage/myAdvPage";
import { SellerProfile } from "../pages/sellerProfile/sellerProfile";
import { NotFound } from "../pages/NotFound/notFound";
import { ProtectedRoute } from "./protectedRoute";

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Main />} />
      <Route path="/advpage/:id" element={<AdvPage />} />
      <Route path="/sellerprofile/:id" element={<SellerProfile />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute user={user} isAllowed={Boolean(user)}>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

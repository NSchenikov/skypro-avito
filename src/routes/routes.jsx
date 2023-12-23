import { Routes, Route } from "react-router-dom";
import { Main } from "../pages/Main/main";
import { Login } from "../pages/login/login";
import { Register } from "../pages/register/register";
import { Profile } from "../pages/Profile/profile";
import { AdvPage } from "../pages/AdvPage/AdvPage";
import { MyAdvPage } from "../pages/myAdvPage/MyAdvPage";
import { SellerProfile } from "../pages/sellerProfile/sellerProfile";
import { NotFound } from "../pages/NotFound/NotFound";
import { ProtectedRoute } from "./protectedRoute";

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Main />} />
      <Route path="/advpage/:id" element={<AdvPage />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute user={user} isAllowed={Boolean(user)}>
            <Profile />
          </ProtectedRoute>
        }
      />
      {/* <Route
        path="/advpage"
        element={
          <ProtectedRoute user={user} isAllowed={Boolean(user)}>
            <AdvPage />
          </ProtectedRoute>
        }
      /> */}
      <Route
        path="/myadvpage"
        element={
          <ProtectedRoute user={user} isAllowed={Boolean(user)}>
            <MyAdvPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/sellerprofile"
        element={
          <ProtectedRoute user={user} isAllowed={Boolean(user)}>
            <SellerProfile />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

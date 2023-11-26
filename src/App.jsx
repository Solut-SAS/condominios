import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";

import {
  Dashboard,
  Invitations,
  Annotations,
  Incidents,
  Login,
  Login as Register,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <AppLayout>
              <Outlet />
            </AppLayout>
          }
        ></Route>

        <Route
          element={
            <AuthLayout>
              <Outlet />
            </AuthLayout>
          }
        >
          <Route path="/commerces" element={<Dashboard />} />
          <Route path="/invitations" element={<Invitations />} />
          <Route path="/annotations" element={<Annotations />} />
          <Route path="/user-annotations" element={<Incidents />} />
        </Route>

        <Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

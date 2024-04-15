import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "../ProtectedRoutes";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<h1>Landing page</h1>} />
            <Route path="/login" element={<h1>login</h1>} />
            <Route path="/register" element={<h1>register</h1>} />
            <Route path="/update-password" element={<h1>update password</h1>} />
            <Route path="/landin" element={<h1>landin</h1>} />

            <Route element={<ProtectedRoute />}>
              <Route path="cart" element={<h2>Cart</h2>} />
              <Route path="profile" element={<h2>profile</h2>} />
              <Route path="/home-client" element={<h1>home client</h1>} />
            </Route>

          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

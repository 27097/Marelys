// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./protectedRoutes/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<h1>Landing page</h1>} />
            <Route path="/login" element={<h1>Login</h1>} />
            <Route path="/register" element={<h1>Register</h1>} />
            <Route path="/update-password" element={<h1>Update Password</h1>} />
            <Route path="/landin" element={<h1>Landing</h1>} />

            <Route element={<ProtectedRoute requiredRole="client" />}>
              <Route path="cart" element={<h2>Cart</h2>} />
              <Route path="profile" element={<h2>Profile</h2>} />
              <Route path="/home-client" element={<h1>Home Client</h1>} />
            </Route>

            <Route element={<ProtectedRoute requiredRole="seller" />} >
              <Route path="seller-dashboard" element={<h2>Seller Home</h2>} />
            </Route>
            <Route element={<ProtectedRoute requiredRole="admin" />} >
              <Route path="seller-dashboard" element={<h2>Seller Home</h2>} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

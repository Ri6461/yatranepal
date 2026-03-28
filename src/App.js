import "./App.css";
import Layout from "./Components/Layout/Layout";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home, Login, Register, TouristDashboard, SuperAdminDashboard, AgencyDashboard, Packages, PackageDetails, About, Contact, Verify, AgencyRegister } from "./Pages/ExpPage";

import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  document.title = "Yatra Nepal"
  // ✅ Create axios instance
  const api = axios.create({
    baseURL: "http://localhost:5000",
  });

  useEffect(() => {
    const checkProfile = async () => {
      try {
        // Read token from cookie
        const token = Cookies.get("token");

        if (!token) {
          setIsLoggedIn(false);
          setProfile(null);
          setLoading(false);
          return;
        }

        const res = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`, // 👈 send token from cookie
          },
        });

        setProfile(res.data.user);
        setIsLoggedIn(true);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setIsLoggedIn(false);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    checkProfile();
  }, []);

  if (loading) {
    return <div className="loading">Checking login status...</div>;
  }

  return (
    <BrowserRouter>
      <Layout isLoggedIn={isLoggedIn}>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:id" element={<PackageDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/super-admin" element={<SuperAdminDashboard />} />
          <Route path="/agency-admin" element={<AgencyDashboard />} />
          <Route path="/verify/:id" element={<Verify/>}/>
          <Route path="/register-agency" element={<AgencyRegister />} />

          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={isLoggedIn ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/dashboard"
            element={<TouristDashboard profile={profile || { name: 'Demo User', email: 'demo@example.com' }} isLoggedIn={true}/>}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

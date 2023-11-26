import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About_Us } from "./pages/About_Us";
import { Contact_Us } from "./pages/Contact_Us";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Create_account } from "./pages/Create_account";
import { Select_allergies } from "./pages/Select_allergies";
import { Profile } from "./pages/Profile";
import { Footer } from "./components/Footer";

function App() {
  const mockUserData = {
    fullName: "",
    email: "",
  };
  const mockAllergies = ["Produits de la mer", "Collations sans gluten"];
  const [islogin, changestate] = useState(false);

  useEffect(() => {
    const storedIsLogin = localStorage.getItem("islogin") === "true";
    changestate(storedIsLogin);
  }, []);

  return (
    <div className="App">
      <div className="app-content">
        <Navbar islogin={islogin} changestate={changestate} />
        <Routes>
          <Route path="/about-us" element={<About_Us />} />
          <Route path="/contact-us" element={<Contact_Us />} />
          <Route path="/" element={<Home islogin={islogin} />} />
          <Route path="/login" element={<Login changestate={changestate} />} />
          <Route path="/create-account" element={<Create_account />} />
          <Route
            path="/select_allergies/:email"
            element={<Select_allergies changestate={changestate} />}
          />
          <Route
            path="/profile"
            element={<Profile user={mockUserData} allergies={mockAllergies} />}
          />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

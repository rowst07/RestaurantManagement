import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RestaurantsPage from "./pages/RestaurantsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/layout/Header";

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element ={<LoginPage />} />
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </div>
  );
}

export default App;
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";

function App() {
  return <div className="py-16 max-w-4xl mx-auto">
    <Header />
    <Outlet />
    <Footer />
    <Toaster className="font-bold text-lg" />
  </div>;
}

export default App;

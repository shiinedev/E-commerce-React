import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return <div className="py-16 max-w-4xl mx-auto">
    <Header />
    <Outlet />
    <Footer />
  </div>;
}

export default App;

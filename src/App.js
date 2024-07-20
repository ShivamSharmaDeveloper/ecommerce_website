

import Header from "./components/header";
import './App.css'
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signup/SignUp";
import CarouselComponent from "./components/carousel/Carousel";
import Homepage from "./pages/auth/homepage/Home";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div className="appContainer" >
   <Homepage/>
   <Footer/>
    </div>
  );
}

export default App;

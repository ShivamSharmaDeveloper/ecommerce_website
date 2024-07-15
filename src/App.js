

import Header from "./components/header";
import './App.css'
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signup/SignUp";
const App = () => {
  return (
    <div className="appContainer" >
    <Header/>
    <div>
{/* <Login/>       */}
<SignUp/>
    </div>
    </div>
  );
}

export default App;

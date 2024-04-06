import "./Styles.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";

const App = () => {
  return (
    <Router>
      <main>
        <div className="app">
          <div className="side-bar">
            <div className="step">
              <NavLink to="/">1</NavLink>
              <p className="step-number">STEP 1</p>
              <p className="step-headline">YOUR INFO</p>
            </div>
            <div className="step">
              <NavLink to="/two">2</NavLink>
              <p className="step-number">STEP 2</p>
              <p className="step-headline">SELECT PLAN</p>
            </div>
            <div className="step">
              <NavLink to="/three">1</NavLink>
              <p className="step-number">STEP 3</p>
              <p className="step-headline">ADD-ONS</p>
            </div>
            <div className="step">
              <NavLink to="/four">1</NavLink>
              <p className="step-number">STEP 4</p>
              <p className="step-headline">SUMMARY</p>
            </div>
          </div>
          
          <div className="content">
            <Routes>
              <Route path="/" element={<StepOne />} />
              <Route path="/two" element={<StepTwo />} />
              <Route path="/three" element={<StepThree />} />
              <Route path="/four" element={<StepFour />} />
            </Routes>
          </div>
        </div>
      </main>
    </Router>
  );
};

export default App;

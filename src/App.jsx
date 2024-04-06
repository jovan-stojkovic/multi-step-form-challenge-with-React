import "./Styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import Side from "./components/Side";

const App = () => {
  return (
    <Router>
      <main>
        <div className="app">
          <div className="side-bar">
            <Side />
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

import { NavLink } from "react-router-dom";

const Side = () => {
  return (
    <>
      <div className="step">
        <NavLink to="/">1</NavLink>
        <div className="step-text">
          <p className="step-number">STEP 1</p>
          <p className="step-headline">YOUR INFO</p>
        </div>
      </div>
      <div className="step">
        <NavLink to="/two">2</NavLink>
        <div className="step-text">
          <p className="step-number">STEP 2</p>
          <p className="step-headline">SELECT PLAN</p>
        </div>
      </div>
      <div className="step">
        <NavLink to="/three">3</NavLink>
        <div className="step-text">
          <p className="step-number">STEP 3</p>
          <p className="step-headline">ADD-ONS</p>
        </div>
      </div>
      <div className="step">
        <NavLink to="/four">4</NavLink>
        <div className="step-text">
          <p className="step-number">STEP 4</p>
          <p className="step-headline">SUMMARY</p>
        </div>
      </div>
    </>
  );
};

export default Side;

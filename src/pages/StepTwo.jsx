import { Link } from "react-router-dom";
import { useState } from "react";

const StepTwo = () => {
    const initialPlan = 'arcade'
  const [selectedPlan, setSelectedPlan] = useState(initialPlan);

  const handlePlanChange = (e) => {
    setSelectedPlan(e.target.value);
  };

  return (
    <>
      <div className="page-container two">
        <div className="headline-page-cont">
          <h1>Select your plan</h1>
          <p className="h1-desc">
            You have the option of monthly or yearly billing.
          </p>
        </div>

        <div className="options">
          <label
            htmlFor="arcade"
            className={`option one ${
              selectedPlan === "arcade" ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              id="arcade"
              name="plan"
              value="arcade"
              onChange={handlePlanChange}
            />
            <p className="p-option">Arcade</p>
            <p className="p-option-price">$9/mo</p>
          </label>

          <label
            htmlFor="advanced"
            className={`option two ${
              selectedPlan === "advanced" ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              id="advanced"
              name="plan"
              value="advanced"
              onChange={handlePlanChange}
            />
            <p className="p-option">Advanced</p>
            <p className="p-option-price">$12/mo</p>
          </label>

          <label
            htmlFor="pro"
            className={`option three ${
              selectedPlan === "pro" ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              id="pro"
              name="plan"
              value="pro"
              onChange={handlePlanChange}
            />
            <p className="p-option">Pro</p>
            <p className="p-option-price">$15/mo</p>
          </label>
        </div>

        <div className="toggle-cont">
          <p className="toggle-text">Monthly</p>

          <div class="checkbox-wrapper-17">
            <input type="checkbox" id="switch-17" />
            <label for="switch-17"></label>
          </div>

          <p className="toggle-text">Yearly</p>
        </div>

        <div className="buttons-cont step-two">
          <Link to="/">
            <button className="back">Go Back</button>
          </Link>

          <Link to="/three">
            <button className="next">Next Step</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default StepTwo;

import { useState } from "react";
import { Link } from "react-router-dom";

const StepOne = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");


  const handleCheck = () => {
    setNameError(name ? "" : 'show-error')
    setEmailError(email ? "" : 'show-error')
    setNumberError(number ? "" : 'show-error')

  };
  

  return (
    <div className="page-container one">
      <div className="headline-page-cont">
      <h1>Personal info</h1>
      <p className="h1-desc">
        Please provide yout name, email address, and phone number.
      </p>
      </div>
      
      <div className="labels">
        <p className="label">Name</p>
        <p className={`error ${nameError}`}>This field is required</p>
      </div>
      <input type="text" placeholder="e.g. Stephen King" onChange={(e) => setName(e.target.value)} className={nameError} />
      <div className="labels">
        <p className="label">Email Address</p>
        <p className={`error ${emailError}`}>This field is required</p>
      </div>
      <input type="text" placeholder="e.g. stephenking@lorem.com" onChange={(e) => setEmail(e.target.value)} className={emailError} />
      <div className="labels">
        <p className="label">Phone Number</p>
        <p className={`error ${numberError}`}>This field is required</p>
      </div>
      <input type="number" placeholder="e.g. +1 234 567 890" onChange={(e) => setNumber(e.target.value)} className={numberError}/>

      <div className="buttons-cont step-one">

        <Link to={name && email && number ? "/two" : '#'}>
        <button className="next" onClick={handleCheck}>
          Next Step
        </button>
        </Link>
      </div>
    </div>
  );
};

export default StepOne;

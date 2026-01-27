import React, { useReducer } from "react";
import { formReducer, initialState } from "./reducer/formReducer";

import Step1Personal from "./components/Step1Personal";
import Step2Account from "./components/Step2Account";
import Step3Review from "./components/Step3Review";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const renderStep = () => {
    switch (state.step) {
      case 1:
        return <Step1Personal state={state} dispatch={dispatch} />;
      case 2:
        return <Step2Account state={state} dispatch={dispatch} />;
      case 3:
        return <Step3Review state={state} dispatch={dispatch} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <h2>Multi-Step Registration</h2>
      <ProgressBar step={state.step} />
      {renderStep()}
    </div>
  );
}

export default App;

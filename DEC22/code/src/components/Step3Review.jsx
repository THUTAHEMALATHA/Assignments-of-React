function Step3Review({ state, dispatch }) {
  const { formData, isSubmitted } = state;

  if (isSubmitted) {
    return (
      <>
        <h3>🎉 Form Submitted!</h3>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Reset
        </button>
      </>
    );
  }

  return (
    <>
      <p><b>Name:</b> {formData.name}</p>
      <p><b>Email:</b> {formData.email}</p>
      <p><b>Username:</b> {formData.username}</p>

      <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
        Back
      </button>

      <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
        Submit
      </button>
    </>
  );
}

export default Step3Review;

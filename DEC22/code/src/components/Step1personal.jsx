function Step1Personal({ state, dispatch }) {
  const { name, email } = state.formData;

  return (
    <>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "name",
            value: e.target.value
          })
        }
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "email",
            value: e.target.value
          })
        }
      />

      <button
        disabled={!name || !email}
        onClick={() => dispatch({ type: "NEXT_STEP" })}
      >
        Next
      </button>
    </>
  );
}

export default Step1Personal;

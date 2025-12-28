function Step2Account({ state, dispatch }) {
  const { username, password } = state.formData;

  return (
    <>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "username",
            value: e.target.value
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "password",
            value: e.target.value
          })
        }
      />

      <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
        Back
      </button>

      <button
        disabled={!username || !password}
        onClick={() => dispatch({ type: "NEXT_STEP" })}
      >
        Next
      </button>
    </>
  );
}

export default Step2Account;

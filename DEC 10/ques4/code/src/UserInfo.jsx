function UserInfo({ name, age }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "8px 12px",
        borderRadius: "4px",
        maxWidth: "250px",
      }}
    >
      <h3>User Information</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserInfo;

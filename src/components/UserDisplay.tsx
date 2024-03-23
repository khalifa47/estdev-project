import { useUser } from "./hooks";

const UserDisplay = () => {
  const { user, setUser } = useUser();

  return (
    <div>
      <h1>User Information from Context API</h1>
      {user ? (
        <>
          <p>
            My name is{" "}
            <span
              style={{ fontWeight: "bold" }}
            >{`${user.firstName} ${user.lastName}`}</span>
          </p>
          <p>
            You can contact me on <a href={`mailto:${user.email}`}>E-mail</a>
          </p>
          <button onClick={() => setUser(null)}>Logout</button>
        </>
      ) : (
        <button
          onClick={() =>
            setUser((prev) => ({
              ...prev,
              firstName: "Khalifa",
              lastName: "Fumo",
              email: "khalifa@email.com",
            }))
          }
        >
          Click me to find me
        </button>
      )}
    </div>
  );
};

export default UserDisplay;
